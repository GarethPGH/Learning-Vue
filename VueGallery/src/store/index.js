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
        if(!payload.id){
            pict.id = this.setId("id");
        }else{
            pict.id = payload.id;
        }
        pict.title = payload.title;
        pict.url = payload.url;//replace this with an API call to set an id when added to the gallery
        pict.thumbUrl = payload.thumbUrl;
        pict.description = payload.description;
     
        state.Pictures.push(pict);
    },

    DELETE_PICTURE: (state, an_id)=>{
        let imgs = state.Pictures.filter(this.id !== an_id);
        state.Pictures = imgs;
    },

    SET_THUMBS: (state, width, height)=>{
        if(width <= 640 || height <= 640){
            for(let pic in state.Pictures){
                pic.thumbUrl.replace("thumbs", "thumbsmall");
            }
        }
    }
};
const methods = {
    setId(an_id){
        if(an_id === null || an_id === undefined || an_id === ""){
            an_id = "id";
        }
        an_id = uuidv4();
        let len = state.Pictures.length;
        let check_id = "";
        let pic = ""; 
        for(let i = 0; i < len; i++){
            pic = state.Pictures[i];
            check_id = pic.id.valueOf();
            if(check_id === an_id){
                an_id = this.setId(an_id);
            }
        }
    },
        
    makePicture(){
        let picture = {id:"", title:"", url:"", thumbUrl:"", description:""};
        return picture;
    },
};
    
const getters = {
    getPictures: () => state.Pictures,
    getPicture: (an_id)=>{
        let pic = methods.makePicture();
        if(state.pictures){
            pic = state.filter(state.Pictures.id === an_id);
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
