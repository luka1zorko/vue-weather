import Vue from 'vue'
import VueRouter from 'vue-router'
import CitiesList from '../views/CitiesList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CitiesList',
    component: CitiesList
  },
  {
    path: '/weather/:city',
    name: 'CityWeather',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/CityWeather.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
