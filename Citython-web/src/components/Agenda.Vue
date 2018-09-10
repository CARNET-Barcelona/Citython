<template>
  <div id="agenda">
    aquí la agenda

    <div class="PRESENTACION">
      aquí irá el calendario de las charlas de la jornada de inicio de la hackathon
      Aún no sé cómo se distribuirá la jornada
    </div> <!-- end PRESENTACION -->

    <div class="SABADO">

      <div class="register-section">
        <div class="col-md-4">
          8:00 - 10:00
        </div>
        <div class="col-md-8">
          Registration
        </div>
      </div> <!-- end registar-section -->

      <div class="techpils-section">
        sección para organizar la información de los speakers

        debo crear algo similar a una tabla con las horas

          <div class="row tabla-horarios">
            <div class="col-md-4">
              10:30 - 11:00
            </div>
            <div class="col-md-8">
              ML
            </div>
          </div>

          <div class="row tabla-horarios">
            <div class="col-md-4">
              11:00 - 11:30
            </div>
            <div class="col-md-8">
              Urban shit
            </div>
          </div>

          <div class="row tabla-horarios">
            <div class="col-md-4">
              11:30 - 11:45
            </div>
            <div class="col-md-8">
              ML Student
            </div>
          </div>

          <div class="row tabla-horarios">
            <div class="col-md-4">
              11:45 - 12:00
            </div>
            <div class="col-md-8">
              Urban shit student
            </div>
          </div>

          <div class="row tabla-horarios">
            <div class="col-md-4">
              12:00 - 12:30
            </div>
            <div class="col-md-8">
              ML
            </div>
          </div>

          <div class="row tabla-horarios">
            <div class="col-md-4">
              12:30 - 13:00
            </div>
            <div class="col-md-8">
              Urban shit
            </div>
          </div>

      </div> <!-- end techpils-section -->

      <div class="launch-section">
          <!-- ahora nos toca comer -->
          <div class="row tabla-horarios">
            <div class="col-md-4">
              13:00 - 14:00
            </div>
            <div class="col-md-8">
              Comida rica rica
            </div>
          </div>
      </div> <!-- end launch-sectino -->

      <div class="Hack-section">
          <!-- ahora ya toca empezar a programar, muhahahah -->
          <div class="row tabla-horarios">
            <div class="col-md-4">
              14:00 - 00:00
            </div>
            <div class="col-md-8">
              Hack time!!
            </div>
          </div>
      </div> <!-- end Hack-section -->

    </div> <!-- end SABADO -->

    <div class="DOMINGO">

      <div class="Hack-section">
          <!-- ahora ya toca empezar a programar, muhahahah -->
          <div class="row tabla-horarios">
            <div class="col-md-4">
              8:00 - 14:00
            </div>
            <div class="col-md-8">
              Hack time!!
            </div>
          </div>
      </div> <!-- end Hack-section -->

      <div class="jury-section">
        <div class="row tabla-horarios">
            <div class="col-md-4">
              14:00 - 18:00.   
            </div>
            <div class="col-md-8">
              Presentations of the projects and deliverations of the jury
            </div>
          </div>
      </div> <!-- end jury-section -->

      <div class="ceremory-section">
        <div class="row tabla-horarios">
            <div class="col-md-4">
              18:00 - 21:00
            </div>
            <div class="col-md-8">
              Ceremony awards and closure
            </div>
          </div>
      </div> <!-- end ceremory-section -->

    </div> <!-- end DOMINGO -->

    <div class="map-section">
      section donde colocar el mapa
    </div> <!-- end map-section -->

  </div>
</template>

<script> 
export default {
  name: 'agenda'
}
</script>

<!-- styling for the component -->
<style>

#about {
  font-family: Futura,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tabla-horarios {

}

/* PRESENTACIÓN */
.PRESENTACION{

}

/* SABADO */
.SABADO{

}

.register-section {

}

.techpils-section {

}
 
.launch-section {

}

.Hack-secion{

}

/* DOMINGO */
.DOMINGO{

}

.jury-section {

}

.ceremony-section{

}

.map-section {

}

</style>
