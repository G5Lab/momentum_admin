<template>
  <div class="box">
    <div>
      <span class="small text-primary mr-2">Date:</span>
      <span class="p font-weight-normal">{{StartDate}}</span>
    </div>
    <div>
      <span class="p text-primary mr-2">Desc:</span>
      <span class="p font-weight-normal">{{Desc}}</span>
    </div>

    <div>
      <span class="p text-primary mr-2">Amount:</span>
      <span class="lead font-weight-bold">N{{Amount}}</span>
    </div>
    <button class="btn btn-danger">Drop</button>
  </div>
</template>
<script>
export default {
  name: "DirectSavingsCard",
  props: ["StartDate", "Desc", "Amount"]
};
</script>

<style scoped>
.box {
  width: 20rem;
  display: inline-block;
  margin: 0.4rem;
  border: 2px dotted black;
  padding: 0.3rem;
}
.box:hover {
  border: 2px solid black;
  cursor: pointer;
}
span {
  color: black;
}
</style>