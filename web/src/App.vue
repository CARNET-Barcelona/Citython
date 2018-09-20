<template>
  <div id="app"> 
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <router-link tag="li" to="/" exact><strong> Home </strong></router-link>
        <router-link tag="li" to="/Agenda"><strong> Agenda </strong></router-link>
        <router-link tag="li" to="/Register"><strong> Register </strong></router-link>
        <router-link tag="li" to="/Contact"><strong> Contact </strong></router-link>                      
      </div> <!-- end container -->
    </nav> <!-- end nav -->
    
    <router-view/>

  </div> <!-- end app -->
</template>

<script>
  export default {
    name: 'app'
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
  .navbar{
    color: white;
    background-color: blue;
  }
</style>
