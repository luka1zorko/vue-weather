<template>
    <div>
        <div id="week-days">
            <button :class="['blueButton', 'shadowed', 'pill', 'week-day', (selectedDay == i) ? 'activated' : '']" v-for="(el, i) in dailyWeather" :key="i" @click="changeDay(i)">
                <div>
                    {{el.dayName}}
                </div>
            </button>
        </div>
        <div v-if="dailyWeather[selectedDay]">
            <WeatherForecastDetails :weatherData="dailyWeather[selectedDay].weatherData"></WeatherForecastDetails>
        </div>
    </div>
</template>


<script>
import WeatherForecastDetails from '@/components/weatherForecastDetails.vue'
// 2D array of weatherdata --> dailyWeather[0] = today's weather
var dailyWeather = []
var selectedDay = 0

var getDayName = function(timestamp){
    var a = new Date(timestamp*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[a.getDay()]
}

var splitByDays = function(vm){
    console.log("splitting weather info by days")
    vm.dailyWeather = []
    var prevDayName = getDayName(vm.weatherForecast.list[0].dt)
    var dayWeather = []
    for(var el of vm.weatherForecast.list){
        var dayName = getDayName(el.dt)
        if(dayName != prevDayName){
            vm.dailyWeather.push({dayName: prevDayName, weatherData:dayWeather})
            dayWeather = []
        }    
        dayWeather.push(el)
        prevDayName = dayName
    }
    console.log(dailyWeather)
}

var changeDay = function(i){
    this.selectedDay = i
}

export default {
  name: 'weatherForecast',
  data() {
      return {
          dailyWeather,
          selectedDay
      } 
  },
  props: {
      weatherForecast: Object
  },
  components: {
      WeatherForecastDetails
  },
  methods: {
      changeDay
  },
  mounted () {
      console.log("mounted weatherForecast")
      console.log(this.weatherForecast)
      splitByDays(this)
  }
}
</script>

<style scoped>

#week-days {
    margin-bottom: 20px;
}

</style>