import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/css/font-awesome.css'
import './assets/css/reset.css'
import './assets/css/common.css'

import routes from './routers/routers'
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

const app = new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
