<template>
  
  <div id="app">
    <div class="nav">
      <!-- espacio reservado para la barra de navegación -->
      <router-link tag="li" to="/" exact> Home </router-link>
      <router-link tag="li" to="/Agenda"> Agenda </router-link>
      <router-link tag="li" to="/Register"> Register </router-link>
      <router-link tag="li" to="/Contact"> Contact </router-link>
    </div>
    
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
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  /* propiedades de footer comúna a todas las páginas */

  background-color: blue;
}
router-link{
  text-decoration: none;
}
</style>
