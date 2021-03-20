<template>
  <main class="restaurant mt-5 container">
    <div class="row">
      <div class="col-md-6 ml-auto">
        <h1>Restaurants</h1>
      </div>
      <div class="col-md-4 mr-auto">
        <app-select @change="selectedOption = $event"></app-select>
      </div>
    </div>

    <app-restaurant-info :foodData="filteredFoodData"></app-restaurant-info>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "~/components/AppHeader.vue";
import AppRestaurantInfo from "~/components/AppRestaurantInfo.vue";
import AppSelect from "~/components/AppSelect.vue";

export default Vue.extend({
  components: {
    AppHeader,
    AppRestaurantInfo,
    AppSelect
  },
  data() {
    return {
      selectedOption: String()
    };
  },
  computed: {
    filteredFoodData() {
      if (this.$data.selectedOption) {
        return this.$store.getters.foodData.filter((x: { name: string }) => {
          return x.name.toLowerCase().includes(this.$data.selectedOption);
        });
      }
      return this.$store.getters.foodData;
    }
  }
});
</script>
