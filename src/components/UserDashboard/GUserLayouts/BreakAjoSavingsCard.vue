<template>
  <div class="card">
    <div class="card-body">
      <p class="m-1 text-dark">Agent: {{Agent}}</p>
      <p class="m-1 text-dark">Month: {{Month}}</p>
      <p class="m-1 text-dark">Amount: N{{Amount}}</p>
      <button class="btn btn-primary">Break</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreakAjoSavingsCard",
  props: ["Agent", "Amount", "TheDate", "Month"]
};
</script>

<style scoped>
.card {
  transition: all 0.5s;
  margin: 0.4rem;
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 3px 3px rgba(0, 0, 255, 0.493);
}
</style>