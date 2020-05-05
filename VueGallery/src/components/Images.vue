<template>
    
</template>
<script>
import AddImage from "AddImage.vue";
import {} from "vuex";
export default {
    name: Images,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page
    data(){
        return{
        
        }
    },

    computed:{
        Images(){
            return this.$store.state.Images;
        }
    }
}
</script>

<style scoped>

</style>