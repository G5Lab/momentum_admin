<template>
  <Structure page="Break Ajo Savings">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xl-3 col-md-6 mb-2">
          <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        </div>
        <div class="col-xl-3 col-md-6 mb-2">
          <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        </div>
        <div class="col-xl-3 col-md-6 mb-2">
          <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        </div>
        <div class="col-xl-3 col-md-6 mb-2">
          <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import BreakAjoSavingsCard from "../GUserLayouts/BreakAjoSavingsCard";
export default {
  name: "BreakAjoSavings",
  components: {
    Structure,
    BreakAjoSavingsCard
  }
};
</script>