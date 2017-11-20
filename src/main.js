import Vue from 'vue'

import VueRouter from 'vue-router'
import Axios from 'axios'

import App from './App.vue'

/** Solo al importar el componente ya podemos usarlo    */
import Home from './Home.vue'
Vue.component('home', Home)


import Contacto from './Contacto.vue'
import RestauranteList from './RestauranteList.vue'
import RestauranteTop from './RestauranteTop.vue'


/**  Configuracion de Rutas */
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home },
  {path: '/contacto', component: Contacto },
  {path: '/Home', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.component('contacto', Contacto)
Vue.component('restaurante-list', RestauranteList)
Vue.component('restaurante-top', RestauranteTop)

new Vue({
  el: '#app',
  router, // Agrego mio Router
  render: h => h(App)
})
