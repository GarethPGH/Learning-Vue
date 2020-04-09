# Learning Vue
 An attempt to learn Vue.js by creating an image slideshow app
 
 Using an altered .NET Core app in Visual Studio, to write Javascript using Vue nuget package
 following this tutorial: https://docs.microsoft.com/en-us/visualstudio/javascript/create-application-with-vuejs?view=vs-2019



 What I have learned from this project:

 1:) Using Visual Studio 2017 and the hack above to host a Vue Application in IIS is convoluted and annoying. Constant issues with mounting the app in .vue files, using a version of VS that is not built to handle .vue files (they are .js files with a renamed extension). Using the vue nuget package did not work. C#/Razor backend kept wanting to override Vue when it came to rendering the start page. 

 2:) Using Visual Studio 2019 built-in templates was annoying. Apparently, they aren't actually kept up to date with Vue's ecosystem, or only work for limited projects. If you can get them to work, great! I could not.

 3:) Visual Studio Code and NPM seem to work well together, but you have to really understand CLI and Webpack (due to Vue default Installation to prefer render functions over html templates).

 4:)Vue-Cli has a UI; vue ui command in the terminal. Use it. I fixed a configuration issue I spent 7 hours over the course of two days trying to figure out, in 5 minutes by navigating a couple menus.



What I built:
1:) Managed to create a hard-coded Vue slideshow in VS 2019. I could not successfully use it as a component. There were pathing issues.

2:) Vue instances must have one overall parent node. (usually a div). Components can't work as top level elements.

3:) Thought I could use what I learned from the beginner course in Vue Mastery to create my own application. It quickly became confusing with multiple files, how properly to architect the app and figure out what file, should touch what file. (WebApplication1 folder)

4:) Attempted to scale back to simple hello world type app to examine how Vue handles dataflow. It did not work.

5:) Switched to Travery Media's Vue JS Todo App: https://www.youtube.com/watch?v=Wy9q22isx3U&t=3528s
App does not work once you add JSONPlaceholder to your dependancies to simulate an HTTP back end. I am getting an error that my Todos property (referring to my Todo Import statement in Vue.app) is not reactive. However, it was, at the time, written exactly as the tutorial had it written. I have made some changes to point directly at my import statements, but I don't know what is causing the problem. AddTodo does not add Todos to the list, and Created() method in App.vue does not pull data from JSONPlaceholder (VuejsApp1 folder)

Am currently trying to find out the answer to my questions, and am heavily focusing on the documentation at Vuejs.org



Goals:
1:) Do the tutorial, so I can better understand how to archiect Vue apps

2:) Create a Vuejs photo gallery

3:) Present what I learned to the .NET Usergroup, about how to use Vue.js
