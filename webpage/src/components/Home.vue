<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <h2> Bla bLa Bla Bla </h2>
    

    <div class="Event-details">
      aquí detalles sobre cómo serça el evento
    </div>

    <div class="Faqs-section">
      <button class="Faqs-button">FAQS</button>
        aquí irá la sección con las preguntas frecuentes, la haré que colapse.
    </div>
    
    <div class="Event-location">
      Aquí irá el mapa indicando dónde se celebrará el evento, esta zona no se colapsará como el resto
    </div>ç
  </div>
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
.Event-details {
  color: blue;
}
.Faqs-section {
  color: blue;
}
.Faqs-button {
  background-color: pink;
  color: white;
  border-radius: 5px;
  font-size: 25;
}
.Event-location{
  color: blue;
}
</style>
