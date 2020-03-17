import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSession from 'vue-session'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

import axios from 'axios'
import routes from './routes/routes'

Vue.use(VueSession)
Window.axios = axios
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // base: '/userportal/',
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
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'userdashboard'
      })
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

  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')