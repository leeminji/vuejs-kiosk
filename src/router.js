import Vue from 'vue'
import Router from 'vue-router'

import honor from './views/Honor.vue'
import people from './views/People.vue'
import donor from './views/Donor.vue'
import history from './views/History.vue'
import doctor from './views/Doctor.vue'

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
      component: donor
    },
    {
      path : '/people',
      name : 'people',
      component : people
    },
    {
      path : '/doctor',
      name : 'doctor',
      component : doctor
    },
    {
      path : '/history',
      name : 'history',
      component : history
    },
  ]
})
