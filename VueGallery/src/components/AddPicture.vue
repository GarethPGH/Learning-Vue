<template>
    <form>
        <input type="text" v-model="title" placeholder="Image Name"/>
        <input type="text" v-model="description" placeholder="Describe your Image"/>
        <button type="submit" @onclick ="addNewPicture">Submit</button>
    </form>
</template>

<script>

export default {
    name: AddPicture,
    //This will be the add an image form component
    //url and id should be set by the API call
    model:{
        title: "Image Title",
        description: "Image Description"
    },
    methods:{
        addNewPicture:(e)=>{
            e.preventDefault;
            let newPicture= new Picture();
            newPicture.title = this.title;
            newPicture.description = this.description;
        }
    }

}
</script>

<style scoped>

</style>