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
						<div class="row texto">
							<div class="col-md-12">
								<p class="titulo">
									Urban planners
								</p>
								<p class="descripcion">
									Descripciópn del perfil buscado
								</p>
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
						<div class="row texto">
							<div class="col-md-12">
								<p class="titulo">
									Data scientists
								</p>
								<p class="descripcion">
									descripción del perfil buscado
								</p>
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
						<div class="row texto">
							<div class="col-md-12">
								<p class="titulo">
									Volunteers / Mentors / Techpills from students
								</p>
								<p class="descripcion">
									descripción del perfil buscado
								</p>
							</div>
						</div>
					</div>
				</div> <!-- button for volunteers -->

			</div> <!-- end row -->

		</div> <!-- end container registros -->
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
.texto{
	padding-top: 20px;
}
.titulo{
	color: blue;
	font-weight: bold;
}
.descripcion{
	color: blue;
}
</style>