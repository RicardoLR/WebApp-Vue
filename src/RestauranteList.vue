<template>
    <div>
      <ul id="restaurantes-list" v-if="restaurantes != null ">
        <li v-for="restaurante in restaurantes">  
          <strong> {{restaurante.nombre}} </strong>
          <p>
            <router-link :to="{name:'restaurante', params:{id:restaurante.id} }">
              ver
            </router-link>
            <router-link :to="{name:'editar-restaurante', params:{id:restaurante.id} }">
              editar
            </router-link>
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

    }
  },
  methods: {
    getRestaurantes(){
      axios.get('http://localhost:80/slim/restaurantes-api.php/restaurantes')
        .then( (res)=>{
          this.restaurantes = res.data.data
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
