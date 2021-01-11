<template>
    <div id="currentWeatherGrid">
        <!--Current temperature-->
        <div class="gridCurrentTemp">
            <div>{{currentWeather.main.temp | toDegreeC}}</div>
            <div v-if="currentWeather.rain">RAINING</div><!--TODO replace text with image-->
            <div v-if="currentWeather.snow">SNOWING</div>
        </div>
        <!--Additional info-->
        <div>Feels Like: </div><div>{{currentWeather.main.feels_like | toDegreeC}}</div>
        <div>Humidity: </div><div>{{currentWeather.main.humidity | toPercent}}</div>
        <div>Pressure: </div><div>{{currentWeather.main.pressure | toPressureHpa}}</div>
        <div>Wind speed: </div><div>{{currentWeather.wind.speed | toSpeedMs}}</div>
        <div>Cloudiness: </div><div>{{currentWeather.clouds.all | toPercent}}</div>
    </div>
</template>


<script>

export default {
  name: 'currentWeather',
  data() {
      return {

      } 
  },
  props: {
      currentWeather: Object
  },
  methods: {

  },
  mounted () {
      console.log("mounter currentWeather")
      console.log(this.currentWeather)
  }
}
</script>

<style scoped>

#currentWeatherGrid {
    display: grid;
    grid-template-columns: minmax(40%, 300px) minmax(25%, 200px) minmax(25%, 200px);
    grid-gap: 10px;
    color: #444;
    max-width: 600px;
    margin: auto;
}

.gridCurrentTemp {
  grid-row-start: 1;
  grid-row-end: 6;
  font-size: 60px;
  color: deepskyblue; /*TODO change color with temperature*/ 
  display: grid;
  align-items: center;
}

</style>