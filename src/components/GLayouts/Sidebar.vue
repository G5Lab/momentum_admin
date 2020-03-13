<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav px-0 bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
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
}

@media (max-width: 767px) {
  .navbar-nav {
    margin-left: -15px !important;
  }
  .sidebar {
    width: 5rem !important;
  }
}
</style>