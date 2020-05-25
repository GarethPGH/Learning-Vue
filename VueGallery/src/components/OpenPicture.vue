<template>
<div>
    <div>
        <h4>{{Pic.title}}</h4>
    </div>
    <div>
        <img src="Pic.url"/>
    </div>
    <div>
        <p>{{Pic.description}}</p>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
import {Pic, Pictures} from "../store/index.js";

export default {
    name: OpenPicture,

    components:{
        Pictures
    },
    
    computed: mapState({
        Pictures: state => state.Pictures
    }),
    //I will have to pass a prop to bubble the @click event to this component from Pictures.vue
    methods:{
        
    },
    //Also I must extract the url from the associated picture in Pictures
    //I do not know if I should pull this from the store, or from the Pictures.vue component
    props:[Pic]
}
</script>