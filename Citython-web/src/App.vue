<template>
  <div id="app">
    aquí vendrá la cabecera con el enlace al formulario de inscipción
    <router-view/>
    <br>
    zona para el planning
    <router-view/>
    <br>
    zona para los patrocinadores
    <router-view/>
    <br>
    footer
    <router-view/>
    Pendietes: encontrar una forma de manejar esto de manera decente, bla bla bla bla

    - Puedo usar un componente para los botones, otro componente para el resto de elementos
    - Uno para los elementos del footer
  </div>

  <div id="footer_custom">
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
