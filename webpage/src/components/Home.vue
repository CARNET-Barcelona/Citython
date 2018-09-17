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
        <button class="Faqs-button collapsible">FAQS</button>
      </div> <!-- end Faqs-header -->

      <div class="Faqs-body content">   <!-- debo hacerla que colapse  -->
        <p class="question"> Lorem Ipsum is simply dummy text of the printing and typesetting industry? </p>
        <p class="answer"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        <p class="question"> Lorem Ipsum is simply dummy text of the printing and typesetting industry? </p>
        <p class="answer"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

        <p class="question"> Lorem Ipsum is simply dummy text of the printing and typesetting industry? </p>
        <p class="answer"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>


      </div> <!-- end Faqs-body -->
        
    </div> <!-- end Faqs-section -->
    
    <div class="Event-location">
      <div class="Map-header">
        <button class="Map-button">MAP</button>
      </div>
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
/*

  var coll = document.getElementByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display == "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

*/

/* Estoy muy cansado de esta ierda, completamente harto de las presentacioes de mierda, es un asco, ingir que nos 
   importamos cuando no lo hacemos realmente es un completo hasco  */
/* <h1>{{ msg }}</h1>
    <h2> Bla bLa Bla Bla </h2>   */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #Home{
    overflow: scroll;
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
  .introduction{
    color: blue;
    position: relative;
    min-height: 15%;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
  .Event-details{
    color: blue;
    padding-bottom: 40px;
    padding-left: 60px;
    padding-right: 60px;
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
    color: #5cdaa9;
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
 .Map-button{
    background-color: pink;
    color: white;
    border-radius: 5px;
    font-size: 25;
    padding: 15px;
  }
  .Map-button:hover{
    font-weight: bold;
  }
  .Map-button:active{
    font-weight: bold;
    background-color: yellow;
  }

 /*
  .collapsible{
    cursor: pointer;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
  }

  .active, .collapsible:hover{
  }

  .content{
    padding: 0 18px;
    display: none;
    overflow: hidden;
  }
  */
</style>
