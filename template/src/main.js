// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import App from './App'
import router from './router'
import './App.scss'
// install axios
Axios.interceptors.response.use(response => response.data, error => {
  if (error.response && error.response.data) {
    error.message = error.response.data.errmsg
    error.code = error.response.data.errcode
  }
  return error
})
Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
