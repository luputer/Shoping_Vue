import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Products from "./components/Products.vue";
import Checkout from "./components/checkOut.vue";

library.add(faShoppingCart, faDollarSign);

Vue.config.productionTip =  false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products
    },
    {
      path: "/checkout",
      component: Checkout
    }
  ]
})

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
