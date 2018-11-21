import Vue from 'vue'
import App from './App.vue'
import Router from './route.js'

import VueResource from 'vue-resource'

import Auth from './package/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)
Vue.http.options.root = 'http://localhost:8000'
Vue.http.headers.common['Authorization'] = 'Bearer '+ Vue.auth.getToken()

Router.beforeEach(
  (to,from,next) => {
    // 
    if(to.matched.some(record => record.meta.forVisit)){
      if(Vue.auth.isAuth()){
        next({
          path: '/feed'
        })
      }else{
        next()
      }
    }else {
      next()
    }
    // 
    if(to.matched.some(record => record.meta.isAuth)){
      if(!Vue.auth.isAuth()){
        next({
          path:'/login'
        })
      }else{
        next()
      }
    }else{
      next()
    }
    // 
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
