<template>
    <div> 
        <span v-for="image in images" v-bind:key="image.id">
            <img :class="normal" v-bind:src="image" @onclick="showFullSize"/>
        </span>
    </div>
</template>
<script>
import AddImage from "AddImage.vue";
import {mapGetters} from "vuex";
export default {
    name: Images,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page
    data(){
        return{
            class: normal,
            images: this.$store.mapGetters(images)
        }
    },
    //I dont know if this is redundant
    computed:{
        images(){
            return this.$store.state.images;
        }
    },

    methods:{
        showFullSize:()=>{
            if(this.class === "normal"){
                this.class ="clicked"
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