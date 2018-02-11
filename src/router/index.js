import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components'
import Admin from '../components/Admin.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'feed',
    component: Blog
  }, {
    path: '/by/:author',
    name: 'author',
    props: true,
    component: Blog
  }, {
    path: '/admin',
    name: 'admin',
    props: true,
    component: Admin
  }, {
    path: '/read/:post',
    name: 'post',
    props: true,
    component: Blog
  }]
})
