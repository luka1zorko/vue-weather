<template>
  <div class="home">
      <h3 class="title">{{captions.citiesList.myCities}}</h3>
      <div v-if="cities.length == 0">No cities</div>
      <div v-else class="col-md-6 col-sm-12 offset-md-3">
          <table class="table table-striped">
              <thead></thead>
              <tbody>
                <tr v-for="(city, i) in cities" :key="i" @click="toWeather(city)">
                  <td>{{city.name}}</td>
                  <td v-if="weather[i]">{{weather[i].data.main.temp | toDegreeC}}</td>
                  <td v-else> </td>
                  <td @click.stop="removeCity(i)"><i class="fas fa-trash-alt"></i></td>
                </tr>
              </tbody>
          </table>
      </div>
      <div id="buttons">
          <button class="btn btn-primary" @click="openAddCityModal()">{{captions.citiesList.addCity}}</button>
          <button class="btn btn-danger" @click="clearCitiesList()" v-show="weather.length">{{captions.citiesList.clearList}}</button>
      </div>

  <b-modal id="modal" hide-footer>
      <template #modal-title>
        {{captions.citiesList.addCityText}}
      </template>

    <div class="form-group row">
        <label for="cityInput" class="col col-form-label">{{captions.citiesList.enterCityName}}:</label>
        <div class="col">
            <input type="text" class="form-control" id="cityInput" :placeholder="captions.citiesList.cityName" v-model="newCity">
        </div>
    </div>
    <div id="modal-button-wrapper">
        <button class="btn btn-primary" @click="confirmCity()">{{captions.citiesList.addCity}}</button>
        <button class="btn btn-danger" @click="closeCityModal()">{{captions.app.cancel}}</button>
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

// is the chosen city already on the list ?
var checkCityInclusion = function(cities, newCity) {
    console.log("checking city inclusion: " + newCity)
    console.log(cities)
    for(var city of cities){
        if(city.name == newCity)
            return true
    }
    return false
}

var confirmCity = async function(){
    console.log("Confirmed city selection")
    if(!checkCityInclusion(this.cities, this.newCity)){
        let weather = await weatherApi.getCurrentWeather(this.newCity)
        var cityObject = {name: this.newCity, id: weather.data.id}
        this.cities.push(cityObject)
        this.weather.push(weather)
    }
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
        vm.weather.push(weather)
    }
    console.log("weather")
    console.log(vm.weather)
}

var removeCity = function(i) {  
    console.log("removinc city " + i)
    this.cities.splice(i, 1)
    localStorage.setItem('citiesList', JSON.stringify(this.cities))
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
      citiesWeather,
      removeCity
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
  },
  computed: {
    captions() {
      return this.$store.state.captions[this.$store.state.language]
    }
  }
}
</script>


<style scoped>

#modal-button-wrapper, #buttons{
    margin-top: 10px;
    text-align: center;
}

#modal-button-wrapper > button, #buttons > button{
    margin: 3px;
}

.fa-trash-alt {
    color: deepskyblue;
}

h3 {
    margin-bottom: 25px;
}

</style>