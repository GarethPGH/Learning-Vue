//!!!!!!!!!!!!!!!Important. Currently testing saved state using pictures.js. Figure out how to add pictures to pictures.js and see if it will grow
//!!!!!!!!!!!!Console.log your results  to see the array grow. Use it to display them on the page
import pictures from "./Vue/components/pictures.js";
//ESLint error "unexpected use of filename extension". I may have to use webpack after all because, it seems hard to find the .NET answer for unresolved filenames and ESLint
//so might have to blow away and rewrite app, but persisting this code just to resolve this issue
var App = new Vue({
    
    el: "app",
    //Borked, cant get thumbnails to happen
    //******* Figure out how to use Vue props and data *********
    //***** May need to figure out how to use module.exports and export default 
    components: {
        slideshow: "slideshow",
        thumbs: "thumbs",
        picture: "picture"
        
    },
    //possibly not needed
    data: {
        name: "",
        url: "",
    },
    //will hopefully be used in a form to let users add pictures to the slideshow.
    //added pictures are to be stored in pictures.js as new instances of picture
    model: {
        imageName: "", 

        computed: {
            imageUrl() {
                return "./Vue/images/${encodeURIComponent(this.name)}.jpg";
                //this will need to be changed to underlying database routing 
            }
        }
       
    },
    ////this probably needs to be rewritten
    //also may not be needed
    //props: {

    //    computed: {
    //        img() {
    //            return "./Vue/images/${encodeURIComponent(this.name)}.jpg";
    //        }
    //    },
    //    pics: {
    //        type: Array[img],
    //        default: [{ picture: "no image" }]
    //    }
    //},

    methods: {
        warn: function () {
            if (event) {
                event.stopPropagation();
                console.log("Name: " + this.name + "URL: " + this.url);
            }
            else { console.log("event was not stopped"); }
        }
        //Add a get picture, using pictures.getters

        //Add a set picture, using pictures.setters
        //as a new pictures.picture();
    },

});
//Updates slideshow image src and loops indefinitely after button press
Vue.component('slideshow', {
    data: function () {
        return {
            imgs: "/Vue/images/Image1.jpg",
            title: "Some Pretty Pictures",
            increment: 0
        };
    },

    methods: {
       
        ChangeImage: function () {

            console.log("in change image");

            var Images = ["/Vue/images/Image1.jpg",
                "/Vue/images/Image2.jpg",
                "/Vue/images/Image3.jpg",
                "/Vue/images/Image4.jpg"];

            if (this.increment === Images.length) { this.increment = 0; }

            this.imgs = Images[this.increment];
            this.increment++;

            console.log(this.imgs);
        }
    },

    template: 
        '<div class="slideshow">' + '<div>' + '<img width="500" height="500" v-bind:src="imgs" />' + '</div>'
            + '<div>' + '{{title}}' + '</div>'
            + '<div>' + '<button type="button" v-on:click="window.setInterval(ChangeImage,5000);">Click Me</button>' + '</div>' + '</div>'
    
});
Vue.component('picture', function () {
    //this component is only here to test picture.js as a data store for persisting state. 
    //I will be learning how to use vuex for the remainder of the project

    methods: {
        getPics = function () {
            return {
                pics: pictures.pictures
            };
        },

        setPics = function () {

        }
    }
});
Vue.component('thumbs', function () {
    template: "<div class='thumbs'>" + "<img v-for='pic in pics' : src='pic.picture' height='5%' width='5%' />" + "</div>";
});


