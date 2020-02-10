<template>
  <Structure page="Savings Report">
    <div class="container">
      <div class="row">
        <ASavingsReportCard month="Jan" amount="N78,090" />
        <ASavingsReportCard month="Feb" amount="N8,090" />
        <ASavingsReportCard month="March" amount="N98,090" />
        <ASavingsReportCard month="April" amount="N700,090" />
        <ASavingsReportCard month="May" amount="N7,090" />
        <ASavingsReportCard month="June" amount="N58,090" />
        <ASavingsReportCard month="July" amount="N98,090" />
        <ASavingsReportCard month="August" amount="N108,090" />
        <ASavingsReportCard month="Sept" amount="N90,090" />
        <ASavingsReportCard month="Oct" amount="N110,090" />
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GAdminLayouts/AStructure";
import ASavingsReportCard from "../GAdminLayouts/ASavingsReportCard";
export default {
  name: "SavingsReport",
  components: {
    Structure,
    ASavingsReportCard
  }
};
</script>