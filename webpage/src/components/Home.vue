<template>
  <div class="Home">
    
    <div class="introduction">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div> <!-- end introducction -->

    <div class="Event-details">
      Event Details
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div> <!-- end Event-details -->

    <div class="Faqs-section">           <!-- TENGO que hacer que esta mierda quepa donde toca para que esto tengo algún sentido -->
      <div class="Faqs-header">
        <button class="Faqs-button">FAQS</button>
      </div> <!-- end Faqs-header -->

      <div class="Faqs-body">   <!-- debo hacerla que colapse  -->
        <p class="question"> por qué la vida es tan coñazo?</p>
        <p class="answer"> porque sí, deja de preguntar estupideces y comienza a mover tu puto culo, olgazán</p>

        <p class="question"> por qué la vida es tan coñazo?</p>
        <p class="answer"> porque sí, deja de preguntar estupideces y comienza a mover tu puto culo, olgazán</p>

        <p class="question"> por qué la vida es tan coñazo?</p>
        <p class="answer"> porque sí, deja de preguntar estupideces y comienza a mover tu puto culo, olgazán</p>


      </div> <!-- end Faqs-body -->
        
    </div> <!-- end Faqs-section -->
    
    <div class="Event-location">
      Aquí irá el mapa indicando dónde se celebrará el evento, esta zona no se colapsará como el resto
    </div> <!-- end Event-location -->

  </div> <!-- end Home -->


</template>

<script>
export default {
  name: 'Cityhon Barcelona 2018',
  data () {
    return {
      msg: 'Citython Barcelona'
    }
  }
}



/* Estoy muy cansado de esta ierda, completamente harto de las presentacioes de mierda, es un asco, ingir que nos 
   importamos cuando no lo hacemos realmente es un completo hasco  */
/* <h1>{{ msg }}</h1>
    <h2> Bla bLa Bla Bla </h2>   */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.introduction{
  color: blue;
  position: relative;
  min-height: 15%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.Event-details{
  color: blue;
  padding-bottom: 40px;
}
.Faqs-section{
  color: blue;
  padding-bottom: 40px;
}
.Faqs-body{
  padding-top: 15px;    /* bad code */
}
.question{
  font-weight: bold;
}
.answer{
  color: green;
  padding-bottom: 10px;
}
.Faqs-button{
  background-color: pink;
  color: white;
  border-radius: 5px;
  font-size: 25;
  padding: 15px;
}
.Faqs-button:hover{
  font-weight: bold;
}
.Faqs-button:active{
  font-weight: bold;
  background-color: yellow;
}
.Event-location{
  color: blue;
  padding-bottom: 40px;
}
</style>
