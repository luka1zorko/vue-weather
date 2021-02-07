<template>
    <div class="col-md-8 col-sm-12 offset-md-2">
        <table class="table table-striped">
            <thead></thead>
            <tbody>
                <tr v-for="(el, i) in weatherData" :key="i">
                  <td>{{el.dt_txt | fullDateToHour}}</td>
                  <td>{{el.main.temp | toDegreeC}}</td>
                  <td>{{el.weather[0].description}}</td>
                </tr>
            </tbody>
        </table>
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

<style scoped>

</style>