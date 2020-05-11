<template>
    <div> 
        <span v-for="Picture in Pictures" v-bind:key="Picture.id">
            <p>{{title}}</p>
            <img :class="normal" v-bind:src="Picture" @onclick="showFullSize"/>
        </span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
//import Pictures from '../store/index.js';

export default {
  
    //name: Pictures,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page,
    data(){
        return{
            class: "normal"
        }
    },
    //I dont know if this is redundant
    computed: {
        ...mapGetters(['getPictures'])
        },

    methods:{
        showFullSize:()=>{
            if(this.class === "normal"){
                this.class ="clicked";
            }else{
                this.class = "normal";
            }
        }
    }
}
</script>

<style scoped>
.normal {
    display: flex;
    max-width: 25%;
    max-height: 25%;
    margin: 5em;
    border-radius: 1em;
    border: 2em, solid, rgb(25, 65, 141);
}
.clicked{
    display: block;
    width: auto;
    height: auto;
}
</style>