import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
/* import 'amfe-flexible' */
import http from './http'

// 引入公共样式文件
import './main.styl'
import '@/assets/css/common.css'
/* 引入公共重置样式 */
import '@/assets/css/extra-reset.css'

import nav from '@/components/nav.vue'
Vue.component('v-nav',nav)
import tab from '@/components/tabBar.vue'
Vue.component('v-tab',tab)
/*
引入flexible  "remUnit": 75
按照750设计稿  1rem = 75px;
*/
Vue.config.productionTip = false

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
