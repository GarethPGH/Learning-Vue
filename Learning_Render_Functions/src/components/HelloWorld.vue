<!-- turn me into a render function

<template>
  <div class="hello">
  
    <h1>{{ msg }}</h1>

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href= target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <h3>Installed CLI Plugins</h3>

    <ul>
      <li><a href= target="_blank" rel="noopener">babel</a></li>
      <li><a href= target="_blank" rel="noopener">eslint</a></li>
    </ul>

    <h3>Essential Links</h3>

    <ul>
      <li><a href= target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href= target="_blank" rel="noopener">Forum</a></li>
      <li><a href= target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href= target="_blank" rel="noopener">Twitter</a></li>
      <li><a href= target="_blank" rel="noopener">News</a></li>
    </ul>

    <h3>Ecosystem</h3>

    <ul>
      <li><a href= target="_blank" rel="noopener">vue-router</a></li>
      <li><a href= target="_blank" rel="noopener">vuex</a></li>
      <li><a href=target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href= target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href= target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

  </div>
</template>
-->
<script>
export default{
  name: 'HelloWorld',

  data: function(){
//links for the ul/li elements. 2-5-5
    return{ 
    hreferences : ["https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel","https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      "https://vuejs.org","https://forum.vuejs.org","https://chat.vuejs.org", "https://twitter.com/vuejs","https://news.vuejs.org",
      "https://router.vuejs.org","https://vuex.vuejs.org", "https://github.com/vuejs/vue-devtools#vue-devtools","https://vue-loader.vuejs.org","https://github.com/vuejs/awesome-vue" ]
    }
  },
//Get the msg from the parent
  props: {
    msg: String
  },

  render(createElement){
     //<div class="hello">
    return createElement('div',{ class:"hello"},
   [ 
     //<h1>{{ msg }}</h1> Should pull msg from App.vue
    createElement('h1'+ this.msg),

    /*<p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href= target="_blank" rel="noopener">vue-cli documentation</a>.
    </p> */
    createElement('p' + "For a guide and recipes on how to configure / customize this project,check out the",
      
      //double nesting create element, is this a problem?
      [createElement('a'+ "vue-cli documentation",
        {
          attrs:{
            href:"https://cli.vuejs.org",
            target: "_blank",
            rel: "noopener"
          } 
        }
      )]    
    ),
    // <h3>Installed CLI Plugins</h3> I dont know if this will do what I think it will
    createElement('h3', "Installed CLI Plugins"),

    /*<ul>
      <li><a href= target="_blank" rel="noopener">babel</a></li>
      <li><a href= target="_blank" rel="noopener">eslint</a></li>
    </ul> */
    //WORKING HERE. Href should pull from first 2 indicies of hreferences
    createElement('ul', [
        for(let i=0;i<2,i++){  
          createElement('li',[
          createElement('a', {attrs:{target: '_blank', rel:'noopener',href: hreferences[i]}})]
        })
    ])
   ]
   )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
