<template>
  <div class="card">
    <div
      class="card-body"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore doloribus tenetur magni laboriosam deserunt, corporis dolorem voluptas voluptates quas distinctio ipsam alias consectetur expedita! Voluptatem blanditiis nulla nobis quas?</div>
  </div>
</template>
<script>
export default {
  name: "AnnouncementCard"
};
</script>

<style scoped>
.card {
  max-width: 20rem;
  transition: all 0.5s;
  margin: 0.45rem;
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 255, 0.493);
}
</style>