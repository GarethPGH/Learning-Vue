<template>
    <div id="app">
        <AddTodo v-on:add-todo="addTodo"/>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
    </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
    name: 'Home',
    components:{
        Todos,
        AddTodo
    },

    data(){
        return{
            todos:[]
        }
    },

    methods:{
      //Works as expected
        deleteTodo(id){
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {this.todos = this.todos.filter(todo=>todo.id !== id, response.data)})
            .catch(err => console.log(err));
        },
      //Works as expected. Id returned is always 201, by design.
        addTodo(newTodo){
            const{ title, completed } = newTodo;
            axios.post('https://jsonplaceholder.typicode.com/todos/',{title,completed})
            .then(response =>{ this.todos=[...this.todos, response.data]})
            .catch(err => console.log(err));
        },
        //Does not run at all, though the json is restricted to the first 10 in JSONPlaceholder
        //Do I have to map them to TodoItem?
        created(){
            axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
            .then(response => {this.todos = [...response.data]})
            .catch(err => console.log(err));
        }
    }

}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
}
</style>