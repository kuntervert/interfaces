import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    termStatus: false,
    termDialog: false,
    loginView: false,
    signupView: true,
  },
  mutations: {
    acceptTerms(state) {
      state.termStatus = true
    },
    changeToLogin(state) {
      state.loginView = true
      state.signupView = false
    },
    changeToSignup(state) {
      state.signupView = true
      state.loginView = false
    },
    openTermDialog(state) {
      state.termDialog = true
    }
  },
  actions: {
    acceptTerms({
      commit
    }) {
      commit('acceptTerms')
    },
    changeToLogin({
      commit
    }) {
      commit('changeToLogin')
    },
    changeToSignup({
      commit
    }) {
      commit('changeToSignup')
    }
  },
  modules: {},
  getters: {
    termDialog: state => {
      return state.termDialog
    },
    termStatus: state => {
      return state.termStatus
    },
    isLoginView: state => {
      return state.loginView
    },
    isSignupView: state => {
      return state.signupView
    }
  }
})