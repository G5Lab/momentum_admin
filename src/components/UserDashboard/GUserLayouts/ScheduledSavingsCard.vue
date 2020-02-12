<template>
  <div class="box">
    <div>
      <span class="p text-primary mr-2">Agent:</span>
      <span class="lead font-weight-bold">{{AgentName}}</span>
    </div>
    <div>
      <span class="small text-primary mr-2">Start Date:</span>
      <span class="p font-weight-normal">{{StartDate}}</span>
    </div>
    <div>
      <span class="small text-primary mr-2">End Date:</span>
      <span class="p font-weight-normal">{{EndDate}}</span>
    </div>
    <div>
      <span class="p text-primary mr-2">Total Savings:</span>
      <span class="lead font-weight-bold">N{{TotalSavings}}</span>
    </div>
    <button class="btn btn-danger">Stop Savings</button>
  </div>
</template>

<script>
export default {
  name: "ScheduledSavingsCard",
  props: ["AgentName", "StartDate", "EndDate", "TotalSavings"]
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
span {
  color: black;
}
.box:hover {
  border: 2px solid black;
  cursor: pointer;
}
</style>