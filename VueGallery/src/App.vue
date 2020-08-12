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
//import OpenPicture from './components/OpenPicture';

export default {
  name: 'App',
  //This needs and add images, images (may be moved to store for vuex), home image gallery
  store,

  components: {
      AddPicture,
      ThePictures,
  },
  methods:{

  },
  created(){
    let pic1 = new store.picture({id: 0, title:"Fox Mural",
          thumbUrl:"../../assets/thumbs/foxmuralthumb.jpg",
          url:"../../assets/pictures/foxmural.jpg", 
          description:"Mural of fox family with Spring flowers"});
    let pic2 = new store.picture({id: 1, title:"Fox Painting",
          thumbUrl:"../../assets/thumbs/foxpaintingthumb.jpg",
          url:"../../assets/pictures/foxpainting.jpg",
          description:"Painting of a fox on wood slab backed by wisteria flowers"});
    let pic3 = new store.picture(      {id: 2, title:"Mead Label",
          thumbUrl:"../../assets/thumbs/meadlabelthumb.jpg",
          url: "../../assets/pictures/meadlabel.jpg",
          description: "Label for mead wine"});
    let pic4 = new store.picture(
          {id: 3, title:"Pittsburgh Mural",
          thumbUrl:"../../assets/thumbs/pittsburghmuralthumb.jpg",
          url:"../../assets/pictures/pittsburghmural.JPG",
          description:"Mural of the city of Pittsburgh with older style stadiums"});
    store.addPicture(pic1);
    store.addPicture(pic2);
    store.addPicture(pic3);
    store.addPicture(pic4);
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
