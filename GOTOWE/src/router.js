import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Restaurant from './views/Restaurant.vue'
import Order from './views/Order.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/restaurant/:id',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Order
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
