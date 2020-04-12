<template>
    <div id="app">
        <Header></Header>
        <AddTodo v-on:add-todo="addTodo" />
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo(this.todo)" />

    </div>
</template>

<script>
    import Header from './components/layout/Header.vue';
    import Todos from "./components/Todos.vue";
    import AddTodo from "./components/AddTodo.vue";
    import axios from "axios";

//Todo is referenced on render but not reactive
//Open this website and read: https://michaelnthiessen.com/property-or-method-not-defined/
    export default {
        name: 'app',

        components: {
            Header: Header,
            Todos: Todos,
            AddTodo: AddTodo,
        },

        data() {
            return {
                todos: [
                    {
                        id: 1,
                        name: "title1",
                        completed: false
                    },
                    {
                        id: 2,
                        name: "title2",
                        completed: false
                    },
                    {
                        id: 3,
                        name: "title3",
                        completed: false
                    }
                ]
            }
        },
    //Created is supposedly to run as soon as app is mounted, but doesn't.
        methods: {
            created(){
              axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
                   .then(res => this.todos = res.data)
                   .catch(err => console.log(err));
             },
    
           //Delete todo does not work. 
           //I am not sure if the del-todo is being emitted as it is supposed to, 
           //or if there is an issue with the deleteTodo method 

           //Getting Error 404 on Delete
           //this.name returns undefined
            deleteTodo(id){
                console.log(this.name);
                axios.delete(`http://jsonplaceholder.typicode.com/todos${id}`)
                .then(res => this.todos = this.todos.filter(res.data.id !== id) )
                .catch(err => console.log(err));
            },

        
            addTodo(newTodo){
                const {title, completed} = newTodo;
                axios.post('http://jsonplaceholder.typicode.com/todos', {
                    title: title,
                    completed: completed
                })
                .then(res => this.todos=[...this.todos, res.data])
                .catch(err => console.log(err));
            }
        }
            
    }
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
    .btn{
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }
    .btn:hover{
        background:#666;
    }
</style>