import Vue from 'vue'
import Router from 'vue-router'
import honor from './views/Honor.vue'
import blog from './views/Blog.vue'
import about from './views/Donor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'honor',
      component: honor
    },
    {
      path: '/donor',
      name: 'donor',
      component: about
    },
    {
      path : '/blog',
      name : 'blog',
      component : blog
    }
  ]
})
