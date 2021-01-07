<template>
  <div class="home">
      <div v-if="cities.length == 0">No cities</div>
      <div v-else>
          <div v-for="(city, i) in cities" :key="i" @click="toWeather(city)">
              {{city}}
          </div>
      </div>
      <button @click="openAddCityModal()">Add city</button>

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

var newCity = ""
var cities = []

var toWeather = function (city) {
    console.log(city);
    this.$router.push({
        name: 'CityWeather',
        params: {
            city
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

var confirmCity = function(){
    console.log("Confirmed city selection")
    this.cities.push(this.newCity)
    this.$bvModal.hide('modal')
    this.newCity = ""
}

export default {
  name: 'CitiesList',
  data() {
      return {
          newCity,
          cities
      } 
  },
  components: {

  },
  methods: {
      toWeather,
      openAddCityModal,
      closeCityModal,
      confirmCity
  }
}
</script>
