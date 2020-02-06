<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <Topbar />

      <!-- Page Content -->
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">User Profiles</h1>
        <p
          class="mb-4"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque magnam, facere voluptatem temporibus nobis ut. Ct</p>

        <DataTable />
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Topbar from "../GLayouts/Topbar";
import Footer from "../GLayouts/Footer";
import DataTable from "./DataTable";
export default {
  name: "Body",
  components: {
    Topbar,
    Footer,
    DataTable
  }
};
</script>
<style lang="stylus" scoped></style>