<template>
  <Structure page="Learning Materials">
    <div class="container">
      <div class="row">
        <Card Week="First Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        <Card Week="Second Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        <Card Week="Third Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        <Card Week="Fourth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        <Card Week="Fifth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        <Card Week="Sixth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Card from "../GUserLayouts/LearningMaterialsCard";
export default {
  name: "LearningMaterials",
  components: {
    Structure,
    Card
  }
};
</script>