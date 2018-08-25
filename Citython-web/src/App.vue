<template>
  <div id="app">
  
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/sponsors'">Sponsors</router-link>
    <router-link v-bind:to="'/contact'">Contact</router-link>

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
</style>



// https://router.vuejs.org/guide/#javascript
