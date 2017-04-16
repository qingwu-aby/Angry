import Home from '../components/home.vue'
import About from '../components/about.vue'
import Category from '../components/category.vue'
import NotFound from '../components/404.vue'
import login from '../components/login.vue'
import personInfo from '../components/about/personInfo.vue'
import register from '../components/register.vue'

export default [{
    path: '/',
    component: Home,
	redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
	path: '/category',
	component: Category
}, {
    path: '/about',
    component: About,
	children: [{
		path: 'personInfo',
		component: personInfo
	}
    // }, {
    //     path: 'aboutCollection',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutArticle',
    //     component: aboutArticle
    // }, {
    //     path: 'aboutList',
    //     component: aboutList
    // }, {
    //     path: 'aboutBug',
    //     component: aboutBug
    // }, {
    //     path: 'aboutInfo',
    //     component: aboutInfo
    // }, {
    //     path: 'aboutShare',
    //     component: aboutShare
    // }
     ]
}, {
	path: '/login',
	component: login,
}, {
	path: '/reg',
	component: register,
}, {
    path: '*',
    component: NotFound
}]
