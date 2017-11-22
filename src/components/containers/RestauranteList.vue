<template>
    <div>
      <ul id="restaurantes-list" v-if="restaurantes != null ">
        <li v-for="restaurante in restaurantes">  
          <strong> {{restaurante.nombre}} {{restaurante.id}}</strong>
          <p>
            <router-link :to="{name:'restaurante', params:{id:restaurante.id} }">
              ver
            </router-link>
            <router-link :to="{name:'editar-restaurante', params:{id:restaurante.id} }">
              editar
            </router-link>
            <span v-if="showDelete != restaurante.id">
              <a @click="borrarRestaurante(restaurante.id)"> Eliminar </a>
            </span>
            <span v-else>
              <p> Estas seguro que qiuieres borrarlo </p>
              <button @click="cancelarRestaurante()">Cancelar</button>
              <button @click="confirmarRestaurante(restaurante.id)">Borrar</button>
            </span>
          </p>
        </li>
      </ul>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'restaurantes',
  mounted(){
    this.getRestaurantes();
  },
  data() {
    return {
      texto: 'Pagina Restaura tante',
      restaurantes : null,
      showDelete: null
    }
  },
  methods: {
    getRestaurantes(){
      axios.get('http://localhost:80/slim/restaurantes-api.php/restaurantes')
        .then( (res)=>{
          this.restaurantes = res.data.data
        })
    },
    borrarRestaurante(id){
      this.showDelete = id;
    },
    cancelarRestaurante(){
      this.showDelete = null
    },
    confirmarRestaurante(id){
      axios.get('http://localhost:80/slim/restaurantes-api.php/delete-restaurante/'+id)
        .then( (res)=>{
          this.showDelete = null
          this.getRestaurantes() // Actualizar restaurantes quitando el eliminado
        })
    }
  }
}
</script>

<style lang="scss">

#restaurantes-list{
  padding:5px;
  li{
    margin-top:10px;
    width:30%;
    height: 120px;
    border: 1px solid #ddd;
    padding: 20px;
    overflow: 20px;
  }
}

</style>
