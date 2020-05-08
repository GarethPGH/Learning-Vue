import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
    //analogous to vue Data
    //Ideally create all your data properties here as a best practice
    //though you can use Vue.set(object, property, propertyvalue ) 
    //or the spread operator dataob={...dataob, property, propertyvalue}in your associated vue file to add to the store
  state: ()=>({
      Pictures:[{id: 0, title:"this is a title",url:"http://websitename/picturename.jpg",description:"Generic picture of a barn"}],
      Pic:{
          id: 0,
          title: "",
          url: "",
          description:""
      }
  }),
  //analogous to vue Computed
  getters: {
          getPic:{
              id: state => state.Pic.id,
              title: state => state.Pic.title,
              url: state => state.Pic.url,
              description: state => state.Pic.description
          },

          getPictures: state => state.Pictures
      
  },
  //analogous to vue Methods: Business logic
  //commit or store.dispatch the mutation to touch the data asynchonously
  //Actions commit mutations
  //Dispatch activates actions
  actions: {
      setPicture(context){
          context.commit('SET_PICTURE');
      }
  },
  //Commit and Track changes to the State. this must be done synchronously
  //This is where the actual magic happens: Data management
  mutations: {
      SET_PICTURE:(state)=>{
          state.Pic.title = this.title;
          state.Pic.url = this.url;//replace this with an API call to set an id when added to the gallery
          state.Pic.description = this.description;
          console.log(this.$store.state.Pic);
      },
  }
    
      /*Figure out wher eto put these:

        pushImage(Images){
          this.Images.unshift(this.image);

          this.$store.commit('pushImage');
      }

      _getImageById: (state) => (id) => {
          return state.images.find(image => image.id === id);
      },
      //get all images
      getImages:(state)=>{
          return state.images;
      },
      //delete image
      deleteImageById: (state) => (id) => {
          return state.images.filter(image => image.id !== id)
      },
      */
 
})