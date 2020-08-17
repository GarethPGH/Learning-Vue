<template>
    <div> 
        <div v-if="Pictures">
            <div v-for="pic in thePictures" v-bind:key="pic.id">
                <div v-bind:style="normal"  :display = "display1">
                    <h2>{{pic.title}}</h2>
                    <a :href="pic.url"><img v-bind:src="pic.thumbUrl" v-bind:alt="pic.description" @onclick="openThePicture()" v-bind:style="normal"/></a>
                </div>
                <OpenPicture :display = "display2" @emitting = "emitting()"></OpenPicture>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import OpenPicture from './OpenPicture.vue';
import store from '../store/index.js';

export default {
  
    name: "ThePictures",
    
    store: store,

    components:{
        OpenPicture
    },
   
    data:()=>{ 
        return {
            normal:{
                display: "flex",
                float: "left",
                padding: "2%",
                margin: "2%",
                "justify-content":"space-between",
                "flex-direction":"column",
                "max-width":"50vw",
                "max-height":"50vh",
                //border: "5px solid rgb(25, 65, 141)"
            },
            display1: "flex",
            display2: "none",
            somePictures:[],
            id: "",
            title: "",
            url: "",
            thumbUrl: "",
            description: ""
        }
    },

    computed:{
        //...mapState({Pictures: 'state.Pictures'}),
        //getThePictures:{somePictures: Pictures}
        ...mapGetters({getThePictures: "getPictures"}),
        //Unexpected Side Effect in Computed Property
        getThePictures: {
           get(){return this.somePictures = store.getters.getPictures},
            set (value){store.dispatch('setPicture', value )}
        }
    },

    methods:{
        //For right now, the thumbnails work but I want to be able to open a new page featuring the image in a separate component
        //I am not sure exactly how to do that. 
        //Passing a prop maybe?
        ...mapActions({setThumbs: 'setThumbs'}),
    
        openThePicture:()=>{
            this.display1 = "none";
            this.display2 = "block";
        },
        
        SetThumbnailSize:()=>{
            var windowHeight = window.screen.height;
            var windowWidth = window.screen.width;
            store.dispatch('setThumbs', windowWidth, windowHeight);
        },
        emitting(){
            console.log("recieved");
        }
    },
    mounted(){
        //this.somePictures = this.Pictures;
        this.SetThumbnailSize();
    }
}
</script>
