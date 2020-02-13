<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

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
.fa {
  color: white !important;
  font-size: 1.5rem;
  display: fixed;
}
.fa:hover {
  background: rgb(29, 28, 28);
  padding: 1rem;
  cursor: pointer;
  border-radius: 50%;
}
ul {
  padding-top: 1rem;
  /* display: none; */
}
</style>