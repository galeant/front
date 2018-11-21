import VueRouter from 'vue-router'
import Vue from 'vue';

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'
import Create from './components/product/Create.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path: '/login',
            component: Login,
            meta:{
                forVisit: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta:{
                forVisit: true
            }
        },
        {
            path: '/feed',
            component: Feed,
            meta:{
                isAuth: true
            }
        },
        {
            path: '/product/create',
            component: Create,
            meta:{
                isAuth: true
            }
        }
    ],
    linkActiveClass:'active',
    mode: 'history'
})

export default router