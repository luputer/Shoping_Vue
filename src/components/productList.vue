<template>
  <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
    <div class="row mb-3 align-item-center" v-for="item in showItem" :key="item.id">
      <div class="col-1 m-auto">
        <button class="btn btn-primary" @click.stop="$emit('add-item', item)">+</button>
      </div>
      <div class="col-sm-4">
        <img :src="item.image" :alt="item.name" class="img-fluid d-block">
      </div>
      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import price from "./priceDisplay.vue";

export default {
  name: "product-list",
  components: {
    price,
  },
  props: ["products", "maximum"],
  computed: {
    showItem: function () {
      let max = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= max;
      })
    }
  },
  methods: {
    before: function (el) {
      el.className = 'd-none'
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = 'row d-flex mb-3 align-items-center animated fadeInRight'
      }, delay)
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className = 'row d-flex mb-3 align-items-center animated fadeOutLeft'
      }, delay)
    },
  }
}

</script>