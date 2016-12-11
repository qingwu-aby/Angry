import Home from '../components/home.vue'
import Remind from '../components/remind.vue'
import Nav from '../components/nav.vue'
import About from '../components/about.vue'
import NotFound from '../components/404.vue'

export default [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/remind',
    component: Remind
}, {
    path: '/nav',
    component: Nav
}, {
    path: '/about',
    component: About
    // children: [{
    //     path: '',
    //     component: About
    // }, {
    //     path: 'aboutCollection',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutArticle',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutList',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutBug',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutInfo',
    //     component: aboutCollection
    // }, {
    //     path: 'aboutShare',
    //     component: aboutCollection
    // }]
}, {
    path: '*',
    component: NotFound
}]
