import { createStore } from 'vuex'
import modules from './modules/index'

export default createStore({
  state: {
    count: 0
  },
  mutations: {},
  actions: {},
  modules
})
