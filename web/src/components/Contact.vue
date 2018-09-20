<template>
	<div id="Contact">
		<p class="introducction">
	      	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	    </p> <!-- end introduccion -->
		
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					Manuel Gijón Agudo
				</div>
				<div class="col-md-6 mail">
					<a href="mailto:manuel.gijon@carnetbarcelona.com?Subject=Citython_Web" target="_top">manuel.gijon@carnetbarcelona.com</a>  
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					Ekaterina Uzunova
				</div>
				<div class="col-md-6 mail">
					<a href="mialto:ekaterina@carnetbarcelona.com?Subject=Citython_Web" target="_top">
					ekaterina@carnetbarcelona.com</a>
					<!-- QUEDARÁ MIL VECES MEJOR ASÍ... Y CAMBIARLES EL FORMATO POR DIOS
					Buscar el GenBank, NCBI para buscar artículos y mierdas varias -->
				</div>
			</div>
		</div> <!-- end container -->
		
		<div class="about-carnet">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						Carrer Jordi bla bla bla bla
						<br>
						número de teléfono
						<br>
						<a href="mailto:info@carnetbarcelona.com?Subject=Citython_Web" target="_top" class="mail">info@carnetbarcelona.com</a>
					</div>
					<div class="col-md-6">
						aquí insertaré un mapa de carnet con quizás alguna transición chula
					</div>
				</div>
			</div> <!-- end container -->
		</div> <!-- end about-carnet -->

		<div class="about-ajuntament">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						aquí insertaré un mapa de la mierda esta, alguna transición chula
					</div>
					<div class="col-md-6">
						Dirección del ajuntamiento
						<br>
						número de teléfono
						<br>
						<a href="mailto:info@carnetbarcelona.com?Subject=Citython_Web" target="_top" class="mail">direccion del ayntamiento</a>
					</div>
				</div>
			</div> <!-- end container -->
		</div> <!-- end about-ajuntament -->

		<div class="smart-city-week">
			aquí irá una pequeña descripción de esta mierda, con enlaces, imágenes, etc.
		</div> <!-- smart-city-week -->
	</div>
</template>

<script>
	export default {
	  name: 'Contact'
	}
</script>

<style>
	a{
		text-decoration: none;
	}
	#Contact{
		color: blue;
	}
	.introducction{
		padding: 50px;
	}
	.container{
		padding-bottom: 50px;
	}
	.mail{
		font-weight: bold;
		color: blue;
	}
	.mail:hover{
		font-weight: bold;
		font-size: 20px;
	}
	.mail:active{
		font-weight: bold;
		font-size: 15px;
		color: blue; 
	}
	.about-carnet{
		
	}
	.about-ajuntament{
		
	}
	.smart-city-week{
		min-height: 100px;
	}
</style>