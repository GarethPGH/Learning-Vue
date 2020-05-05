<template>
    
</template>

<script>
import Images from "Images.vue";
import {} from "vuex";
import store from "images.js";

export default {
    name: ImageGallery,
    //Should be able to view images in a carousel style flip app
    //click on add image to initiate add image component
    //click on an image for a bigger view (I dont know if this should have a separate component)
     data(){
        return{
           
        }
    },
    //return state to the store in a computed property
    computed:{
        imgs(){
            return this.$store.state.Images;
        }
    },
}
</script>

<style scoped>

</style>