<template>
  <div class="first">
    <div class="card-body">
      <p class="text-dark m-1">
        <span>From:</span>
        {{from}}
      </p>
      <p class="text-dark m-1">
        <span>Date:</span>
        {{TheDate}}
      </p>
      <p class="text-dark m-1">
        <span>Desc:</span>
        {{Desc}}
      </p>
      <button class="btn btn-info">View Message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InboxCard",
  props: ["from", "TheDate", "Desc"]
};
</script>

<style scoped>
.first {
  width: 20rem;
  margin: 0.4rem;
  border: 2px dotted rgba(31, 30, 30, 0.63);

  padding: 0.1rem;
  transition: all 0.5s;
}
.first:hover {
  border: 2px solid rgba(31, 30, 30, 0.63);
}
</style>