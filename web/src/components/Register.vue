<template>
	<div id="Register">
		<div class="container registros">
			<div class="row">
				<div class="col-md-4">
					<div class="centrado">
						<div class="row">
							<div class="col-md-12">
								<a href="#"><button class="Register-button" id="Register-button-1">Sing Up!!</button></a>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								Botón de registro para urban-cosas
							</div>
						</div>
					</div>
				</div> <!-- button for urbanis-cosa -->
				<div class="col-md-4">
					<div class="centrado">
						<div class="row">
							<div class="col-md-12">
								<a href="#"><button class="Register-button" id="Register-button-2">Sing Up!!</button></a>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								Registro para data scientists
							</div>
						</div>
					</div>
				</div> <!-- button for data sicentits -->
				<div class="col-md-4">
					<div class="centrado">
						<div class="row">
							<div class="col-md-12">
								<a href="#"><button class="Register-button" id="Register-button-3">Sing Up!!</button></a>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								Botón de registro para voluntarios
							</div>
						</div>
					</div>
				</div> <!-- button for volunteers -->
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
	font-weight: bold;   
}
.Register-button:active{
	background-color: yellow;
}
</style>