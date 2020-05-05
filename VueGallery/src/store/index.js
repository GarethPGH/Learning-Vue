import Vue from 'vue';
import Vuex from 'vuex';
import images from './modules/images.js'

Vue.use(Vuex);

export default new vuex.Store({
 //I may not need modules in this app, but figured I should learn how to use them
  modules:{
      images: galleryimages
  },
  strict: process.env.NODE_ENV !== 'production'
})