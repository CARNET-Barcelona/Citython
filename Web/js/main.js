import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// creo una instancia de vue
const register = new Vue({
  el: '#register',
  data: {
    // variables y datos a comunicar
    mensaje: "Thanks :)";
  }
})




/* https://bootstrap-vue.js.org/docs */
