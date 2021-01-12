<template>
  <div>
    <div>
      <h3>{{cityName}}</h3>
    </div>
    <div id="weatherMenu">
      <div :class="[displayCurrentWeather ? 'selected' : '']" @click="displayCurrentWeather=true">Current Weather</div>
      <div :class="[!displayCurrentWeather ? 'selected' : '']" @click="displayCurrentWeather=false">Weather forecast</div>
    </div>
    <div v-if="currentWeather.data && displayCurrentWeather">
      <CurrentWeatherComp :currentWeather="currentWeather.data"></CurrentWeatherComp>
    </div>
    <div v-if="weatherForecast.data && !displayCurrentWeather">
      <WeatherForecastComp :weatherForecast="weatherForecast.data"></WeatherForecastComp>
    </div>
    <div>
      <button class="btn btn-primary" @click="toCitiesList()">Back to cities list</button>
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
    vm.cityName = vm.currentWeather.data.name //temporary solution, fix later TODO
    console.log("getting weather forecast")
    vm.weatherForecast = await weatherApi.getWeatherForcast(vm.cityId, vm.cityName)
    console.log("got weatherForecast")
    console.log(vm.weatherForecast)
    console.log(vm.weatherForecast.data.list.length)
}

var toCitiesList = function() {
  this.$router.push('/')
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
    toCitiesList
  },
  mounted () {
    console.log("mounted weather")
    cityWeather(this)
  }
}
</script>


<style scoped>

#weatherMenu > div {
  display: inline-block;
  border: 4px solid lightgrey;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
}

#weatherMenu > div.selected {
  background-color: deepskyblue;
  color: white;
}

button {
  margin-top: 15px;
}

</style>