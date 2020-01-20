
/////////////////////////THIS STILL DOES NOT WORK/////////////////////////////////////////
Vue.component('slideshow', {

    //UPDATES IMG TEXT THROUGH THE COMPONENT SYNTAX ON HTML PAGE
    data: function () {
        return {
            imgs: "../Images/Image1.jpg",
            title: "Some Pretty Bats"
        };
    },

    methods: {
        //works as intended, BUT, slows webpage to a halt. Which is why I wasn't seeing the image change
        //Maybe have to load each image somewhere 
        //hidden in the page, and then simply swap hidden images with shown image?
        ChangeImage: function () {
            console.log("in change image");

            var Images = ["../Images/Image1.jpg",
                "../Images/Image2.jpg",
                "../Images/Image3.jpg",
                "../Images/Image4.jpg"];

            for (let i = 0; i <= Images.length; i++) {
                if (i === Images.length) { i = 0; }
                this.imgs = Images[i];
                setTimeout(6000);
                console.log(this.imgs);
            }
        }
    },

    template: '<div>'  + '<div>' + '<img width="500" height="500" v-bind:src="imgs"/>' + '</div>'
            + '<div>' + '{{title}}' + '</div>'
            + '<div>' + '<button type="button" v-on:click="ChangeImage">Click Me</button>' + '</div>' + '</div>'
});
new Vue({ el: '#slides' });

