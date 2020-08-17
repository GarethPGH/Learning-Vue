<template>
<div v-bind:display = "displayValue">
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
import store from '../store/index.js';
import { mapGetters } from 'vuex';

export default {
    name: "OpenPicture",
    store: store,
    props:{id: String, title: String, description: String},

    data(){ 
        return{ 
            displayValue: "block",
            theId: this.id,
        }
    },
    
    computed: {
        ...mapGetters({getPicture: 'getPicture'}),
        getPicture:{
            get(){return store.getters.getPicture}
        },
        pic: store.getters.getPicture(this.theId),
    },
    
    //I will have to pass a prop to bubble the @click event to this component from Pictures.vue
    methods:{
        emitting:()=>{
            this.$emit("emit");
        },
        closeMe:()=>{
            this.displayValue = "none";
        },
    },
    //Also I must extract the url from the associated picture in Pictures
    //I do not know if I should pull this from the store, or from the Pictures.vue component

}
</script>