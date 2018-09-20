<template>
	<div id="Register">
		<div class="container registros">
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
</script>

<style>
#Register{
	display: block;
	min-height: 80vh;
}
.registros{
	min-height: 100px;
}
.centrado{
	display: block;
	top: 50%;    
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