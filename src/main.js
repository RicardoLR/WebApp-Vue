import Vue from 'vue'

import VueRouter from 'vue-router'
import Axios from 'axios'

import App from './App.vue'

/** Solo al importar el componente ya podemos usarlo    */
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import Restaurante from './Restaurante.vue'
import RestauranteTop from './RestauranteTop.vue'
import RestauranteList from './RestauranteList.vue'


/**  Configuracion de Rutas */
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home },
  {path: '/Home', component: Home },
  {path: '/contacto', component: Contacto },

  {path: '/restaurantes-destacados/:id', component: RestauranteTop, name:'restaurantes-destacados' },
  {path: '/editar-restaurantes/:id', component: RestauranteTop, name:'editar-restaurantes' },

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
Vue.component('restaurantes', RestauranteList)

new Vue({
  el: '#app',
  router, // Agrego mio Router
  render: h => h(App)
})
