import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.use(require('vue-moment'));

import axios from 'axios'
import routes from './routes/routes'

const jquery = require('jquery')
window.$ = window.jQuery = jquery



//  Bootstrap core JavaScript
require("../public/vendor/bootstrap/js/bootstrap.bundle.min.js");
require("../public/vendor/jquery/jquery.min.js");


//  Core plugin JavaScript
require("../public/vendor/jquery-easing/jquery.easing.min.js");

//  Custom scripts for all pages
require("../public/js/sb-admin-2.min.js");

//  Page level plugins
require("../public/vendor/chart.js/Chart.min.js");



Vue.use(VueSession)
Window.axios = axios
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('vue-session-key') == null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.registerNow)) {
    if (sessionStorage.getItem('registrationSucces') == "true") {
      next()
    } else {
      next({
        path: '/',
        params: {
          nextUrl: to.fullPath
        }
      })
    }

  } else if (to.matched.some(record => record.meta.recover)) {
    if (JSON.parse(sessionStorage.getItem('reset')) == "recover") {
      next()
    } else {
      next({
        path: '/ForgotPassword',
        params: {
          nextUrl: to.fullPath
        }
      })
    }
  } else if (to.matched.some(record => record.meta.initail)) {
    if (JSON.parse(sessionStorage.getItem('reset')) == "initial") {
      next()
    } else {
      next({
        path: '/ForgotPassword',
        params: {
          nextUrl: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')