<template>
  <div>
    {{city}} Weather
  </div>
</template>

<script>

export default {
  name: 'CityWeather',
  data() {
      return {

      } 
  },
  props: {
    city: String
  },
  components: {

  }
}
</script>
