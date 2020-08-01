<template>
  <div id="app">
    <AddPicture></AddPicture>
    <Pictures></Pictures>
  </div>
</template>

<script>
import store from './store/index.js';
import AddPicture from './components/AddPicture.vue';
import ThePictures from './components/ThePictures.vue';
import OpenPicture from './components/OpenPicture';

export default {
  name: 'App',
  //This needs and add images, images (may be moved to store for vuex), home image gallery
  components: {
    store,
    AddPicture,
    ThePictures,
    OpenPicture
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
