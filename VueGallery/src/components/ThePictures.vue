<template>
    <div> 
        <div v-for="pic in getPictures" v-bind:key="pic.id">
            <div v-bind:style="normal"  :display = "display1">
                    <h2>{{pic.title}}</h2>
                    <a :href="pic.url"><img v-bind:src="pic.thumbUrl" v-bind:alt="pic.description" @onclick="openThePicture()" v-bind:style="normal"/></a>
            </div>
            <OpenPicture :display = "display2" @emitting = "emitting()"></OpenPicture>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import OpenPicture from './OpenPicture.vue';

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
            display2: "none",
            Pics: "",
            id: "",
            title: "",
            url: "",
            thumbUrl: "",
            description: ""
        }
    },

    computed:{
        ...mapState({Pics: state => state.Pictures}, {pic: state => state.picture}, {id: state => state.picture_id}, {title: state => state.picture_title}, {url: state => state.picture_url}, {thumbUrl: state => state.picture_thumbUrl}, {description: state => state.picture_description}),
        ...mapActions({setThum: actions => actions.setThumbs}),
        ...mapGetters({getPictures: getters => getters.getPictures})
    },

    methods:{
        //For right now, the thumbnails work but I want to be able to open a new page featuring the image in a separate component
        //I am not sure exactly how to do that. 
        //Passing a prop maybe? 
    
        openThePicture:()=>{
            this.display1 = "none";
            this.display2 = "block";
        },
        
        SetThumbnailSize:()=>{
            let thumbs = this.setThum();
            var windowHeight = window.screen.height;
            var windowWidth = window.screen.width;
            this.commit(thumbs(windowHeight, windowWidth));
        },
        emitting(){
            console.log("recieved");
        }
    },
    created(){this.SetThumbnailSize();}
}
</script>
