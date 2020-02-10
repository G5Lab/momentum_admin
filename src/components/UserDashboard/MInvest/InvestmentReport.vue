<template>
  <Structure page="Investment Reports">
    <div class="container">
      <div class="row">
        <InvestmentReportCard />
        <InvestmentReportCard />
        <InvestmentReportCard />
        <InvestmentReportCard />
        <InvestmentReportCard />
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import InvestmentReportCard from "../GUserLayouts/InvestmentReportCard";
export default {
  name: "InvestmentReport",
  components: {
    Structure,
    InvestmentReportCard
  }
};
</script>