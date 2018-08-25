<template>
  <div class="spaces">
    <h1> {{msg}} </h1>
  </div>
</template>

<script>
var mensaje = 'Citython Barcelona 2018'
export default {
  name: 'spaces',
  data () {
    return {
      msg: mensaje
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    background-color: white;
  }
  .spaces{
    height: 80%;
    margin: auto;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
