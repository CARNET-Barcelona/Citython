<template>
  <div id="app">
    <router-view/>
    <br>
    <router-view/>
    <br>
    <router-view/>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;      /* color general del texto, afecta a todo dentro de 'app' */
  margin-top: 0px;
}
</style>
