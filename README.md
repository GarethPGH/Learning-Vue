# Learning Vue
 An attempt to learn Vue.js by creating an image slideshow app
 
 Using an altered .NET Core app in Visual Studio, to write Javascript using Vue nuget package
 following this tutorial: https://docs.microsoft.com/en-us/visualstudio/javascript/create-application-with-vuejs?view=vs-2019
 <br />
 ### What I have learned from this project:
 1:) Using Visual Studio 2017 and the hack above to host a Vue Application in IIS is convoluted and annoying. Constant issues with mounting the app in .vue files, using a version of VS that is not built to handle .vue files (they are .js files with a renamed extension). Using the vue nuget package did not work. C#/Razor backend kept wanting to override Vue when it came to rendering the start page.  
<br />
 2:) Using Visual Studio 2019 built-in templates was annoying. Apparently, they aren't actually kept up to date with Vue's ecosystem, or only work for limited projects. If you can get them to work, great! I could not.  
<br />
 3:) Visual Studio Code and NPM seem to work well together, but you have to really understand CLI and Webpack (due to Vue default Installation to prefer render functions over html templates).  
<br />
 4:)Vue-Cli has a UI; vue ui command in the terminal. Use it. I fixed a configuration issue I spent 7 hours over the course of two days trying to figure out, in 5 minutes by navigating a couple menus.  
 
<br />
5:) Not sure if render functions are worth the hype. They might cut down on client Javascript download size, but the gain in performance causes a huge difference in complexity. Templates seem far easier to manage, and much easier to read. Maybe for complex or repetitive template code? For now though, will be sticking with templates  

<br />
### What I built:  
1:) Managed to create a hard-coded Vue slideshow in VS 2019. I could not successfully use it as a component. There were pathing issues. 
<br />
2:) Vue instances must have one overall parent node. (usually a div). Components can't work as top level elements.  
<br />
3:) Thought I could use what I learned from the beginner course in Vue Mastery to create my own application. It quickly became confusing with multiple files, how properly to architect the app and figure out what file, should touch what file. (WebApplication1 folder)  
<br />
4:) Attempted to scale back to simple "hello world" type app to examine how Vue handles dataflow, using simple data options between two files, console.log(proof that the changes were being made). It did not work, possibly due to VS2019 issues listed above 
<br />
5:) Switched to Travery Media's Vue JS Todo App, using VSCode and NPM: https://www.youtube.com/watch?v=Wy9q22isx3U&t=3528s <br />
App does not work once you add JSONPlaceholder to your dependancies to simulate an HTTP back end. Included how to use vue-router. The project worked as expected after including vue-router.
<br />  

6:) Did tutorial projects for both vue-router (VuejsApp) and vuex (VueJSApp With Vuex folder), from Traversy Media.
<br />  

7:) Rewrote HelloWorld using render functions instead of templates. While not exactly as the original example, it functions. 
</br >
### Goals:
<br />
1:) Create a Vuejs photo gallery  
<br />
2:) Present what I learned to the .NET Usergroup, about how to use Vue.js  
