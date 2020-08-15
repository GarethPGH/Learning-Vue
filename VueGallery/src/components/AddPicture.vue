<template>
    <form>
        <!--Turn this button into a panel that can read files from the filesystem-->
        <button type="AddsFiles" @onclick="setPictureLocation"><label>Add Image</label></button>
        <label>Add Image</label><input type="text" v-model="location" placeholder="Add a new Image" />
        <label>Title</label><input type="text" v-model="title" placeholder="Image Name"/>
        <label>Description</label><input type="text" v-model="description" placeholder="Describe your Image"/>
        <button type="submit" @onclick ="addNewPicture">Submit</button>
    </form>
</template>

<script>
//figure out how to build a payload for the setPicture action
import {mapActions} from 'vuex';

export default {
    name: "AddPicture",

    model:{

        title: "Image Title",
        description: "Image Description",
        location: "location.jpg"
    },
 
    computed:{
        ...mapActions({setPic: actions => actions.setPicture})
    },
    methods:{
        addNewPicture:(e)=>{
            e.preventDefault;
            let picOb = {title:"",description:"",url:""}
            let newPicture = new picOb();
            newPicture.title = this.title;
            newPicture.description = this.description;
            newPicture.url=this.url;//Switch this with API call
            //Actually Id and API call should happen in the Vuex Action right?

            this.$store.dispatch('setPicture', newPicture);
        },
        setPictureLocation:(e)=>{
            e.preventDefault;
            //access the file system and set new picture to location of image you want to add
        }
    }

}
</script>

<style scoped>

</style>