var App = new Vue({
    el: "app",
    //Borked, cant get thumbnails to happen
    //******* Figure out how to use Vue props and data *********
    //***** May need to figure out how to use module.exports and export default 
    components: {
        slideshow: "slideshow",
        thumbs: "thumbs",
        
    },
    //This is supposed to show up on the mainpage as thumbnail images under the slideshow but does not
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
    },
        
    //right now this is hardcoded, and not being used
    data: {
        name: "",
        url: "",
        pictures: ["/Vue/images/Image1.jpg",
               "/Vue/images/Image2.jpg",
               "/Vue/images/Image3.jpg",
               "/Vue/images/Image4.jpg"]
    }
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

Vue.component('thumbs', function () {
    template: "<div class='thumbs'>" + "<img v-for='pic in pics' : src='pic.picture' height='5%' width='5%' />" + "</div>";
});


