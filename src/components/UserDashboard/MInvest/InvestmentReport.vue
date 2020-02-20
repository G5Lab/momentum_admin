<template>
  <Structure page="Investment Reports">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <InvestmentReportCard />
        </div>
        <div class="col-md-6">
          <InvestmentReportCard />
        </div>
        <div class="col-md-6">
          <InvestmentReportCard />
        </div>
        <div class="col-md-6">
          <InvestmentReportCard />
        </div>
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