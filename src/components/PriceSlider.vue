<template>
   <transition name="costome" enter-active-class="animated fadeInDown" leave-active-class="animated slideOutRight">
  <div v-if="sliderStatus">
    <div class="  mt-5 align-items-center mb-2" :class="sliders">
      <label for="" class="font-wight-bold mr-2 ">Max</label>
      <input class="form-control mx-2 " type="number"
        style="width: 70px; text-align: center;" v-model="localmaximum">
      <input type="range" class="costom-range" v-model="localmaximum" max="200" min="0" @input="updateMaximum">
    </div>
  </div>
</transition>
</template>

<script>
 export default{
    name: "price-slider",
    props: ["sliderStatus", "maximum"],
    data() {
        return {
            localmaximum: this.maximum
        };
    },
    computed: {
        sliders: function (){
        return this.sliderStatus ? 'd-flex' : 'd-none'
      }
    },
    methods:{
        updateMaximum(event) {
            this.localMaximum = event.target.value;
            this.$emit("update:maximum", this.localMaximum);
        }
    }

 }

</script>

<style>
.fade-enter, .fade-leave-to {
    opacity: 0;
} 
 .fade-enter-active, .fade-leave-active {
    transition: all 1s ease-in-out;
}   
</style>