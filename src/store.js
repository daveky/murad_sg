import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '[pageTitle]'
  },
  getters: {
    pageTitle: function(state) {
      return state.pageTitle
    }
  },
  mutations: {
    set_pageTitle: function(state, payload) {
      state.pageTitle = payload.sendPageTitle
    }
  },
  actions: {
    set_pageTitle: function(context, payload) {
      context.commit('set_pageTitle', payload)
    }
  }
})