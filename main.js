const app = Vue.createApp({
  data() {
      return {
          product: 'Kumi burger',
          url: "https://dribbble.com/shots/14471510-Food-Website-Design",
          image : "./Assets/bg.jpg",
          cart: 0,
          menus: [{id:01 , food: "crisent city burger", image:"./Assets/cresentCity.jpg"},
                  {id:02 , food: "Spicy chicken burger", image:"./Assets/spicy.jpg"}]
      }
  },
  methods: {
    updateImage(foodImage){
      this.image = foodImage
    },
    addtoCart(){
      this.cart +=1
    }
  }
})