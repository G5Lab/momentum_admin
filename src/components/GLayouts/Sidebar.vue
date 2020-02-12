<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Input Data Goes Here! -->
    <slot></slot>

    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
</template>


<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .sidebar {
    width: 4rem;
    min-height: 100vh;
  }
  .nav-link {
    margin-left: -20px !important;
  }
}
</style>