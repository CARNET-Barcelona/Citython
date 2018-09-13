import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
/*  cosas nuevas */
import Agenda from '@/components/Agenda'
import Register from '@/components/Register'
import Contact from '@/components/Contact'

 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    /* cosas nuevas */
    {
    	path: '/',
    	name: 'Agenda',
    	component: Agenda
    },
    {
    	path: '/',
    	name: 'Register',
    	component: Register
    },
    {
    	path: '/',
    	name: 'Contact',
    	component: Contact
    }
  ]
})
