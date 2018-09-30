<template>
	<div id="Contact">
		<p class="introducction">
	      	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	    </p> <!-- end introduccion -->
		
		<div class="container mails-organizadores">
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
				</div>
			</div>
		</div> <!-- end container -->
		
		<div class="about-carnet">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						Dirección de CARNET
						<br>
						número de teléfono de CARNET
						<br>
						<a href="mailto:info@carnetbarcelona.com?Subject=Citython_Web" target="_top" class="mail">info@carnetbarcelona.com</a>
					</div>
					<div class="col-md-6">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3010761325845!2d2.113551415425859!3d41.38926747926396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498590adff591%3A0xcfc1f59c98656bea!2sCarrer+de+Jordi+Girona%2C+31%2C+08034+Barcelona!5e0!3m2!1ses!2ses!4v1538310295138" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
			Enlaces a la smart city week
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
		padding-top: 40px;
		padding-bottom: 40px;
	}
	.about-ajuntament{
		
	}
	.smart-city-week{
		min-height: 100px;
		padding-top: 40px;
	}
	
</style>