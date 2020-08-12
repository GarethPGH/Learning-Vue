<template>
<div>
    <div>
        <h4>{{pic.title}}</h4>
    </div>
    <div>
        <img :src = "pic.url"/>
    </div>
    <div>
        <p>{{pic.description}}</p>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "OpenPicture",

    computed: mapState({
        getAllPictures: state => state.Pictures
    }),
    data(){
        let pic = this.$state.getPicture();
        return pic;
    },
    //I will have to pass a prop to bubble the @click event to this component from Pictures.vue
    methods:{
        emitting:()=>{
            this.$emit("emit");
        }
    },
    //Also I must extract the url from the associated picture in Pictures
    //I do not know if I should pull this from the store, or from the Pictures.vue component

}
</script>