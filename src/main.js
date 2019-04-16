import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as socketApi from '@/api/socket'
Vue.prototype.socketApi = socketApi
Vue.config.productionTip = false
Vue.config.devtools  = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
