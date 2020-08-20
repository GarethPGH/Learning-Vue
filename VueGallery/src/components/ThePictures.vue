<template>
    <div> 
        <div v-if="Pictures">
            <div v-for="pic in Pictures" v-bind:key="pic.id">
                <div v-bind:style="normal">
                    <h2>{{pic.title}}</h2>
                    <a :href="pic.url"><img v-bind:src="pic.thumbUrl" v-bind:alt="pic.description" @onclick="openThePicture()" v-bind:style="normal"/></a>
                </div>
                <OpenPicture :display = "display2" @emitting = "emitting()"></OpenPicture>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
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
            },
            display1: "flex",
            display2: "none",
            id: "",
            title: "",
            url: "",
            thumbUrl: "",
            description: ""
        }
    },

    computed:{
        Pictures(){
            return this.$store.state.Pictures;
        }
    },

    methods:{
        ...mapActions({setPic: 'setPicture'},{setThumbnailSize: 'setThumbs'}),
    
        openThePicture:()=>{
            this.display1 = "none";
            this.display2 = "block";
        },

        setPicture(pic){
            this.setPic(pic);
        },

        setThumbs(){
            let windowHeight = window.screen.height;
            let windowWidth = window.screen.width;
            this.setThumbnailSize(windowWidth, windowHeight);
        },

        emitting(){
            console.log("recieved");
        }
    },

    created(){
    let pic1 = {id: '0', title:"Fox Mural",
            thumbUrl:"../../assets/thumbs/foxmuralthumb.jpg",
            url:"../../assets/pictures/foxmural.jpg", 
            description:"Mural of fox family with Spring flowers"};
    let pic2 = {id: '1', title:"Fox Painting",
            thumbUrl:"../../assets/thumbs/foxpaintingthumb.jpg",
            url:"../../assets/pictures/foxpainting.jpg",
            description:"Painting of a fox on wood slab backed by wisteria flowers"};
    let pic3 = {id: '2', title:"Mead Label",
            thumbUrl:"../../assets/thumbs/meadlabelthumb.jpg",
            url: "../../assets/pictures/meadlabel.jpg",
          description: "Label for mead wine"};
    let pic4 = {id: '3', title:"Pittsburgh Mural",
            thumbUrl:"../../assets/thumbs/pittsburghmuralthumb.jpg",
            url:"../../assets/pictures/pittsburghmural.JPG",
            description:"Mural of the city of Pittsburgh with older style stadiums"};
    this.setPic(pic1);
    this.setPic(pic2);
    this.setPic(pic3);
    this.setPic(pic4);

    console.log(this.Pictures);

    this.setThumbnailSize();
  }
}
</script>
