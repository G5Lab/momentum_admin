<template>
  <nav class="navbar navbar-dark pt-3 bg-primary navbar-expand-lg">
    <div class="container">
      <span class="display-4 text-white">{{name}}</span>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  props: {
    name: {
      type: String,
      default: "Momentum"
    }
  }
};
</script>

<style scoped>
.display-4 {
  font-size: 3rem;
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
@media (min-width: 767px) {
  nav {
    margin-bottom: -1.4rem;
  }
}
@media (max-width: 767px) {
  .display-4 {
    padding-top: 0.5rem;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: -2rem;
  }
}
</style>