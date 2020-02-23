import Vue from 'vue';
//rewritting using this https://dev.to/cooperaustinj/using-vue-observable-as-a-state-store-37fa
const picture = Vue.Observable({
    name: "image1",
    url: "/Vue/images/Image1.jpg" 
});

export const getters{
    getName:() => picture.name,
    getUrl: () => picture.url
}

export const setters{
    setName: (value) => picture.name = value,
    setUrl: (value) => picture.url=value
}