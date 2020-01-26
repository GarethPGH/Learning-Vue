
Vue.component('slideshow', {

    //UPDATES IMG SRC THROUGH THE COMPONENT SYNTAX ON HTML PAGE
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
            //now I need to figure out how to add images dynamically to a collection for 
            //the slideshow to run on, and or, use a collection of user submitted images
            //will require a Form, and typical CRUD 


            //Put in fully qualified path names here and then test it. Still borked, having problem with relative paths
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
new Vue({ el: '#slides' });

