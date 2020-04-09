<template>
    <div id="app">
        <Header/>
        <AddTodo v-on:add-todo="addTodo"/>
        <Todos v-bind:todos="Todos" v-on:del-todo ="deleteTodo"/>    
    </div>
</template>

<script>
    import Header from './components/layout/Header.vue';
    import Todos from "./components/Todos.vue";
    import AddTodo from "./components/AddTodo.vue";
    import axios from "axios";

//Todo is referenced on render but not reactive

    export default {
        name: 'app',

        components: {
            Header: Header,
            Todos: Todos,
            AddTodo: AddTodo
        },
        data() {
            return {
                todos:[
                    {id:1,
                    title:"Title1",
                    completed:false},
                
                    {id:2,
                    title:"Title2",
                    completed:false},

                    {id:3,
                    title:"Title3",
                    completed:false}
                ]
            }
        },
        methods: {
            created(){
                axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
                    .then(res => this.todos = res.data)
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
            },
            
            deleteTodo(id){
                axios.delete(`http://jsonplaceholder.typicode.com/todos${id}`)
                .then(res => this.todos = this.todos.filter(res.data.id !== id) )
                .catch(err => console.log(err));
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