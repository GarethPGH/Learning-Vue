<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import vuex from 'vuex';
import AddImage from 'AddImage.vue';
import Images from 'Images.vue';
import ImageGallery from 'ImageGallery.vue';

export default {
  name: 'App',
  store: store,
  //This needs and add images, images (may be moved to store for vuex), home image gallery
  components: {
    AddImage,
    Images,
    ImageGallery
  },
  //return state to the store in a computed property
  computed:{

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
