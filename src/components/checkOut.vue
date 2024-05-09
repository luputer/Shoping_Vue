<template>
    <div>
        <h1>CheckOut</h1>
        <table class="table table-hover" v-if="cart.length">
            <caption class="text-right h3">
                <b>total</b>
                <Price class="d-block text-success font-wight-light"
                :value="Number(cartTotal)"></Price>
            </caption>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">item</th>
                    <th scope="col" class="text-center">Qty</th>
                    <th scope="col" class="text-right">price</th>
                </tr>
            </thead>
            <tbody> 
                <tr v-for="item in cart" :key="item.product.id">
                  <td class="text-center">
                    <div class="btn-group">
                        <button @click="$emit('add', item.product)" class="btn btn-info">+</button>
                        <button @click="$emit('delete', item.product)" class="btn btn-outline-info">-</button>
                    </div>
                  </td>
                </tr>
                <th scope="row">{{ item.product.name }}</th>
                <th class="text-center">{{ item.qty }}</th>
                <th class="text-right">{{ Number(item.product.price) }}</th>
                <th class="text-right">
                    {{ Number(item.product.price * item.qty) }}
                </th>
            </tbody>
        </table>
    </div>
</template>

<script>
import Price from "./priceDisplay.vue"

export default {
    name: "ChekOut",
    props: ['cart',"cartTotal"],
    components: {
        Price
    }
}

</script>