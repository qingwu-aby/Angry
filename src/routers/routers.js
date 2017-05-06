import Home from '../components/home.vue'
import Menu from '../components/menu.vue'
import Category from '../components/category.vue'
import NotFound from '../components/404.vue'
import login from '../components/login.vue'
import personInfo from '../components/about/personInfo.vue'
import AboutInfo from '../components/about/aboutInfo.vue'
import register from '../components/register.vue'
import Article from '../components/article.vue'
import Sort from '../components/sort.vue'

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
    path: '/sort',
    component: Sort
},{
    path: '/article',
    component: Article
}, {
    path: '/menu',
    component: Menu,
	children: [{
		path: 'personInfo',
		component: personInfo
	},
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
    // }, 
    {
        path: 'aboutInfo',
        component: AboutInfo
    }
    // {
    //     path: 'aboutShare',
    //     component: AboutShare
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
