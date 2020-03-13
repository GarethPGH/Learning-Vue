<template>
    <div id="app" v-on:DOMContentLoaded ="alertme()">
        <testcomponent></testcomponent>
    </div>
</template>

<script>
    //The only javascript that is getting loaded is the initial build in main.js, even with the component
    import testcomponent from "./components/testcomponent.vue";

    export default {
        name: 'app',
        components: {
            testcomponent
        },
        methods{
            alertme: function () {
                alert("Vue instance active");
            }
        }
    }
</script>

<style>
    #app{
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: red;
    }
</style>