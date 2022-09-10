import Vue from 'vue'
import Vuex from 'vuex'
import paymentsList from '@/store/paymentsList'
import categoryList from '@/store/categoryList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    paymentsList,
    categoryList
  }
})
