<template>
  <h2 v-if="msg.length > 1" class="text-danger mx-0 m-0 bg-white text-center display-4">{{msg}}</h2>
</template>
<script>
export default {
  name: "Mssg",
  props: ["msg"]
};
</script>
<style  scoped>
.display-4 {
  font-weight: 700;
  font-size: 3.4rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
@media (max-width: 360px) {
  .display-4 {
    font-weight: 700;
    font-size: 1.6rem;
  }
}
</style>