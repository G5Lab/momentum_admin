<template>
  <Structure page="View All Savings">
    <div class="container">
      <div class="row">
        <AViewAllSavingsCard Agent="Mr Ade" customers="20" Balance="1,450,000" />
        <AViewAllSavingsCard Agent="Mr Shola" customers="9" Balance="200,000" />
        <AViewAllSavingsCard Agent="Mr Pedro" customers="4" Balance="50,000" />
        <AViewAllSavingsCard Agent="Mr Mople" customers="83" Balance="950,000" />
        <AViewAllSavingsCard Agent="Mr Jue" customers="25" Balance="450,000" />
        <AViewAllSavingsCard Agent="Mr Qune" customers="13" Balance="650,000" />
        <AViewAllSavingsCard Agent="Mr Spado" customers="30" Balance="770,000" />
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GAdminLayouts/AStructure";
import AViewAllSavingsCard from "../GAdminLayouts/AViewAllSavingsCard";
export default {
  name: "ViewAllSavings",
  components: {
    Structure,
    AViewAllSavingsCard
  }
};
</script>