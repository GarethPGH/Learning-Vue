<template>
<div :display = "absolute">
    <div>
        <h4>{{pic.title}}</h4>
    </div>
    <div>
        <button type="button" onclick="closeMe()">Close Picture</button>
        <img :src = "pic.url"/>
    </div>
    <div>
        <p>{{pic.description}}</p>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "OpenPicture",

    computed: {...mapGetters({getPic: getters => getters.getPicture})},
    
    data(){ 
        let pic = this.getPic;
        return pic;
    },
    //I will have to pass a prop to bubble the @click event to this component from Pictures.vue
    methods:{
        emitting:()=>{
            this.$emit("emit");
        },
        closeMe:()=>{
            this.display = "none";
        }
    },
    //Also I must extract the url from the associated picture in Pictures
    //I do not know if I should pull this from the store, or from the Pictures.vue component

}
</script>