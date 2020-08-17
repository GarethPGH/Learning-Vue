import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const state = {
    Pictures:[]
};

const actions = {
    setPicture:({commit}, payload)=>{
        commit('SET_PICTURE', payload);
    },
    setThumbs:(context, height, width)=>{
        context.commit('SET_THUMBS', height, width);
    }
};

const mutations = {
    SET_PICTURE:(state, payload)=>{
        let pict = methods.makePicture();

        pict.picture_id = payload.id;
        pict.picture_title = payload.title;
        pict.picture_url = payload.url;//replace this with an API call to set an id when added to the gallery
        pict.picture_thumbUrl = payload.thumbUrl;
        pict.picture_description = payload.description;
     
        state.Pictures.push(pict);
    },

    DELETE_PICTURE: (state, id)=>{
        let imgs = state.Pictures.filter(this.picture_id !== id);
        state.Pictures = imgs;
    },

    SET_THUMBS: (state, width, height)=>{
        if(width <= 640 || height <= 640){
            for(let pic in state.Pictures){
                pic.picture_thumbUrl.replace("thumbs", "thumbsmall");
            }
        }
    }
};
const methods = {
    setId(id){
        if(id === null || id === undefined || id === ""){
            id = "id";
        }
        id = uuidv4();
        let len = state.Pictures.length;
        let check_id = "";
        let pic = ""; 
        for(let i = 0; i < len; i++){
            pic = state.Pictures[i];
            check_id = pic.picture_id.valueOf();
            if(check_id === id){
                id = this.setId(id);
            }
        }
        this.picture_id = id;
    },
        
    makePicture(){
        let picture = {picture_id:"", picture_title:"", picture_url:"", picture_thumbUrl:"", picture_description:""};
        return picture;
    },
};
    
const getters = {
    getPictures: () => state.Pictures,
    getPicture: (id)=>{
        let pic = methods.makePicture();
        if(state.pictures){
            pic = state.filter(state.Pictures.picture_id === id);
        }
        return pic;
    }
};
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
