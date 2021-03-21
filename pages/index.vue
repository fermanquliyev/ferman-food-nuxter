<template>
  <main>
    <app-header></app-header>
    <div class="container">
      <app-restaurant-info
        :foodData="$store.getters.foodData"
      ></app-restaurant-info>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "~/components/AppHeader.vue";
import AppRestaurantInfo from "~/components/AppRestaurantInfo.vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppRestaurantInfo
  }
});
</script>
