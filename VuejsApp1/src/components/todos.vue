<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="delTodo"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem.vue';

    export default {
        name: "Todos",

        components: {
            TodoItem: TodoItem
        },

        props:["todos"],

        methods:{
    //Not sure if this is broken, but moved emit to a method to make Todos "reactive"
    //Don't know if I needed to do that or not, but emit in the template with no method 
    //led to the complaint that it was not defined but referenced on render from app.vue
    //despite looking exactly as coded in the tutorial I am following.
            delTodo(id){
                const em ='del-todo';
                this.$emit(em, id);
            }
        }
    }
</script>

<style scoped>
</style>