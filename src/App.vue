<template>
  <div id="app" class="container mt-5">
    <navbar-Menu :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="deleteItem"></navbar-Menu>
    <h1 class="display-4 font-weight-bold mt-5 text-success ">My Shop</h1>
    <price-slider :sliderStatus="sliderStatus" :maximum="maximum" @update:maximum="updateMaxium"></price-slider>
    <ProductList :products="products" :maximum="maximum" @add="addItem"></ProductList>
  </div>
</template>

<script>
import PriceSlider from './components/PriceSlider.vue'
import ProductList from './components/productList.vue';
import NavbarMenu from './components/NavbarMenu.vue'




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
    ProductList,
    'price-slider': PriceSlider,
    'navbar-Menu': NavbarMenu
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
