import Vue from 'vue';
import app from './components/app';

vue.config.productionTip = false;

new Vue({
    render: h => h(app)
}).$mount('#app');

console.log("in main js");

//why is this the only javascript that gets injected into the page?
