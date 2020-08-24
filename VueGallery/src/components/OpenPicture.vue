<template>
<div v-bind:display = "displayValue">
        <div>
            <h4>{{title}}</h4>
        </div>
        <div>
            <button type="button" onclick="closeMe()">Close Picture</button>
            <img :src = "url"/>
        </div>
        <div>
            <p>{{description}}</p>
        </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "OpenPicture",
  
    props:{
        id:{type: String}, 
        title:{type: String},
        url:{type: String},
        description:{type: String}
    },

    data(){ 
        return{ 
            displayValue: "block",
            theId: this.props.pic.id
        }
    },
    
    computed: {
        ...mapGetters({getPicture: 'getPicture'}),
        getPicture:{
            pic: ()=> this.$store.getters.getPicture(this.theId)
        }
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