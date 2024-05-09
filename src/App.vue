<template>
  <div id="app" class="container mt-5">
    <router-view
    :cart="cart"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    :maximum.sync="maximum"
    :products="products"
    :sliderStatus="sliderStatus"
    @toggle="toggleSliderStatus"
    @add="addItem"
    @delete="deleteItem"></router-view>
</div>
</template>

<script>
// import PriceSlider from './components/PriceSlider.vue'
// import ProductList from './components/productList.vue';
// import NavbarMenu from './components/NavbarMenu.vue'

//change location appVue to products

//delete because use VueRouter
// import Products from './components/Products.vue'
// import checkOut from './components/checkOut.vue'


export default {
  name: "App",
  data: function () {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: false
    }
  },
  components: {
    //coment because use view router 
    // Products,
    // checkOut
    // faShoppingCart
  },
  mounted: function () {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  },
  computed: {
    cartTotal: function () {
      let sum = 0
      for (let key in this.cart) {
        sum = sum + (this.cart[key].product.price * this.cart[key].qty)
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0
      for (let keys in this.cart) {
        qty = qty + this.cart[keys].qty;
      }
      return qty;
    }
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem: function (product) {
      let productIndex;
      let productExsis = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (productExsis.length) {
        this.cart[productIndex].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },
    deleteItem: function (Key){
        if (this.cart[Key].qty > 1){
          this.cart[Key].qty--;
        }else {
          this.cart.splice(Key, 1);
        }
      },
    updateMaxium(value) {
      this.maximum = value;
    }
  }
};
</script>
