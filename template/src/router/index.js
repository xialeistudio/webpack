import Vue from 'vue'
import Router from 'vue-router'
// guest
import GuestLogin from '@/routes/guest/Login'

import Dashboard from '@/routes/Dashboard'
import Home from '@/routes/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/guest', component: GuestLogin},
    {
      path: '/',
      component: Dashboard,
      children: [
        {path: '/', name: '首页', component: Home}
      ]
    }
  ]
})
