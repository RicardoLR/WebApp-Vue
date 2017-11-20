<template>
  <div> </div>
</template>


<script>
export default {
  name: 'restaurante-top',
  mounted(){
    this.id_restaurantes = this.$route.params.id;
  },
  data () {
    return {
      titulo: 'Pagina Restaurante',
      id_restaurantes: null
    }
  }
}
</script>

<style lang="scss">

</style>
