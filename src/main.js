import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import App from './App.vue'
import store from './vuex'

import './assets/css/font-awesome.css'
import './assets/css/reset.css'
import './assets/css/common.css'

import routes from './routers/routers'
Vue.use(VueRouter)
Vue.prototype.$http = Axios

const router = new VueRouter({
    routes
})
/*router.beforeEach((to, from, next)=>{
	const token = sessionStorage.getItem('Yuan-Token')
	if(to.path === '/login'){
		if(token !== null && token !== 'null' && token !== 'undefined'){
			next('/about')
		}else {
			next()
		}
	}else if(to.path === '/reg') {
		next()
	}else {
		if(token !== null && token !== 'null' && token !== 'undefined') {
			next()
		}else{
			next('/login')
		}
	}
})*/
const app = new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
