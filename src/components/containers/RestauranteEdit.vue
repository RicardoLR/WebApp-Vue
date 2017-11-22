<template>
	<div>
	  <div id="restaurant-edit" v-if="restaurante!=null">
		<h1> Editar restaurant {{this.restaurante.id }}</h1>

		<formulario 
			v-bind:restaurante="restaurante"
			v-on:edit-restaurante="editRestaurante" >
		</formulario>
		
	  </div>
	</div>
</template>


<script>
import Formulario from '../common/Formulario'
import swal from 'sweetalert2'
import axios from 'axios';

export default {
	name: 'editar-restaurante',
	components: {
        Formulario, // Distinto nombre del Compoente en "name" con nombre de Archivo (Mayus)
    },
    mounted(){
        this.restaurante.id = this.$route.params.id;

        this.getRestauranteId();
    },
	data() {
		return {
            restaurante : {
                id: '',
                nombre: '',
                direccion: '',
                descripcion:'',
                precio: 'normal'
            }
        }
  },
  methods: {
	editRestaurante(restaurante){

		let router = this.$router;

		// modelToString
		let params = "json="+JSON.stringify(restaurante);

		axios.post('http://localhost:80/slim/restaurantes-api.php/update-restaurante/'+restaurante.id, params, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		} )
		.then( res => { 
			//message, status
			swal({
				position: 'top-right',
				type: 'success',
				title: 'Exitoso',
				showConfirmButton: false,
				timer: 1500
			});

			router.push("/restaurantes");
		})
		.catch( err => {
			swal({
				title: 'Error!',
				text: 'Do you want to continue',
				type: 'error',
				confirmButtonText: 'Try'
			})
		});

	},
    getRestauranteId(){
        axios.get('http://localhost:80/slim/restaurantes-api.php/restaurante/'+this.restaurante.id)
        .then( (res)=>{ this.restaurante = res.data.data })
    }
  }
}
</script>

<style lang="scss">

</style>
