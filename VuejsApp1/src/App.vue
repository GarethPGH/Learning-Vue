<template>
    <div id="app">
        <Todos v-bind:todos="todos"/>    
    </div>
</template>

<script>
    import Todos from "@/components/Todos.vue";

    export default {
        name: 'app',
        components: {
            Todos
        },
        data() {
            return {
                todos:[
                    {
                        id: 1,
                        title: "Title 1",
                        completed: true
                    },
                    {
                        id: 2,
                        title: "Title 2",
                        completed: true
                    },
                    {
                        id: 3,
                        title: "Title 3",
                        completed: false
                    }
                ]
            }
        }
    };
</script>

<style>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    body{
        font-family:Arial, Helvetica, sans-serif;
        line-height:1.4;
    }
    h1{color:black;}
</style>

