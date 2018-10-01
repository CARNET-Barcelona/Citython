<template>
	<div id="Register">
		<div class="container registros">

			<div class="row button-holder">
				<div class="col-md-12">
					<a href="#"><button class="Register-button" id="Register-button-1">Register!!</button></a>
				</div>
			</div> <!-- end button-holder -->

			<div class="row text-holder">
				<div class="col-md-12">
					<p class="titulo">
						join us motherfuckers!!
					</p>
					<p class="texto">
					</p>
				</div>
			</div> <!-- end button-holder -->
<!--
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
				</div>--> <!-- button for urbanis-cosa 

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
				</div>--> <!-- button for data sicentits 

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
				</div> --><!-- button for volunteers -->

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
	font-weight: normal;   
}
.Register-button:active{
	background-color: #db5c24;
}
.button-holder{
	padding-top: 40px;
	padding-bottom: 40px;
}
.text-holder{
	padding-top: 40px;
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