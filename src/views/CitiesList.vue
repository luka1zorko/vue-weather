<template>
  <div class="home">
      <div v-if="cities.length == 0">No cities</div>
      <div v-else>
          <div v-for="(city, i) in cities" :key="i" @click="toWeather(city)">
              {{city}}
          </div>
      </div>
      <button>Add city</button>
  </div>
</template>

<script>

var cities = ["Novo mesto", "Ljubljana"]

var toWeather = function (city) {
    console.log(city);
    this.$router.push({
        name: 'CityWeather',
        params: {
            city
        }
    });
}

export default {
  name: 'CitiesList',
  data() {
      return {
          cities
      } 
  },
  components: {

  },
  methods: {
      toWeather
  }
}
</script>
