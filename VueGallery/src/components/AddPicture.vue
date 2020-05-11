<template>
    <form>
        <input type="text" v-model="title" placeholder="Image Name"/>
        <input type="text" v-model="description" placeholder="Describe your Image"/>
        <button type="submit" @onclick ="addNewPicture">Submit</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    //name: AddPicture,

    model:{
        title: "Image Title",
        description: "Image Description"
    },
 
    computed:{
        ...mapActions(['setPicture'])
    },
    methods:{
        addNewPicture:(e)=>{
            e.preventDefault;
            let picOb = {title:"",description:"",url:""}
            let newPicture = new picOb();
            newPicture.title = this.title;
            newPicture.description = this.description;
            newPicture.url="http://thisisaurl.com/picture.jpg"//Switch this with API call
            //Actually Id and API call should happen in the Vuex Action right?

            this.store.dispatch('setPicture', newPicture);
        },
 
    }

}
</script>

<style scoped>

</style>