<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{Week}}</h4>
      <p>
        <span class="text-muted">About :</span>
        {{About}}
      </p>
      <button class="btn btn-primary">Download Now</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: all 0.5s;
  margin: 0.45rem;
  color: rgb(19, 17, 17);
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 255, 0.493);
}
</style>
<script>
export default {
  name: "LearningMaterialsCard",
  props: ["Week", "About"]
};
</script>