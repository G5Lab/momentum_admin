<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <Topbar />

      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <h1 class="h2 page mb-3 text-gray-800">{{page}}</h1>
        </div>
      </div>

      <!-- Body Content Goes Here! -->
      <slot></slot>
    </div>

    <!-- Footer -->
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
@media (max-width: 768px) {
  .container-fluid {
    padding-left: 0.7rem;
  }
}
</style>