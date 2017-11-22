<template>    
    <form v-on:submit.prevent="processEvent">
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
</template>

<script>

export default {
    props: ['restaurante'],
    methods: {
        processEvent: function () {
            
            if( this.$parent.$options.name == "crear-restaurante" )
                this.$emit('save-restaurante', this.restaurante) 
            else
                this.$emit('edit-restaurante', this.restaurante) 

        }
    }

}
</script>

<style lang="scss">

</style>
