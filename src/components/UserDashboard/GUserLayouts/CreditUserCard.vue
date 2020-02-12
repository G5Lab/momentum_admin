<template>
  <div class="card">
    <div class="card-body">
      <p class="m-1 text-dark">Username: {{Username}}</p>
      <p class="m-1 text-dark">Amount: N{{Amount}}</p>
      <p class="m-1 text-dark">Date: {{TheDate}}</p>
      <button class="btn btn-primary">Credit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditUserCard",
  props: ["Username", "Amount", "TheDate"]
};
</script>

<style scoped>
.card {
  max-width: 20rem;
  transition: all 0.5s;
  margin: 0.45rem;
  min-width: 15rem;
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 255, 0.493);
}
</style>