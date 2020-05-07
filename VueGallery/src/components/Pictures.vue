<template>
    <div> 
        <span v-for="Picture in Pictures" v-bind:key="Picture.id">
            <img :class="normal" v-bind:src="Picture" @onclick="showFullSize"/>
        </span>
    </div>
</template>
<script>
import vuex from "vuex";

export default {
    name: Pictures,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page,
    components:{
        gallery
    },
    data(){
        return{
            class: "normal",
            pictures: this.$store.mapGetters(getPictures)
        }
    },
    //I dont know if this is redundant
    computed:{
        pictures(){
            return this.$store.state.Pictures;
        }
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