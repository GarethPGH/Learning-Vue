import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//For some dumb reason VUE CLI thinks that store is supposed to be in nodeModules folder
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    //analogous to vue Data
    //Ideally create all your data properties here as a best practice
    //though you can use Vue.set(object, property, propertyvalue ) 
    //or the spread operator dataob={...dataob, property, propertyvalue}in your associated vue file to add to the store
    state: ()=>({
        Pictures:[
            {id: 0, title:"Fox Mural",
            thumbUrl:"../../assets/thumbs/foxmuralthumb.jpg",
            url:"../../assets/pictures/foxmural.jpg",
            description:"Mural of fox family with Spring flowers"},
            {id: 1, title:"Fox Painting",
            thumbUrl:"../../assets/thumbs/foxpaintingthumb.jpg",
            url:"../../assets/pictures/foxpainting.jpg",
            description:"Painting of a fox on wood slab backed by wisteria flowers"},
            {id: 2, title:"Mead Label",
            thumbUrl:"../../assets/thumbs/meadlabelthumb.jpg",
            url: "../../assets/pictures/meadlabel.jpg",
            description: "Label for mead wine"},
            {id: 3, title:"Pittsburgh Mural",
            thumbUrl:"../../assets/thumbs/pittsburghmuralthumb.jpg",
            url:"../../assets/pictures/pittsburghmural.JPG",
            description:"Mural of the city of Pittsburgh with older style stadiums"}
        ],
    }),
    props:[{
            picture:{
                id: Number,
                title: String,
                thumbUrl: String,
                url: String,
                description: String
            }
        }],
  //analogous to vue Computed
    getters: {
        getAllPictures: state => state.Pictures 
    },
  //analogous to vue Methods: Business logic
  //commit or store.dispatch the mutation to touch the data asynchonously
  //Actions commit mutations
  //Dispatch activates actions
    actions: {
        setPicture(context){
            context.commit('SET_PICTURE');
        },
        addPicture(context){
            context.commit('ADD_PICTURE');
        },
        getPicture(context){
            context.commit('GET_PICTURE');
        }
    },
  //Commit and Track changes to the State. this must be done synchronously
  //This is where the actual magic happens: Data management
    mutations: {
        SET_PICTURE:(state)=>{
            state.picture.title = this.title;
            state.picture.url = this.url;//replace this with an API call to set an id when added to the gallery
            state.picture.description = this.description;
            state.picture.thumbUrl = this.thumbUrl;
            console.log(this.$store.state.picture);
        },

        ADD_PICTURE(state){
            state.Pictures.unshift(this.picture);
        }, 

        GET_PICTURE(state){
            pictures.map.filter(picture.id);
        }
    }
    
      /*Figure out where to put these:

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
