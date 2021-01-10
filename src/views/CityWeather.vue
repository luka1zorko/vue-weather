<template>
  <div>
    <div>
      <h3>{{cityName}}</h3>
    </div>
    <div>
      <span @click="displayCurrentWeather=true">Current Weather</span>
      <span @click="displayCurrentWeather=false">Weather forecast</span>
    </div>
    <div v-if="currentWeather.data && displayCurrentWeather">
      <CurrentWeatherComp :currentWeather="currentWeather.data"></CurrentWeatherComp>
    </div>
    <div v-if="weatherForecast.data && !displayCurrentWeather">
      <WeatherForecastComp :weatherForecast="weatherForecast.data"></WeatherForecastComp>
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
    vm.currentWeather = await weatherApi.getCurrentWeatherFromId(vm.cityId)
    console.log(vm.currentWeather)
    console.log("getting weather forecast")
    vm.weatherForecast = await weatherApi.getWeatherForcast(vm.cityId, vm.cityName)
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
    cityName: String,
    cityId: String
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
