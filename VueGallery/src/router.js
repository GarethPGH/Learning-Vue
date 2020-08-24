import Vue from 'vue';
import Router from "vue-router";
import ThePictures from './components/ThePictures';
import OpenPicture from './components/OpenPicture';

Vue.use(Router);

export default new Router({
    routes:[
        {   path: '/',
            name: 'Pics',
            component: ThePictures
        },
        {   path: '/pic',
            name: 'image',
            component: OpenPicture
        }
    ],
})