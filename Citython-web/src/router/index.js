import Vue from 'vue'
import Router from 'vue-router'
import spaces from '@/components/spaces'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spaces',
      component: spaces
    }
  ]
})
