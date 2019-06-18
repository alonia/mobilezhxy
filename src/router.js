import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login')
    },
    {
      path: '/financeExamined',
      name: 'financeExamined',
      component: () => import(/* webpackChunkName: "about" */ './views/finance/examine')
    },
    {
      path: '/financeRecharge',
      name: 'financeRecharge',
      component: () => import(/* webpackChunkName: "about" */ './views/finance/recharge')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "about" */ './views/order')
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: () => import(/* webpackChunkName: "about" */ './views/order/orderConfirm')
    },
    {
      path: '/orderNotice',
      name: 'orderNotice',
      component: () => import(/* webpackChunkName: "about" */ './views/order/notice')
    },
    {
      path: '/orderDestine',
      name: 'orderDestine',
      component: () => import(/* webpackChunkName: "about" */ './views/order/orderDestine')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import(/* webpackChunkName: "about" */ './views/goods')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/goods/detail')
    },
     {
      path: '/stockManage',
      name: 'stockManage',
      component: () => import(/* webpackChunkName: "about" */ './views/stock/stockManage')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import(/* webpackChunkName: "about" */ './views/system/message')
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/account')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login')
    }
  ]
})
