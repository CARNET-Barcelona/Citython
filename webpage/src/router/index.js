import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
/*  cosas nuevas */
import Agenda from 'components/Agenda'
import Register from 'components/Register'
import Contact from 'components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /* cosas nuevas */
    {
    	path: 'components/',
    	name: 'Agenda',
    	component: Agenda
    },
    {
    	path: 'components/',
    	name: 'Register',
    	component: Register
    },
    {
    	path: 'components/',
    	name: 'Contact',
    	component: Contact
    }
  ]
})
