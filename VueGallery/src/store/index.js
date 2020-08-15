import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state:{
        Pictures:[],
        picture:[],
        picture_id: "",
        picture_title: "picTitle",
        picture_thumbUrl: "picThumbnail",
        picture_url: "picLocation",
        picture_description: "picDescription"
    },

    actions: {
        setPicture(context, payload){
            context.commit('SET_PICTURE', payload);
        },

        setThumbs(context, height, width){
            context.commit('SET_THUMBS', height, width);
        }
    },

    mutations: {
        SET_PICTURE(state, payload){
            let pict = this.makePicture();
            let id = payload.picture_id;
            if(id === "" || id === undefined || id === null){
                id = this.setId();
            }
            pict.picture_id = id;
            pict.picture_title = payload.picture_title;
            pict.picture_url = payload.picture_url;//replace this with an API call to set an id when added to the gallery
            pict.picture_description = payload.picture_description;
            pict.picture_thumbUrl = payload.picture_thumbUrl;

            state.Pictures.push(pict);
        },

        DELETE_PICTURE(state, id){
            let imgs = state.Pictures.filter(state => state.picture_id !== id);
            state.Pictures = imgs;
        },

        SET_THUMBS(state, width, height){
            if(width <= 640 || height <= 640){
                for(let pic in state.Pictures){
                    pic.picture_thumbUrl.replace("thumbs", "thumbsmall");
                }
            }
        }
    },
    methods:{
        setId(){
            let newid = uuidv4();
            let len = this.$state.Pictures.length;
            for(let i = 0; i < len; i++){
                if(this.$state.Pictures[i].picture_id.valueOf() === newid){
                    this.setId();
                }else{
                    this.id = newid;
                }
            }
        },
        
        makePicture(){
            let picture = {picture_id, picture_title, picture_url, picture_thumbUrl, picture_description};
            return picture;
        }

    },
      //analogous to vue Computed
      getters:{
        getAllPictures: state => state.Pictures,
        getPicture(state){
            let pic = this.$state.Pictures.map.filter(picture_id);
            return pic;
        }
    }
 
});
