<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <Topbar />

      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <h1 class="h3 mb-0 text-gray-800">{{page}}</h1>
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
  name: "body",
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

<style scoped></style>