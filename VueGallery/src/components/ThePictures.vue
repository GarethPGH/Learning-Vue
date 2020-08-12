<template>
    <div> 
        <div v-for="picture in Pictures" v-bind:key="picture.id">
            <div v-bind:style="normal"  :display = "display1">
                    <h2>{{picture.title}}</h2>
                    <a :href="picture.url"><img v-bind:src="picture.thumbUrl" v-bind:alt="picture.description" @onclick="openThePicture()" v-bind:style="normal"/></a>
            </div>
            <OpenPicture :display = "display2" @emitting = "emitting()"></OpenPicture>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import OpenPicture from './OpenPicture.vue';
//import state from '../store/index.js';

export default {
  
    name: "ThePictures",

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
            display2: "none"
        }
    },

    computed: {...mapState()},

    methods:{
        //For right now, the thumbnails work but I want to be able to open a new page featuring the image in a separate component
        //I am not sure exactly how to do that. 
        //Passing a prop maybe? 
        openThePicture:()=>{
            this.display1 = "none";
            this.display2 = "block";
        },
        
        SetThumbnailSize:()=>{
            this.$store.commit('SET_THUMBS');
        },
        emitting(){
            console.log("recieved");
        }
    },
    created(){this.SetThumbnailSize();}
}
</script>
