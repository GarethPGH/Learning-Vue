<template>
    <form>
        <input type="text" v-model="title" placeholder="Image Name"/>
        <input type="text" v-model="description" placeholder="Describe your Image"/>
        <button type="submit" @onclick ="addNewPicture">Submit</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex';
import {setPicture} from '../store/index.js'

export default {
    //name: AddPicture,

    //This is the name of the component, why the hell is it being treated like an unused variable?
    //This will be the add an image form component
    //url and id should be set by the API call
    data:()=>{
        return{
            //why is this undefined?
            Pictur:{
                title:"title",
                description:"description",
                url:"https://urmommasofat.com"
            }
        }
    },
    props:[Pictur],
    model:{
        title: "Image Title",
        description: "Image Description"
    },
    computed:{
        ...mapActions(setPicture)
    },
    methods:{
        addNewPicture:(e)=>{
            e.preventDefault;
            let newPicture = new Pictur();
            newPicture.title = this.title;
            newPicture.description = this.description;
            newPicture.url="http://thisisaurl.com/picture.jpg"//Switch this with API call
            //Actually Id and API call should happen in the Vuex Action right?
            this.$store.dispatch(setPicture, newPicture);
        },
       /* setPictureId(id){
            id = parseInt(this.id)+1;//Set to the index of pictures array for now
            //this is broken, though, possibly not needed, even for mocking
        }*/
    }

}
</script>

<style scoped>

</style>