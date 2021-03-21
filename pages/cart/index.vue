<template>
  <main class="container cart">
    <h2>Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Add Ons</th>
          <th>Amount</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.getters.cart" :key="item.id">
          <td>
            {{ item.itemName }}
            <span v-show="item.option">- {{ item.option }}</span>
          </td>
          <td>
            <span class="comma" v-for="addon in item.addons" :key="addon">{{
              addon
            }}</span>
          </td>
          <td>{{ item.count }}</td>
          <td>{{ item.combinedPrice }}</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="total">Total: ${{ totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    totalPrice() {
      if (this.$store.getters.cart.length) {
        return this.$store.getters.cart
          .map((item: { combinedPrice: number }) => {
            return item.combinedPrice;
          })
          .reduce((a: number, b: number) => a + b, 0)
          .toFixed(2);
      }
      return 0;
    }
  }
});
</script>
