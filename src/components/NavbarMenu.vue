<template>
    <nav class="navbar navbar-light bg-light fixed-top mb-10 mt-10">
        <div class="navbar-text ml-auto d-flex">
            <button class="btn btn-sm btn-outline-success mr-2" @click="$emit('toggle-slide')">
                <FontAwesomeIcon icon="dollar-sign"></FontAwesomeIcon>
            </button>
            <div class="dropdown ml-auto" v-if="cart.length > 0">
                <button class="btn btn-success btn-sm dropdown-toggle" id="dropdownCart" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <span class="badge badge-pill badge-success btn btn-primary ">{{ cartQty }}</span>
                    <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
                    <price :value="Number(cartTotal)"></price>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCart">
                    <div v-for="(item, index) in cart " :key="index">
                        <div class="dropdown-item-text text-nowrap text-right">
                            <span class="badge badge-pill badge-warning align-text-top mr-1">
                                {{ item.qty }}
                            </span>
                            {{ item.product.name }}
                            <b>{{ item.product.price * item.qty | curencyFormat }}</b>
                            <a href="#" class="badge badge-danger text-white" @click.stop="$emit('delete-item', index)">-</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import price from "./priceDisplay.vue";

export default {
    name: "Navbar-menu",
    components: {
        price,
        FontAwesomeIcon
    },
    props: ["cart", "cartQty", "cartTotal"],
    filters: {
        curencyFormat: function (value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2);
        }
    },
}

</script>
