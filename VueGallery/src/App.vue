<template>
  <div id="app">
    <AddPicture></AddPicture>
    <Pictures></Pictures>
  </div>
</template>

<script>
import AddPicture from './components/AddPicture.vue';
import Pictures from './components/Pictures.vue';

export default {
  name: 'App',
  //This needs and add images, images (may be moved to store for vuex), home image gallery
  components: {
    AddPicture,
    Pictures
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
