<template>
  <main class="container">
    <div class="row mt-5">
      <div class="col-md-6">
        <section
          class="image rounded mb-3"
          :style="
            `background: url(/img/${currentItem.img}) no-repeat center center`
          "
        ></section>
        <div class="row">
          <div class="col-12">
            <section class="options">
              <h3>Description</h3>
              <p>{{ currentItem.description }}</p>
            </section>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <section class="details">
          <h1>{{ currentItem.item }}</h1>

          <h3>Price: ${{ currentItem.price.toFixed(2) }}</h3>

          <div class="quantity">
            <input type="number" min="1" minlength="1" v-model.number="count" />
            <button class="primary" @click="addToCart">
              Add to Cart - ${{ combinedPrice }}
            </button>
          </div>

          <b-alert :variant="alertVariant" :show="submitted">
            {{ alertMessage }}</b-alert
          >

          <fieldset v-if="currentItem.options">
            <legend>
              <h3>Options</h3>
            </legend>
            <div v-for="option in currentItem.options" :key="option">
              <input
                type="radio"
                name="option"
                :id="option"
                :value="option"
                v-model="selectedOption"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </fieldset>

          <fieldset v-if="currentItem.addOns">
            <legend>
              <h3>Add Ons</h3>
            </legend>
            <div v-for="addon in currentItem.addOns" :key="addon">
              <input
                type="checkbox"
                name="addon"
                :id="addon"
                :value="addon"
                v-model="selectedAddons"
              />
              <label :for="addon">{{ addon }}</label>
            </div>
          </fieldset>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      selectedOption: "",
      alertVariant: "danger",
      alertMessage: "Please select addon and option. Minimum valid count is 1",
      selectedAddons: [],
      submitted: false
    };
  },
  methods: {
    addToCart() {
      if ((this.currentItem.options && !this.selectedOption) || !this.selectedAddons.length) {
        this.alertVariant = "danger";
        this.alertMessage =
          `Please select addon${this.currentItem.options?' and option':''}.`;
        this.submitted = true;
        return;
      }
      let cartData = {
        option: this.selectedOption,
        addons: this.selectedAddons,
        itemId: this.id,
        itemName: this.currentItem.item,
        count: this.count,
        combinedPrice: this.currentItem.price * this.count
      };
      this.$store.commit("addToCart", cartData);
      this.alertVariant = "success";
      this.alertMessage = "Added to cart successfully. You will be redirected to restaurants page...";
      this.submitted = true;
      setTimeout(() => {
        this.$router.push('/restaurants');
      }, 1000);
    }
  },
  computed: {
    currentItem() {
      for (const restaurant of this.$store.getters.foodData) {
        for (const item of restaurant.menu) {
          if (item.id == this.id) {
            return item;
          }
        }
      }
      return null;
    },
    combinedPrice(): string {
      return (this.currentItem.price * this.count).toFixed(2);
    }
  }
});
</script>
