  const galleryimages = {
  //analogous to vue Data
    //Ideally create all your data properties here as a best practice
    //though you can use Vue.set(object, property, propertyvalue ) 
    //or the spread operator dataob={...dataob, property, propertyvalue}in your associated vue file to add to the store
    state: {
        Images:[],
        Image:{
            id: 0,
            title: "",
            url: "",
            description:""
        }
    },
    //analogous to vue Computed
    getters: {
            image:{
                id: state => state.image.id,
                title: state => state.image.title,
                url: state => state.image.url,
                description: state => state.image.description
            },

            images: state => state.images
        }
    },
    //analogous to vue Methods: Business logic
    //commit or store.dispatch the mutation to touch the data asynchonously
    //Actions commit mutations
    //Dispatch activates actions
    actions: {
        setImage(context){
            context.commit('SET_IMAGE');
        }
    },
    //Commit and Track changes to the State. this must be done synchronously
    //This is where the actual magic happens: Data management
    mutations: {
        SET_IMAGE:(state, image){
            state.image.title = title;
            state.image.url = url;//replace this with an API call to set an id when added to the gallery
            state.image.description = description;
            console.log(this.$store.state.Image);
        },

        pushImage(Images){
            this.Images.unshift(this.image);

            this.$store.commit('pushImage');
        }, 

        _getImageById: (state) => (id) => {
            return state.images.find(image => image.id === id);
        },
        //get all images
        getImages:(state)=>{
            return state.images;
        },
        //delete image
        deleteImageById: (state) => (id) => {
            return state.images.filter(image => image.id !== id)
        },
    }
}
