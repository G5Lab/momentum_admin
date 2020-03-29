<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <Topbar v-on:hideSidebar="$emit('hideSidebar')" />
      <div class="container-fluid">
        <!-- Page Heading -->
        <div v-if="page" class="d-sm-flex align-items-center justify-content-between mb-2">
          <h1 class="h2 page mb-3">{{page}}</h1>
        </div>
      </div>
      <!-- Body Content Goes Here! -->
      <slot></slot>
    </div>

    <!-- Footer  -->
    <Footer />
  </div>
</template>
<script>
import Topbar from "./Topbar";
import Footer from "./Footer";
export default {
  name: "Boddy",
  components: {
    Topbar,
    Footer
  },
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .page {
    font-size: 1.5rem;
  }
}
h1 {
  font-weight: 700 !important;
  color: rgba(0, 0, 0, 0.808);
}
</style>