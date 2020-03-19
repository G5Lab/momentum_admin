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
ul {
  padding-top: 1rem;
}

@media (max-width: 767px) {
  .navbar-nav {
    margin-left: -10px !important;
  }
  .sidebar {
    min-width: 5.2rem !important;
  }
}
</style>