import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '[pageTitle]',
    pageLink: '[pageLink]'
  },
  getters: {
    pageTitle(state) {
      return state.pageTitle
    },
    pageLink(state) {
      return state.pageLink
    }
  },
  mutations: {
    SET_pageTitle(state, payload) {
      state.pageTitle = payload.SEND_pageTitle
    },
    SET_pageLink(state, payload) {
      state.pageLink = payload.SEND_pageLink
    }
  },
  actions: {
    EMIT_pageHeader(context, payload) {
      context.commit('SET_pageTitle', payload)
      context.commit('SET_pageLink', payload)
    }
  }
})