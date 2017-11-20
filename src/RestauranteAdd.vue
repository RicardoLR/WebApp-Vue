<template>
    <div>
      <div id="restaurant-add" v-if="restaurante!=null">
        <h1> Crear nuevo restaurant </h1>
        
        <form v-on:submit.prevent="saveRestaurante">
            <p>
                <label> Nombre </label>
                <input type="text" v-model="restaurante.nombre" />
            </p>
            <p>
                <label> Direcciòn </label>
                <input type="text" v-model="restaurante.direccion" />
            </p>
            <p>
                <label> Descripcion </label>
                <textarea v-model="restaurante.descripcion"></textarea>
            </p>
            <p>
                <label> Precio </label>
                <select v-model="restaurante.precio">
                    <option value=""> Seleccionar una opcion... </option>
                    <option value="bajo"> Bajo </option>
                    <option value="normal"> normal </option>
                    <option value="alto "> Alto </option>
                </select>
            </p>
            <input type="submit" value="Guardar restaurante">
        </form>
      </div>
    </div>
</template>


<script>
import swal from 'sweetalert2'
import axios from 'axios';

export default {
  name: 'crear-restaurante',
  mounted(){
  },
  data() {
    return {
      restaurante : {
          nombre: '',
          direccion: '',
          descripcion:'',
          precio: 'normal'
      }
    }
  },
  methods: {
    saveRestaurante(){

        let router = this.$router;

        // modelToString
        let params = "json="+JSON.stringify(this.restaurante);
        
        axios.post('http://localhost:80/slim/restaurantes-api.php/restaurantes', params )
            .then( (res)=>{ 
                //message, status
                swal({
                    position: 'top-right',
                    type: 'success',
                    title: res.status,
                    showConfirmButton: false,
                    timer: 1500
                })

                router.push("/restaurantes")
             })
            .catch( error => {
                swal({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    type: 'error',
                    confirmButtonText: 'Try'
                })
            })
    }
  }
}
</script>

<style lang="scss">

</style>
