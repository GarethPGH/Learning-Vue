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
//Will have to figure out how to create a thumbnail dynamically 
import {mapActions} from 'vuex';

export default {
    name: "AddPicture",

    data(){
        return{
            title: "Image Title",
            description: "Image Description",
            location: "location.jpg"
        }
    },
 
    computed:{
        ...mapActions({setPic: 'setPicture'})
    },
    methods:{
        addNewPicture:(e)=>{
            e.preventDefault;
            //Create Picture object to take input values
            let picOb = {id:"", title:"", url:"", thumbUrl:"",description:""}
            let newPicture = new picOb();
            newPicture.title = this.title;
            newPicture.description = this.description;
            newPicture.url = this.url;
            
            //Look up how to actually create a thumbnail of the appropriate size based on image upload automatically
            let split = this.url;
            split.split('.');
            let thumb = split[0] + "thumb." + split[1];
            newPicture.thumbUrl = thumb;

            this.setPic(newPicture);
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