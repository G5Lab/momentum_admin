<template>
  <Structure page="Credit Users">
    <div class="container">
      <div class="row">
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
        <CreditUserCard Username="Bikol" Amount="23000" TheDate="11/02/2020" />
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import CreditUserCard from "../GUserLayouts/CreditUserCard";
export default {
  name: "CreditUsers",
  components: {
    Structure,
    CreditUserCard
  }
};
</script>