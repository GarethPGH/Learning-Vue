<template>
    <div> 
        <div v-for="Picture in Pictures" v-bind:key="Picture.id">
            <div v-bind:style="normal">
                    <h2>{{Picture.title}}</h2>
                    <a :href="Picture.url"><img v-bind:src="Picture.thumbUrl" v-bind:alt="Picture.description" @onclick="showPicture" v-bind:style="normal"/></a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
//import Pictures from '../store/index.js';

export default {
  
    //name: Pictures,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page,
    
    //Included for when I am ready to have a formatted page with the picture in it along the lines of title, image, description underneath
    components:{
        //OpenPicture
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
        }
    },

    computed: mapState({
            Pictures:state => state.Pictures
    }),

    methods:{
        //For right now, the thumbnails work but I want to be able to open a new page featuring the image in a separate component
        //I am not sure exactly how to do that. 
        //Passing a prop maybe? 

        SetThumbnailSize: ()=>{
            let windowHeight = window.screen.height;
            let windowWidth = window.screen.width;
            //Change the thumbnail image to smaller thumbnail image if screen is smaller than 
            if(windowWidth <= 640 || windowHeight <= 640){
                //set to smaller thumbnail size
                //figure out how to do this using a commit to the vuex store
            }
        }
    }
}
</script>
