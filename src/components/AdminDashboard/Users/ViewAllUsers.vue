<template>
  <Structure page="Users Profile">
    <div class="container">
      <p
        class="mb-4"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque magnam, facere voluptatem temporibus nobis ut. Ct</p>
      <TableData />
    </div>
  </Structure>
</template>

<script>
import Structure from "../GAdminLayouts/AStructure";
import TableData from "../GAdminLayouts/TableData";
export default {
  name: "ViewUsers",
  components: {
    Structure,
    TableData
  }
};
</script>