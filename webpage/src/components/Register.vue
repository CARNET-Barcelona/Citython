<template>
	<div id="Register">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="centrado">
						<a href="#"><button class="Register-button" id="Register-button-1">Sing Up!!</button></a>
					</div>
				</div> <!-- button for urbanis-cosa -->
				<div class="col-md-6">
					<div class="centrado">
						<a href="#"><button class="Register-button" id="Register-button-2">Sing Up!!</button></a>
					</div>
				</div> <!-- button for data sicentits -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Register'
	}


	var boton1 = document.getElementById("Register-button-1");   // botón de registro para los uban-cosa NO ESTOY SEGURO DE QUE LOS NECESITA, PERO ADELANTE LOS FAROLES
	var boton2 = document.getElementById("Register-button-2");   // botón de registro para los data-scientits

	var canvas = document.getElementById("Register");

	// quizás unas cuantas pompas que suban por el canvas de manera pseudo aleatoria funcionaría bien, siempte
	// y cuando cambien de color al entrar en contacto con las sexxinoes que no son blancas y su color se vuelva complementeario.
	// aquí deberé hacer algún tipo de animación chula que me sirva para entretenerme
</script>

<style>
#Register{
	display: block;
}
.centrado{
	position: relative;
	display: block;
	top: 50%;    /* puedo hacer que el botón se mueva de un lado para otro o algo así, quedaría chulo 
	                con pompitas moviéndose por todos lados de color rosa, excepto cuando entren en contacto con
	                el botón que serán azules */
	padding: 40px;
}
.Register-button{
	background-color: pink;
	color: white;
	border-radius: 5px;
	font-size: 50px;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 15px;
	padding-bottom: 15px;

}
.Register-button:hover{
	/* cosas nazis peter, cosas nazis */
	font-weight: bold;   /* muy cutre, quizás deba hacer algo mejor y coherente con el resto */
}
.Register-button:active{
	/* debo hacer algo mejor que esto */
	background-color: yellow;
}
</style>