<template>
	<div>
	  <div id="restaurant-add" v-if="restaurante!=null">
		<h1> Crear nuevo restaurant </h1>

		<formulario  
			v-bind:restaurante="restaurante"
			v-on:save-restaurante="saveRestaurante" >
		</formulario>
		
	  </div>
	</div>
</template>


<script>
import Formulario from '../common/Formulario'
import swal from 'sweetalert2'
import axios from 'axios';

export default {
	name: 'crear-restaurante',
	components: {
        Formulario, // Distinto nombre del Compoente en "name" con nombre de Archivo (Mayus)
    },
	data() {
		return {
			restaurante : {
				id: null,
				nombre: '',
				direccion: '',
				descripcion:'',
				precio: 'normal'
			}
		}
  },
  methods: {
	saveRestaurante(restaurante){

		let router = this.$router;

		// modelToString
		let params = "json="+JSON.stringify(restaurante);

		axios.post('http://localhost:80/slim/restaurantes-api.php/restaurantes', params, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		} )
		.then( res => { 
			//message, status
			swal({
				position: 'top-right',
				type: 'success',
				title: res.data.status,
				showConfirmButton: false,
				timer: 1500
			})

			router.push("/restaurantes")
			})
		.catch( err => {
			swal({
				title: 'Error!',
				text: 'Do you want to continue',
				type: 'error',
				confirmButtonText: 'Try'
			})
		});
	}
  }
}
</script>

<style lang="scss">

</style>
