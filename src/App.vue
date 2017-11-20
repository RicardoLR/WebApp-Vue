<template>
  <div id="app">
    <ul>
      <li> <a href="#" target="_blank"> Home </a> </li>
      <li> <a href="#" target="_blank"> Restaurantes </a> </li>
      <li> <a href="#" target="_blank"> Restaurantes Destacados </a> </li>
      <li> <a href="#" target="_blank"> Contactos </a> </li>
    </ul>

    <!-- Cargar componentes -->
    <home>  </home>

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
