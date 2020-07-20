import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './router'
import moment from 'moment';

Vue.config.productionTip = false

new Vue({
  store,
  moment,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')