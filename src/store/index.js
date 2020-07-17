import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    termStatus: false,
    termDialog: false,
    loginView: false,
    signupView: true,
    navDrawer: true,
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
    },

    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null
    }
  },
  actions: {
    async login({
      commit
    }, user) {
      const {
        data
      } = await axios.post('/api/user/login', user, {
        withCredentials: true
      });
      if (data.status === 'OK') {
        const {
          user
        } = data;
        commit('login', user);
      } else {
        throw data.status;
      }
    },
    logout({
      commit
    }) {
      commit('logout');
    },
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
    },
    navDrawer: state => {
      return state.navDrawer
    }
  }
})