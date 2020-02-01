var App = new Vue({
    el: "app",
    //Borked, cant get thumbnails to happen
    components: {
        slideshow: "slideshow"
    },
    //This is supposed to show up on the mainpage as thumbnail images under the slideshow but does not
    data() {
        return {
            pics: [{ picture: "/Vue/images/Image1.jpg" },
            { picture: "/Vue/images/Image2.jpg" },
            { picture: "/Vue/images/Image3.jpg" },
            { picture: "/Vue/images/Image4.jpg" }]
        };
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
        '<div>' + '<div>' + '<img width="500" height="500" v-bind:src="imgs" />' + '</div>'
            + '<div>' + '{{title}}' + '</div>'
            + '<div>' + '<button type="button" v-on:click="window.setInterval(ChangeImage,5000);">Click Me</button>' + '</div>' + '</div>'
    
});



