import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  createStore
} from 'vuex-extensions'
Vue.use(Vuex)

export default createStore(Vuex.Store, {
  state: {
    user: null,
    termStatus: false,
    termDialog: false,
    loginView: false,
    signupView: true,
    navDrawer: true,
    chosenTab: 0,
    chosenPage: 'Home',
    chosenProject: null,
    createDialog: false,
    postDialog: false,
    postDialogType: null,
    shareDialog: false,
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
    changePage(state, page) {
      state.chosenPage = page;
    },
    chooseProject(state, id) {
      console.log("id on:", id)
      state.chosenProject = state.user.projects.find(p => p._id === id)

    },
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null

    },
    changeTab(state, nr) {
      state.chosenTab = nr
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
    chosenTab: state => {
      return state.chosenTab
    },
    chosenProject: state => {
      return state.chosenProject
    },
    chosenProjectPostsOnly: state => {
      return state.chosenProject.posts.posts.filter((c) => c.type === 'Post');
    },
    chosenProjectQuestionsOnly: state => {
      return state.chosenProject.posts.posts.filter((c) => c.type === 'Question');
    },
    postDialogType: state => {
      return state.postDialogType
    },
    userProjects: state => {
      return state.user.projects;
    },
    createDialog: state => {
      return state.createDialog
    },
    postDialog: state => {
      return state.postDialog
    },
    shareDialog: state => {
      return state.shareDialog
    },
    chosenPage: state => {
      return state.chosenPage
    },
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
    },
    username: state => {
      return state.user.username
    }
  }
})