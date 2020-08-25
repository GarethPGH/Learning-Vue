import Vue from 'vue';
import Vuex from 'vuex';
import {v4 as uuidv4 } from 'uuid';
import axios from 'axios';

Vue.use(Vuex, axios);
const conn = "PUT A VALUE HERE AND NEVER SHARE ON GITHUB";
const state = {
    Pictures:[]
};

const actions = {
    
//Replace jsonplaceholder with backend url
async getPictures({commit}){  
    Vue.http.interceptors.push(function(request) {
        request.method = 'GET';
        request.headers.set('Access-Control-Allow-Origin', 'true');
    });
    const response = await axios.get(conn, {params:{_limit: 20}}, {Headers:{}})
    .then( ()=>{console.log(response.data);
    commit('set_Pictures', response.data)})    
    .catch(function(error){
        console.log(error);
    });
    // console.log(response.data);
    // commit('set_Pictures', response.data)
},
async getPicture({context}, id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .catch(function(error){
            console.log(error);
    });
    context.getters.getPicture(response.id)
},
async editPicture({commit}, id){
    const response = await axios.put(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .catch(function(error){
            console.log(error);
    });
   
    commit('SET_PICTURE', response.data)
},
async setPicture({commit}, picture){
    const response = await axios.post('https://jsonplaceholder.typicode.com/photos', picture)
        .catch(function(error){
            console.log(error);
    });
    commit('SET_PICTURE', response.data)
},
async deletePicture({commit}, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .catch(function(error){
            console.log(error);
    }),
    commit('removePicture', id)
}
/*
    setPicture:({commit}, payload)=>{
        commit('SET_PICTURE', payload);
    },
    setThumbs:(context, height, width)=>{
        context.commit('SET_THUMBS', height, width);
    }, 
    deletePicture(context, id){
        context.commit('DELETE_PICTURE', id);
    }
*/
};
//will have to rewrite methods to support axios methods
//move makepicture to mutations to be used by AddPicture 
//have set picture call it, if needed, to facilitate Get Requests
const mutations = {
    
    set_Pictures: (state, Pictures)=> state.Pictures = Pictures,
    newPicture: (state, picture)=> state.Pictures.unshift(picture),
    removePicture: (state, id)=> state.Pictures = state.Pictures.filter(picture => picture.id !== id),
     
    SET_PICTURE:(state, payload)=>{
        let pict = methods.makePicture();
        if(!payload.id){
            pict.id = this.setId("id");
        }else{
            pict.id = payload.id;
        }
        pict.title = payload.title;
        pict.url = payload.url;
        pict.thumbUrl = payload.thumbnailUrl;
        pict.description = payload.description;
     
        state.Pictures.push(pict);
    },
    /*
    DELETE_PICTURE: (state, an_id)=>{
        let imgs = state.Pictures.filter(this.id !== an_id);
        state.Pictures = imgs;
    },
    */

    SET_THUMBS: (state, width, height)=>{
        if(width <= 640 || height <= 640){
            for(let pic in state.Pictures){
                pic.thumbnailUrl.replace("thumbs", "thumbsmall");
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
        let picture = {id:"", title:"", url:"", thumbnailUrl:"", description:""};
        return picture;
    },
};
    
const getters = {
    getPictures: () => state.Pictures,
    get_the_Picture: (an_id)=>{
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
