import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as  VueHammer  from 'vue2-hammer'
import './registerServiceWorker'
Vue.use(VueHammer,{name: 'v-hammer'});
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
