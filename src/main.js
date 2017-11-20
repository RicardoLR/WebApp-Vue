import Vue from 'vue'
import App from './App.vue'

/** Solo al importar el componente ya podemos usarlo    */
import Home from './Home.vue'
Vue.component('home', Home)


new Vue({
  el: '#app',
  render: h => h(App)
})
