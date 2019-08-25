import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import pageNotFound from './views/pageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { headerMenu: true }
    },
    {
      path: '/pageNotFound',
      name: 'pageNotFound',
      component: pageNotFound,
      props: { headerMenu: false }
    },
    {
      path: '*',
      redirect: '/pageNotFound'
    }
  ]
})
