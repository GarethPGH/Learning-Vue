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
        Pictures:[
            {id: 0, title:"Fox Mural",
            url:"../assets/foxmural.jpg",
            description:"Mural of fox family with Spring flowers"},
            {id: 1, title:"Fox Painting",
            url:"../assets/foxpainting.jpg",
            description:"Painting of a fox on wood slab backed by wisteria flowers"},
            {id: 2, title:"Mead Label",
            url:"../assets/meadlabel.jpg",
            description: "Label for mead wine"},
            {id: 3, title:"Pittsburgh Mural",
            url:"../assets/pittsburghmural.jpg",
            description:"Mural of the city of Pittsburgh with older style stadiums"}
        ],
        
        Pic:{
            id: 0,
            title: "",
            url: "",
            description:""
        } 
    }),
  //analogous to vue Computed
    getters: {
        getPic:()=>{
            state => {state.Pic.id,
                    state.Pic.title,
                    state.Pic.url,
                    state.Pic.description}
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
        },
        pushPicture(context){
            context.commit('PUSH_PICTURE');
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

        PUSH_PICTURE(state){
            state.Pictures.unshift(this.Pic);
        }
    }
    
      /*Figure out wher eto put these:

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
 
});
