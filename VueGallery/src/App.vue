<template>
  <div id="app">
    <AddPicture></AddPicture>
    <ThePictures></ThePictures>
  </div>
</template>

<script>
import store from './store/index.js';
import AddPicture from './components/AddPicture.vue';
import ThePictures from './components/ThePictures.vue';

export default {
  name: 'App',
  
  store: store,

  components: {
      AddPicture,
      ThePictures,
  }
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
