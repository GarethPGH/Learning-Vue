
<script>
export default{
  name: 'HelloWorld',

  props: {
    "msg": msg
  },
  
  render(createElement){
    //hrefs for the ul lists 2-5-5
    var hrefset1 = [{tool: "babel", url: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"}, {tool:"eslint", url: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"}];
    var hrefset2 = [{tool: "Core Docs", url: "https://vuejs.org"},{tool: "Forum", url: "https://forum.vuejs.org"},{tool: "Community Chat" , url: "https://chat.vuejs.org"},{tool:"Twitter", url: "https://twitter.com/vuejs"},{tool: "News",url: "https://news.vuejs.org"}];
    var hrefset3 = [{tool: "vue-router", url: "https://router.vuejs.org"},{tool: "vuex", url: "https://vuex.vuejs.org"},{tool: "vue-devtools", url: "https://github.com/vuejs/vue-devtools#vue-devtools"},{tool: "vue-loader", url: "https://vue-loader.vuejs.org"},{tool: "awesome vue", url: "https://github.com/vuejs/awesome-vue"}];
    //<div class="hello">
    return createElement('div',{ 
      class:"hello",

      methods:{
        created: function(){
          console.log("HelloWorld loaded");}
      },
    },  
    [ 
     //<h1>{{ msg }}</h1> Should pull msg from App.vue
     //getting contains invalid string error.
      createElement('h1', {domProps:{innerHTML: this.msg}}),

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
    //First set of links
    /*<ul>
      <li><a href= target="_blank" rel="noopener">babel</a></li>
      <li><a href= target="_blank" rel="noopener">eslint</a></li>
    </ul> */
    //Hrefset1, hrefset2, and hrefset3 are undefined. Cant figure out how they are related to this.
      createElement('ul', hrefset1.map(function(hrefset){
        return createElement('li', 
        [
          createElement( 'a',{attrs:{href: hrefset.url, target:'_blank', rel:'noopener'}, 
          domProps:{innerHTML: hrefset.tool}})
        ])
      })),

    //<h3>Essential Links</h3>
       createElement('h3', "Essential links"),

    //Second set of links
    /*<ul>
      <li><a href= target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href= target="_blank" rel="noopener">Forum</a></li>
      <li><a href= target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href= target="_blank" rel="noopener">Twitter</a></li>
      <li><a href= target="_blank" rel="noopener">News</a></li>
    </ul> */
      createElement('ul', hrefset2.map(function(hrefset){
        return createElement('li', 
        [
          createElement( 'a',{attrs:{href: hrefset.url, target:'_blank', rel:'noopener'}, 
          domProps:{innerHTML: hrefset.tool}})
        ])
      })),

    //<h3>Ecosystem</h3>
      createElement('h3', "Ecosystem"),

    /*Third set of links
    <ul>
      <li><a href= target="_blank" rel="noopener">vue-router</a></li>
      <li><a href= target="_blank" rel="noopener">vuex</a></li>
      <li><a href=target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href= target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href= target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>*/
      createElement('ul', hrefset3.map(function(hrefset){
        return createElement('li', 
        [
          createElement( 'a',{attrs:{href: hrefset.url, target:'_blank', rel:'noopener'}, 
          domProps:{innerHTML: hrefset.tool}})
        ])
      })),

    ])
  },//end of render function,
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
