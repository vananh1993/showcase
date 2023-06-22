import Vue from 'vue'
import Vuex from 'vuex'
// import { createStore } from 'vuex'
Vue.use(Vuex)
// import axios from "axios";
import showcases from '../modules/listShowcase.js'


const store = new Vuex.Store({
  modules: {
    showcases
  }
})
export default store
