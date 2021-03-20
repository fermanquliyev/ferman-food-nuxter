<template>
  <section class="restaurantinfo">
    <div v-for="store in foodData" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free delivery</span>
      </p>

      <div class="myrow">
        <div class="items" v-for="menuItem in store.menu" :key="menuItem.id"
        :style="`background: url(img/${menuItem.img}) no-repeat center center`"
        >
        <div class="iteminfo">
          <div>
            <h4>{{menuItem.item}}</h4>
            <p>{{priceFormatting(menuItem.price)}}</p>
          </div>
          <button class="btn btn-danger">View item ></button>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    foodData() {
      return this.$store.getters.foodData;
    }
  },
  methods:{
    priceFormatting(price:number){
      return '$' + price.toFixed(2);
    }
  }
});
</script>
