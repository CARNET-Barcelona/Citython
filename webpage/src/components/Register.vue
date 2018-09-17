<template>
	<div id="Register">
		<div class="centrado">
			<button class="Register-button">Sing Up!!</button>
		</div> <!-- end centrado -->
	</div>
</template>

<script>
	export default {
	  name: 'Register'
	}
</script>

<style>
#Register{
	display: block;
}
.centrado{
	position: absolute;
	display: block;
	top: 50%;    /* puedo hacer que el botón se mueva de un lado para otro o algo así, quedaría chulo 
	                con pompitas moviéndose por todos lados de color rosa, excepto cuando entren en contacto con
	                el botón que serán azules */
	left: 45%;
}
.Register-button{
	background-color: pink;
	color: white;
	border-radius: 5px;
	font-size: 50px;

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