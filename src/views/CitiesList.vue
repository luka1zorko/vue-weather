<template>
  <div class="home">
      <div v-if="cities.length == 0">No cities</div>
      <div v-else>
          <div v-for="(city, i) in cities" :key="i" @click="toWeather(city)">
              <span>{{city.name}}</span> 
              <span v-if="weather[i]">{{weather[i].data.main.temp | toDegreeC}}</span>
          </div>
      </div>
      <button class="btn btn-primary" @click="openAddCityModal()">Add city</button>
      <button class="btn btn-danger" @click="clearCitiesList()">Clear list</button>

  <b-modal id="modal" hide-footer>
      <template #modal-title>
      Add a new city
    </template>
    <div class="">
        Enter the name of your city
        <input v-model="newCity" type="text" />
    </div>
    <div id="modal-button-wrapper">
        <button class="btn btn-primary" @click="confirmCity()">Add City</button>
        <button class="btn btn-danger" @click="closeCityModal()">Cancel</button>
    </div>
  </b-modal>

  </div>
</template>

<script>
import weatherApi from '@/services/api/openWeatherApi.js'

var newCity = ""
var cities = []
var weather = []

var toWeather = function (city) {
    console.log("routing to weather for " + city.name);
    this.$router.push({
        name: 'CityWeather',
        params: {
            cityName: city.name,
            cityId: city.id.toString()
        }
    });
}

var openAddCityModal = function() {
    console.log("opening modal")
    this.$bvModal.show('modal')
}

var closeCityModal = function(){
    console.log("hiding modal")
    this.$bvModal.hide('modal')
    this.newCity = ""
}

var confirmCity = async function(){
    console.log("Confirmed city selection")
    let weather = await weatherApi.getCurrentWeather(this.newCity)
    var cityObject = {name: this.newCity, id: weather.data.id}
    this.cities.push(cityObject)
    this.weather.push(weather)
    this.$bvModal.hide('modal')
    this.newCity = ""
    localStorage.setItem('citiesList', JSON.stringify(this.cities))
}

var clearCitiesList = function() {
    this.cities = []
    this.weather = []
    localStorage.removeItem('citiesList')
}

var citiesWeather = async function(vm){
    console.log("getting current weather for all cities")
    vm.weather = []
    for(var city of vm.cities){
        let weather = await weatherApi.getCurrentWeather(city.name)
        console.log(city)
        console.log(weather)
        vm.weather.push(weather)
    }
    console.log("weather")
    console.log(vm.weather)
}

export default {
  name: 'CitiesList',
  data() {
      return {
          newCity,
          cities,
          weather
      } 
  },
  components: {

  },
  methods: {
      toWeather,
      openAddCityModal,
      closeCityModal,
      confirmCity,
      clearCitiesList,
      citiesWeather
  },
  created: function () {
      console.log("created citiesList")
      var storedCities = localStorage.getItem("citiesList");
      if(storedCities){
          storedCities = JSON.parse(localStorage.getItem("citiesList"));
          console.log(storedCities)
          this.cities = storedCities
          citiesWeather(this)
      }
  }
}
</script>
