import Vue from 'vue'
import Vuex from 'vuex'
import captions from './captions'

Vue.use(Vuex)

const languageDict = {
    'sl': 'Slovenščina',
    'en': 'English'
};

const defaultState = function () {
    return {
        language: 'en', //sl, en -- ISO 639-1
        languageDict,
        captions
    }
}

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
