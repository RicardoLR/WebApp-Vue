<template>
    <div>
      <h1>Detalle del restaurante con id : {{id}} </h1>
      <div id="restaurant-detail" v-if="restaurante!=null">
        <h2 v-text="restaurante.nombre">  </h2>
        <p v-text="restaurante.descripcion">  </p>
      </div>
      <span v-else> Cargando restaurante... </span>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'restaurante',
  mounted(){
    this.id = this.$route.params.id;

    this.getRestauranteId();
  },
  data() {
    return {
      id: null,
      restaurante : null,

    }
  },
  methods: {
    getRestauranteId(){
      axios.get('http://localhost:80/slim/restaurantes-api.php/restaurante/'+this.id)
        .then( (res)=>{ this.restaurante = res.data.data })
    }
  }
}
</script>

<style lang="scss">

</style>
