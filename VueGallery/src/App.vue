<template>
  <div id="app">
    <AddPicture></AddPicture>
    <ThePictures></ThePictures>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import store from './store/index.js';
import AddPicture from './components/AddPicture.vue';
import ThePictures from './components/ThePictures.vue';
import OpenPicture from './components/OpenPicture';

export default {
  name: 'App',
  //This needs and add images, images (may be moved to store for vuex), home image gallery
  store: store,

  components: {
      AddPicture,
      ThePictures,
      OpenPicture
  },
  methods:{
    ...mapActions({setPicture: actions => actions.setPicture})
  },

  created(){
    let pic1 = {picture_id: '0', picture_title:"Fox Mural",
          picture_thumbUrl:"../../assets/thumbs/foxmuralthumb.jpg",
          picture_url:"../../assets/pictures/foxmural.jpg", 
          picture_description:"Mural of fox family with Spring flowers"};
    let pic2 = {picture_id: '1', picture_title:"Fox Painting",
          picture_thumbUrl:"../../assets/thumbs/foxpaintingthumb.jpg",
          picture_url:"../../assets/pictures/foxpainting.jpg",
          picture_description:"Painting of a fox on wood slab backed by wisteria flowers"};
    let pic3 = {picture_id: '2', picture_title:"Mead Label",
          picture_thumbUrl:"../../assets/thumbs/meadlabelthumb.jpg",
          picture_url: "../../assets/pictures/meadlabel.jpg",
          picture_description: "Label for mead wine"};
    let pic4 = {picture_id: '3', picture_title:"Pittsburgh Mural",
          picture_thumbUrl:"../../assets/thumbs/pittsburghmuralthumb.jpg",
          picture_url:"../../assets/pictures/pittsburghmural.JPG",
          picture_description:"Mural of the city of Pittsburgh with older style stadiums"};
    store.setPicture(pic1);
    store.setPicture(pic2);
    store.setPicture(pic3);
    store.setPicture(pic4);
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
