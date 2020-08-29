import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router.js'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(axios);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
