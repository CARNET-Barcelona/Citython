<template>
	<div id="Agenda">
	<p class="introduccion">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>

      <div class="container martes">

      	<button class="boton">
      		Tuestay 6
      	</button>

      	<div class="row">
      		<div class="col-md-6">
      			We don't know yet 
      			<br>
      			Tengo que revisar la puta agenda, ha habido cambios
      		</div>
      		<div class="col-md-6">
      		</div>
      	</div> 

      </div> <!-- end martes -->

      <button class="boton">
      		Saturday 10
      	</button>

      <div class="container sabado">

      	<div class="row">
      		<div class="col-md-6 hora">
      			8:00 - 10:00
      		</div>
      		<div class="col-md-6">
      			Participants registering and team formalization.
      		</div>
      	</div>

      	<div class="row">
      		<div class="col-md-6 hora">
      			10:00 - 10:30
      		</div>
      		<div class="col-md-6">
      			Welcome speech.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			10:30 - 13:00
      		</div>
      		<div class="col-md-6">
      			Techpills. Debo añadir aquí un enlace a la otra parte de la agenda.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			13:00 - 13:15
      		</div>
      		<div class="col-md-6">
      			Open Data BCN talk.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			13:15 - 14:00
      		</div>
      		<div class="col-md-6">
      			Launch time.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			14:00 - 21:00
      		</div>
      		<div class="col-md-6">
      			Working time.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			21:00 - 22:00
      		</div>
      		<div class="col-md-6">
      			Dinner time.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			21:00 - 00:00
      		</div>
      		<div class="col-md-6">
      			Working time.
      		</div>
      	</div> 

      </div> <!-- end sabado -->

      <button class="boton">
      		Sunday 11
      	</button>

      <div class="container domingo">

      	<div class="row">
      		<div class="col-md-6 hora">
      			8:00 - 13:00 
      		</div>
      		<div class="col-md-6">
      			Working time.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			13:00 - 14:00
      		</div>
      		<div class="col-md-6">
      			Launch time.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			14:00 - 15:00 
      		</div>
      		<div class="col-md-6">
      			Indivudual presentation to the jury.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			15:00 - 18:00 
      		</div>
      		<div class="col-md-6">
      			Jury deliberations and preparing presentations of the winners.
      		</div>
      	</div> 

      	<div class="row">
      		<div class="col-md-6 hora">
      			18:00 - 21:00 
      		</div>
      		<div class="col-md-6">
      			Presentation, ceremony awards and closure.
      		</div>
      	</div> 


     <!-- 	Estaría super bien colocar algún tipo de desplegable con un o algo un bocadillo o algo sobre quién da la charla y demás, supongo que esto lo haré con java script. -->
      </div> <!-- end domingo -->

    </div> <!-- end container -->

</template>

<script>
	export default {
	  name: 'Agenda'
	}
</script>

<style>
	#Agenda{
		color: blue;
	}
	.introduccion{
		padding-top: 50px;
		padding-right: 50px;
		padding-left: 50px;
	}
	.hora{
		font-weight: bold;
	}
	.martes{
		color: blue !important;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.sabado{
		color: blue !important;
		padding-bottom: 50px;
	}
	.domingo{
		color: blue !important;
		padding-bottom: 50px;
	}
	.boton{
		background-color: pink;
	    color: white;
	    border-radius: 5px;
	    font-size: 25;
	    padding: 15px;
	    margin-bottom: 30px;
	}
</style>