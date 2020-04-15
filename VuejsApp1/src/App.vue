<template>
    <div id="app">
        <Header></Header>
        <AddTodo v-on:add-todo="addTodo" />
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo(todo.id)" />
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
                todos: [],
                todo:{
                    id: 1,
                    title: "Title1",
                    completed: false
                }
            }
        },
        // props:{
        //     todo:{
        //         id: {
        //             type: Number
        //         },
        //         title:{
        //             type: String
        //         },
        //         completed:{
        //             type: Boolean
        //         }
        //     }
        // },
    
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
           //this.title returns undefined

           //Id retrieved in the DELETE headers is todos${id}, always returns 404
            deleteTodo(id){
                console.log(this.title);
                axios.delete('http://jsonplaceholder.typicode.com/todos${id}')
                .then(res => this.todos = this.todos.filter(res.data.id !== id) )
                .catch(err => console.log(err));
            },

        //JSONplaceholder is returning the object with the same id every time
        //even passing in the id parameter returns undefined. Still getting same id from JSONPlacholder
            addTodo(newTodo){
                const {title, completed, id} = newTodo;
                axios.post('http://jsonplaceholder.typicode.com/todos', {
                    title: title,
                    completed: completed,
                    id: id
                })
                .then(res => this.todos=[...this.todos, res.data])
                .catch(err => console.log(err));
                console.log(newTodo.id);
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