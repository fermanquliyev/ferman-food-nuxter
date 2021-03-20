<template>
  <section role="img" aria-label="Food image">
    <b-jumbotron
      fluid
      text-variant="white"
      header="FoodNuxter"
      lead="Order your food and start eating in 5 minutes!"
    >
      <b-button variant="danger" href="#">More Info</b-button>
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
