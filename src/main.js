import Vue from 'vue'

import VueRouter from 'vue-router'
import Axios from 'axios'

import App from './App.vue'

/** Solo al importar el componente ya podemos usarlo en Containers */
import Home from './components/containers/Home.vue'
import Contacto from './components/containers/Contacto.vue'
import Restaurante from './components/containers/Restaurante.vue'
import RestauranteAdd from './components/containers/RestauranteAdd.vue'
import RestauranteEdit from './components/containers/RestauranteEdit.vue'
import RestauranteTop from './components/containers/RestauranteTop.vue'
import RestauranteList from './components/containers/RestauranteList.vue'


/**  Configuracion de Rutas */
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home },
  {path: '/Home', component: Home },
  {path: '/contacto', component: Contacto },

  {path: '/restaurantes-destacados/:id', component: RestauranteTop, name:'restaurantes-destacados' },
  {path: '/editar-restaurante/:id', component: RestauranteEdit, name:'editar-restaurante' },

  {path: '/crear-restaurante', component: RestauranteAdd, name:'crear-restaurante' },
  {path: '/restaurante/:id', component: Restaurante, name:'restaurante' },
  {path: '/restaurantes', component: RestauranteList }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', Home)
Vue.component('contacto', Contacto)

Vue.component('restaurante-top', RestauranteTop)

Vue.component('restaurante', Restaurante)
Vue.component('crear-restaurante', RestauranteAdd)
Vue.component('restaurantes', RestauranteList)



new Vue({
  el: '#app',
  router, // Agrego mio Router
  render: h => h(App)
})
