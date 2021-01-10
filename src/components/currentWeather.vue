<template>
    <div>
        <!--Current temperature-->
        <div>
            {{currentWeather.main.temp | toDegreeC}}
        </div>
        <!--Additional info-->
        <div>
            <div>
                <div><span>Feels Like: </span><span>{{currentWeather.main.feels_like | toDegreeC}}</span></div>
                <div><span>Humidity: </span><span>{{currentWeather.main.humidity | toPercent}}</span></div>
                <div><span>Pressure: </span><span>{{currentWeather.main.pressure | toPressureHpa}}</span></div>
                <div><span>Wind speed: </span><span>{{currentWeather.wind.speed | toSpeedMs}}</span></div>
                <div><span>Cloudiness: </span><span>{{currentWeather.clouds.all | toPercent}}</span></div> 
                <div v-if="currentWeather.rain"><span>RAINING</span><span></span></div>
                <div v-if="currentWeather.snow"><span>SNOWING</span><span></span></div>
            </div>
        </div>
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