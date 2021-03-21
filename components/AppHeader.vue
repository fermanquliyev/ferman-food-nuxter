<template>
  <section role="img" aria-label="Food image">
    <b-jumbotron
      fluid
      text-variant="white"
      header="FoodNuxter"
      lead="Order your food and start eating in 5 minutes!"
    >

        <nuxt-link to="/restaurants" class="btn btn-danger">More Info</nuxt-link>

      <slot></slot>
    </b-jumbotron>
  </section>
</template>

<style scoped>
.jumbotron {
  background-image: url("~/assets/headerimg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
