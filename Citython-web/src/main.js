// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import the vue instance
import Vue from 'vue'
// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'


import spaces from './components/spaces'     // lo que importo es el nombre con el que llao al componente

//import the About component
import About from './components/About'

//import the Sponsors component
import Sponsors from './components/Sponsors'

//import the Contact component
import Contact from './components/Contact'

//import the Challenge component
import Challenge from './components/Challenge'

//import the Jury component
import Jury from './components/jury'

//import the agenda component
import Agenda from './components/agenda'

//tell vue to use the router
Vue.use(VueRouter)

//define your routes
const routes = [
  //define the root url of the application.
  { path: '/', component: spaces },
  { path: '/about', component: About },
  { path: '/sponsors', component: Sponsors},
  { path: '/contact', component: Contact},
  { path: '/challenge', component: Challenge},
  { path: '/jury', component: Jury},
  { paht: '/agenda', component: Agenda}
]

Vue.config.productionTip = false


// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

//instatinat the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
