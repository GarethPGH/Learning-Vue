import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const state = {
    Pictures:[],
    picture:[],
    picture_id: "",
    picture_title: "",
    picture_thumbUrl: "",
    picture_url: "",
    picture_description: ""
};

const actions = {
    setPicture:(context, payload)=>{
        context.commit(SET_PICTUREID, payload.id);
        context.commit(SET_PICTURETITLE, payload.title);
        context.commit(SET_PICTUREURL, payload.url);
        context.commit(SET_PICTURETHUMBURL, payload.thumbUrl);
        context.commit(SET_PICTUREDESCRIPTION, payload.description);
        context.commit('SET_PICTURE', payload);
    },

    setThumbs:(context, height, width)=>{
        context.commit('SET_THUMBS', height, width);
    }
};

const mutations = {
    SET_PICTUREID: (state, id) => (state.picture_id = id),
    SET_PICTURETITLE:(state, title) => (state.picture_title = title),
    SET_PICTUREURL:(state, url) => (state.picture_url = url),
    SET_PICTURETHUMBURL:(state, thumbUrl) => (state.picture_thumbUrl = thumbUrl),
    SET_PICTUREDESCRIPTION:(state, description) => (state.picture_description = description),
    SET_PICTURE: (state, payload)=>{
        let pict = methods.makePicture();
        let id = payload.id;
        if(id === "" || id === undefined || id === null){
            id = methods.setId();
        }
        pict.picture_id = payload.id;
        pict.picture_title = payload.title;
        pict.picture_url = payload.url;//replace this with an API call to set an id when added to the gallery
        pict.picture_description = payload.description;
        pict.picture_thumbUrl = payload.thumbUrl;

        state.Pictures.push(pict);
    },

    DELETE_PICTURE: (state, id)=>{
        let imgs = state.Pictures.filter(state => state.picture_id !== id);
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

};
    
const getters = {
    getPictures: (state) => state.Pictures,
    getPicture: (state)=>{
        let pic = this.$state.Pictures.map.filter(picture_id);
        return pic;
    }
};

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    actions,
    mutations,
    getters
});
