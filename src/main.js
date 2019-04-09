import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import http from './http'

/*
引入flexible  "remUnit": 37.5
按照750/2设计稿  1rem = 37.5px;
*/
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'cube-ui'
Vue.use(Button)
Vue.config.productionTip = false

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
