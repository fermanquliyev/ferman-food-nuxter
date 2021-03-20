<template>
  <section class="restaurantinfo">
    <div v-for="store in foodData" :key="store.id" class="mt-5">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free delivery</span>
      </p>

      <div class="row my-4">
        <div
          class="col-lg-4 col-md-6"
          v-for="menuItem in store.menu"
          :key="menuItem.id"
        >
          <div
            class="items"
            :style="
              `background: url(img/${menuItem.img}) no-repeat center center`
            "
          >
            <div class="iteminfo">
              <div>
                <h4>{{ menuItem.item }}</h4>
                <p>{{ priceFormatting(menuItem.price) }}</p>
              </div>
              <nuxt-link :to="`/items/${menuItem.id}`">
                <button class="btn btn-danger">View item ></button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    foodData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    priceFormatting(price: number) {
      return "$" + price.toFixed(2);
    }
  }
});
</script>

<style lang="scss" scoped>
.iteminfo {
  p {
    margin-bottom: 0px;
  }
}
</style>
