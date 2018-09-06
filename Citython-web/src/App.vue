<template>

  <div id="app">
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/'">Home</router-link> </button>
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/about'">The event</router-link> </button>
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/Challenge'">The challenge</router-link> </button>
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/Jury'">The jury</router-link> </button>
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/sponsors'">Sponsors</router-link> </button>
    <button class='section-button' id='section-button'> <router-link v-bind:to="'/contact'">Contact</router-link> </button>

    <div class="separador"></div>
    <!-- the router outlet, where all matched components would ber viewed -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;      /* color general del texto, afecta a todo dentro de 'app' */
  margin-top: 0px;
}

.separador{
  min-height: 50px;
}

a{
  color: white;
  text-decoration: none;
}

a:hover{
  font-weight: bold;
}

button{
  background-color: #db5c24;
  border-radius: 12px;
}
</style>



// https://router.vuejs.org/guide/#javascript
