import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);

const state = {
    Pictures:[],
    picture:[],
    picture_id: "blah",
    picture_title: "blah",
    picture_thumbUrl: "blah",
    picture_url: "blah",
    picture_description: "blah"
};

const actions = {
    setPictureId:({commit}, payload)=>{
        commit('SET_PICTUREID', payload.id);
    },
    setPictureTitle:({commit}, payload)=>{
        commit('SET_PICTURETITLE', payload.title);
    },
    setPictureUrl:({commit}, payload)=>{
        commit('SET_PICTUREURL', payload.url);
    },
    setPictureThumb:({commit}, payload)=>{
        commit('SET_PICTURETHUMBURL', payload.thumbUrl);
    },
    setPictureDescription:({commit}, payload)=>{
        commit('SET_PICTUREDESCRIPTION', payload.description);
    },
    setPicture:({commit}, payload)=>{
        commit('SET_PICTURE', payload);
    },
    setThumbs:(context, height, width)=>{
        context.commit('SET_THUMBS', height, width);
    }
};

const mutations = {
    SET_PICTUREID:(state, id) => {
        let pic_id = methods.setId(id);
        state.picture_id = pic_id},
    SET_PICTURETITLE:(state, title) => (state.picture_title = title),
    SET_PICTUREURL:(state, url) => (state.picture_url = url),
    SET_PICTURETHUMB:(state, thumbUrl) => (state.picture_thumbUrl = thumbUrl),
    SET_PICTUREDESCRIPTION:(state, description) => (state.picture_description = description),
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
    setId(id){
        if(id === null || id === undefined || id === ""){
            id = "id";
        }
        id = uuidv4();
        let len = this.$state.Pictures.length;
        let check_id = ""; 
        for(let i = 0; i < len; i++){
            check_id = this.$state.Pictures[i].picture_id.valueOf();
            if(check_id === id){
                id = this.setId(id);
            }
        }
        this.$state.picture_id = id;
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
    state,
    actions,
    mutations,
    getters
});
