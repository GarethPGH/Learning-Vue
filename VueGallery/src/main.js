import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import VueRouter from 'https://unpkg.com/vue-router/dist/vue-router.js'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  {path: '/pictures', component: ThePictures},
  {path: '/pic', component: OpenPictures}
]
const router = new VueRouter({
  routes
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
