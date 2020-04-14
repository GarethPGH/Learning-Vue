<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <!--Todos are supposed to be pulled from app.vue. I think there is a problem with how the attribute is written.-->
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
//Todos is undefined
        props:['todos'],
        //And with the '' I get refrenced on render but not defined. WTH?
//Why is del-todo still null/undefined when I have explicitly used props to send individual todo
        // props:{
        //     todos:{
        //         type: Array
        //     },
        //     todo:{
        //         id: {
        //             type: Number
        //         },
        //         name:{
        //             type: String
        //         },
        //         completed:{
        //             type: Boolean
        //         }
        //     }
        // },

        methods:{
    //Not sure if this is broken, but moved emit to a method to make Todos "reactive"
    //Don't know if I needed to do that or not, but emit in the template with no method 
    //led to the complaint that it was not defined but referenced on render from app.vue
    //despite looking exactly as coded in the tutorial I am following.

    //This is broken

    //this.name returns undefined
    
    //vm.todo is undefined. This means the todos themselves are undefined.
            delTodo(id){
               try{
                    var em = "del-todo";
                    console.log(this.title);
                    return this.$emit(em, id);
                }catch(err){
                    console.log(this.title + " "+ err);
                }
            }
        }
    }
</script>

<style scoped>
</style>