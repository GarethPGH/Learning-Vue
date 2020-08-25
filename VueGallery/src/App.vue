<template>
  <div id="app">
    <ThePictures></ThePictures>
  </div>
</template>

<script>
import store from './store/index.js';
import ThePictures from './components/ThePictures.vue';
import router from './router.js';
//Fixing Vue Router in router.js file
export default {
  name: 'App',
  
  store: store,

  router: router,

  components: {
      ThePictures
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
