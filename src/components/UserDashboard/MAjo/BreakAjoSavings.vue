<template>
  <Structure page="Break Ajo Savings">
    <div class="container">
      <div class="row">
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
        <BreakAjoSavingsCard Agent="Shola" Month="October" Amount="40500" />
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