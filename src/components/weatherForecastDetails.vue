<template>
    <div>
        <div v-for="(el, i) in weatherData" :key="i">
            {{el.dt_txt | fullDateToHour}}
            {{el.main.temp | toDegreeC}}
        </div>
    </div>
</template>


<script>

export default {
  name: 'weatherForecastDetails',
  data() {
      return {

      } 
  },
  props: {
      weatherData: Array
  },
  methods: {

  },
  mounted () {
      console.log("WEATHER DATA")
      console.log(this.weatherData)
  }
}
</script>