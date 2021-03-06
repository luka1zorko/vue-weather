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
    path: '/weather/:cityId',
    name: 'CityWeather',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/CityWeather.vue')
  },
  {
    path: '/languageSelection/:languageId',
    name: 'LanguageSelection',
    component: () => import(/* webpackChunkName: "about" */ '../views/LanguageSelection.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
