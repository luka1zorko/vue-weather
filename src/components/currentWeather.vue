<template>
    <div id="currentWeatherGrid">
        <!--Current temperature-->
        <div :class="['gridCurrentTemp', tempClass]">
            <div id="mainTemp">{{currentWeather.main.temp | toDegreeC}}</div>
            <div id="weatherDescription">{{currentWeather.weather[0].description}}</div><!--TODO replace text with image-->
        </div>
        <!--Additional info-->
        <div>{{captions.currentWeather.feelsLike}}: </div><div>{{currentWeather.main.feels_like | toDegreeC}}</div>
        <div>{{captions.currentWeather.humidity}}: </div><div>{{currentWeather.main.humidity | toPercent}}</div>
        <div>{{captions.currentWeather.pressure}}: </div><div>{{currentWeather.main.pressure | toPressureHpa}}</div>
        <div>{{captions.currentWeather.windSpeed}}: </div><div>{{currentWeather.wind.speed | toSpeedMs}}</div>
        <div>{{captions.currentWeather.cloudiness}}: </div><div>{{currentWeather.clouds.all | toPercent}}</div>
        <div v-if="currentWeather.rain">{{captions.currentWeather.rain}}: </div><div v-if="currentWeather.rain">{{currentWeather.rain["1h"] | toMilimeterPerHour}}</div>
        <div v-if="currentWeather.snow">{{captions.currentWeather.snow}}: </div><div v-if="currentWeather.snow">{{currentWeather.snow["1h"] | toMilimeterPerHour}}</div>
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
  },
  computed: {
    captions() {
      return this.$store.state.captions[this.$store.state.language]
    },
    tempClass() {
        var ct = this.currentWeather.main.temp
        if(ct < 0)
            return "colorSubZero"
        else if(ct < 10)
            return "colorSub10"
        else if(ct < 20)
            return "colorSub20"
        else if(ct < 30)
            return "colorSub30"
        else 
            return "colorSub40"
    }
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
    margin-bottom: 30px;
}

.gridCurrentTemp {
  grid-row-start: 1;
  grid-row-end: 7;
  font-size: 50px;
  display: grid;
  align-items: center;
}

.gridCurrentTemp > #weatherDescription {
    font-size: 35px;
}

</style>