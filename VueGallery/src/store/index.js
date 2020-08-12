import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default{
    strict: process.env.NODE_ENV !== 'production',
    //analogous to vue Data
    //Ideally create all your data properties here as a best practice
    //though you can use Vue.set(object, property, propertyvalue ) 
    //or the spread operator dataob={...dataob, property, propertyvalue}in your associated vue file to add to the store
    state:{
        Pictures:[],
        //Id is not defined, somehow....
        picture:{
            id: "",
            title: "",
            thumbUrl: "",
            url: "",
            description: ""
        }
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

        setThumbs(context){
            context.commit('SET_THUMBS');
        }
    },
  //Commit and Track changes to the State. this must be done synchronously
  //This is where the actual magic happens: Data management
    mutations: {
        SET_PICTURE(state){
            state.picture.id = this.setId();
            state.picture.title = this.title;
            state.picture.url = this.url;//replace this with an API call to set an id when added to the gallery
            state.picture.description = this.description;
            state.picture.thumbUrl = this.thumbUrl;
            console.log(this.$store.state.picture);
        },

        ADD_PICTURE(state){
            state.Pictures.push(state.picture);
        }, 

        DELETE_PICTURE(state){
            let imgs = state.Pictures.filter(state => state.picture.id !== id);
            state.Pictures = imgs;
        },
        SET_THUMBS(state){
            var windowHeight = window.screen.height;
            var windowWidth = window.screen.width;
            
            if(windowWidth <= 640 || windowHeight <= 640){
                for(let pic in state.Pictures){
                    pic.thumbURL.replace("thumbs", "thumbsmall");
                }
            }
        }
    },
    methods:{
        setId(){
            let newid = uuidv4();
            for(let i = 0; i < state.Pictures.length; i++){
                if(state.Pictures[i].id.valueOf() !== newid){
                    continue;
                }else{
                    this.setId();
                }
            }
            this.id = newid;
        }

    },
      //analogous to vue Computed
      getters: {
        getAllPictures: state => state.Pictures,
        getPicture(state){
            let pic = state.Pictures.map.filter(picture.id);
            return pic;
        }
    }
 
};
