<template>
    <div>
        <h1 class="display-4 font-weight-bold mt-5 text-success ">My Shop</h1>
        <navbar-Menu :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle-slide="toggleSlider"
            @delete-item="deleteItem"></navbar-Menu>
        <price-slider :sliderStatus="sliderStatus" :maximum="maximum" @update:maximum="updateMaxium"></price-slider>
        <ProductList :products="products" :maximum="maximum" @add-item="addItem"></ProductList>
    </div>
</template>

<script>
import PriceSlider from './PriceSlider.vue'
import ProductList from './productList.vue';
import NavbarMenu from './NavbarMenu.vue'


export default {
    name: "Products-main",
    props: [
        "products",
        "maximum",
        "cart",
        "cartQty",
        "cartTotal",
        "sliderStatus",
        "sliderState",

    ],
    components: {
        ProductList,
        'price-slider': PriceSlider,
        'navbar-Menu': NavbarMenu
    },
    methods: {
        toggleSlider: function () {
            this.$emit('toggle');
        },
        addItem: function (item) {
            this.$emit('add', item)
        },
        deleteItem: function (index) {
            this.$emit('delete', index)
        },
        updateMaxium: function (value) {
            this.$emit('update:maximum', value)
        }
    }
}

</script>