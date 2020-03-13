<template>
    <div id="outer">
        <div id="inner">
            <h2>{{msg}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name:"testcomponent",
        props: {
            msg: String
        }
    }

</script>

<style scoped>
    #outer{
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 5%;
        margin-bottom: inherit;

        border-radius: 20px;

        background-color:blue;
    }
    #inner {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 10%;
        margin-bottom: inherit;

        background-color: powderblue;
    }
    h2{
       color: darkmagenta;
       font-family: fantasy;
    }
</style>