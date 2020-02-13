<template>
  <Structure page="Learning Materials">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="First Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="Second Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="Third Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="Fourth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="Fifth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <Card Week="Sixth Week" About="Lorem skkof ffjin dfifmod ksmdionos ddind" />
        </div>
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