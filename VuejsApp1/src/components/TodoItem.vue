<template>
    <div class ="todo-item" v-bind:class ="{'is-complete': todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click ="delTodo" class ="del">x</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        
        props:{
            todo:{
                id:Number,
                title:String,
                completed:Boolean
            }
        },

        methods:{
            markComplete(){
                this.todo.completed = !this.todo.completed;
            },
            //This is broken
            //this.name returns undefined
            //vm.todo is undefined. Means the todo themselves are not defined
            //Information from the added Todos is not being bound to the del-Todo,
            //Although it is being emitted properly from TodoItem to Todos to App.vue
            delTodo(id){
                try{
                    var em = "del-todo";
                    console.log(this.title);
                    this.$emit(em, id);
                }catch(err){
                    console.log(this.title + " "+ err);
                }
            }
        }
    }
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding:10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete{
        text-decoration: line-through;
    }

    .del{
        background: #ff0000;
        color: #fff;
        border:none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor:pointer;
        float:right;
    }
</style>