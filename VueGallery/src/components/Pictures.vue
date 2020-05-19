<template>
    <div> 
        <table v-for="Picture in Pictures" v-bind:key="Picture.id" v-bind:style="normal">
            <tr>
                <th>{{Picture.title}}</th>
            </tr>
            <tr>
                <td>
                    <img v-bind:src="Picture.url" v-bind:alt="Picture.description" @onclick="showFullSize()" v-bind:style="normal"/>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import {mapState} from 'vuex';
//import Pictures from '../store/index.js';

export default {
  
    //name: Pictures,
    //this might end up being a part of the vuex store instead, 
    //but should be the main images component that stores the images 
    //and how they should be displayed on page,
    data:()=>{
        //invalid number error for height and width
        return {
            normal:{
                display: "flex",
                float: "left",
                padding: "2%",
                "justify-content":"space-around",
                "flex-flow":"row wrap",
                "max-width":"50vw",
                "max-height":"50vh",
                //border: "5px solid rgb(25, 65, 141)"
            },
            clicked:{
                display: "block",
                width: "auto",
                height: "auto"
            }
        }
    },

    computed: mapState({
            Pictures:state => state.Pictures
    }),

    methods:{
  
        showFullSize:()=>{
        
            if(this.style === "normal"){
                this.style ="clicked";
            }else{
                this.style = "normal";
            }
        }
    }
}
</script>

<style scoped>
.normal {
    display: flex;
    position: relative;
    max-width: 25vw;
    max-height: 25vh;
    margin: 5em;
    padding: 5em;
    background-color: deepskyblue;
    border-radius: 1em;
    border: 2em, solid, rgb(25, 65, 141);
}
.clicked{
    display: block;
    width: auto;
    height: auto;
}
</style>