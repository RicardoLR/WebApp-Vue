<template>
  <div id="app">
    <ul>
      <li> <router-link to="/home">Home</router-link> </li>
      <li> <router-link to="/restaurantes">Restaurantes</router-link> </li>
      <li> <router-link to="/crear-restaurante">Restaurante nuevo</router-link> </li>
      <li> <router-link :to="{ name:'restaurantes-destacados', params:{id:16} }">Restaurantes Destacados</router-link> </li>
      <li> <router-link to="/contacto">Contactos</router-link> </li>
    </ul>
    <hr />

    <!-- Cargar componentes
    <home>  </home>  -->

    <router-view> </router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'RestaurantesApp'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
