<template>
  <div>
    <div>
      <span @click="displayCurrentWeather=true">{{city.name}} Current Weather</span>
      <span @click="displayCurrentWeather=false">{{city.name}} 3 day forecast</span>
    </div>
    <div v-if="currentWeather.data && displayCurrentWeather">
      <CurrentWeatherComp :currentWeather="currentWeather"></CurrentWeatherComp>
    </div>
    <div v-if="weatherForecast.data && !displayCurrentWeather">
      <WeatherForecastComp :weatherForecast="weatherForecast"></WeatherForecastComp>
    </div>
  </div>
</template>

<script>
import weatherApi from '@/services/api/openWeatherApi.js'
import WeatherForecastComp from '@/components/weatherForecast.vue'
import CurrentWeatherComp from '@/components/currentWeather.vue'

var currentWeather = {}
var weatherForecast = {}
var displayCurrentWeather = true

var cityWeather = async function(vm){
    console.log("getting city weather")
    vm.currentWeather = await weatherApi.getCurrentWeather(vm.city.name)
    console.log(vm.currentWeather)
    console.log("getting weather forecast")
    vm.weatherForecast = await weatherApi.getWeatherForcast(vm.city)
    console.log(vm.weatherForecast)
    console.log(vm.weatherForecast.data.list.length)
}

export default {
  name: 'CityWeather',
  data() {
      return {
        weatherForecast,
        currentWeather,
        displayCurrentWeather
      } 
  },
  props: {
    city: Object
  },
  components: {
    WeatherForecastComp,
    CurrentWeatherComp
  },
  methods: {

  },
  mounted () {
    console.log("mounted weather")
    cityWeather(this)
  }
}
</script>
