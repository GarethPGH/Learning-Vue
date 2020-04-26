<!--turn me into a render function

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
-->

<script>
//import HelloWorld from './components/HelloWorld.vue'


//LOOKUP THIS PAGE https://vuejs.org/v2/guide/render-function.html FULL SYNTAX EXAMPLE TOWARDS BOTTOM
export default{
  name:"App",

  render: function(createElement) {
    return createElement(
      //element
      'div',
      //element data object
      {
        attrs:{id:"app"}
      },
      //child nodes created with createElement in an array
      [
        createElement(
          'img',{
            attrs:{
              src: "./assets/logo.png",
              height: "200px",
              width: "200px",
              alt: "Vue logo",
            }
        }),
      
        createElement(
          'HelloWorld'
        )
      ]
    )},

  components:{
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
