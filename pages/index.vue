<template>
  <main>
    <app-header></app-header>
    <app-restaurant-info></app-restaurant-info>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppRestaurantInfo from '~/components/AppRestaurantInfo.vue';

export default Vue.extend({
  components:{
    AppHeader,
    AppRestaurantInfo
  }
})
</script>
