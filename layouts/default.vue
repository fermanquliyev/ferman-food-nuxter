<template>
  <div>
    <div class="content">
      <app-menu></app-menu>
      <Nuxt />
    </div>
    <footer>
      <p>Created by Ferman Quliyev</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppMenu from "@/components/AppMenu.vue";
export default Vue.extend({
  components: {
    AppMenu
  }
});
</script>

<style>
html {
  font-family: "Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 300;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1,
h2,
h3,
h4 {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-weight: 600;
}
</style>
