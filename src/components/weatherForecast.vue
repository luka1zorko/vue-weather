<template>
    <div>
        <div>
            <span>day1</span>
            <span>day2</span>
            <span>day3</span>
        </div>
        <div v-for="(el, i) in weatherForecast.data.list" :key="i">
            {{el.dt_txt}}
        </div>
    </div>
</template>


<script>

export default {
  name: 'weatherForecast',
  data() {
      return {

      } 
  },
  props: {
      weatherForecast: Object
  },
  methods: {

  },
  mounted () {

  }
}
</script>