<template>
  
  <div id="app">

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          </button>
        </div>
        
        <div id="navbar" class="navbar-collapse collapse">

          <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col-md-2">
              <router-link tag="li" to="/" exact><strong> Home </strong></router-link>
            </div>
            <div class="col-md-2">
              <router-link tag="li" to="/Agenda"><strong> Agenda </strong></router-link>
            </div>
            <div class="col-md-2">
              <router-link tag="li" to="/Register"><strong> Register </strong></router-link>
            </div>
            <div class="col-md-2">
             <router-link tag="li" to="/Contact"><strong> Contact </strong></router-link>                      
            </div>
            <div class="col-md-2">
            </div>
          </div> <!-- end row -->

        </div> <!-- end navbar -->
      </div> <!-- end container -->
    </nav> <!-- end nav -->
    
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
    min-height: 70%;    /* esta noche perderé parte de mi vida dándole los colores correctos a esta mierda enorme */
    overflow: scroll;
  }

  .navbar{
    background-color: blue;
    color: white;
  }
  #navbar{
    background-color: blue;
    color: white;
  }
  .footer {
    /* propiedades de footer comúna a todas las páginas */

    background-color: blue;
  }
router-link{
}
</style>
