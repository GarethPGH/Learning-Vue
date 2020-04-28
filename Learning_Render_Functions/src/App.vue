<script>
import HelloWorld from './components/HelloWorld.vue';

//LOOKUP THIS PAGE https://vuejs.org/v2/guide/render-function.html FULL SYNTAX EXAMPLE TOWARDS BOTTOM
export default{
    name:"App",

    data(){
      return {
        msg: "Welcome to Your Vue.js App"
      }
    },

    components:{HelloWorld},

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
      //This will be the component
        createElement('HelloWorld')
      ]
    )},


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
