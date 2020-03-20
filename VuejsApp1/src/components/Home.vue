<template>
    <div class="home">
        <h1 v-on:click="changemsg()">{{ msg }}</h1>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        methods: {
            changemsg: function () {
                this.msg = "changed by component method";
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1{color:red;}
</style>

