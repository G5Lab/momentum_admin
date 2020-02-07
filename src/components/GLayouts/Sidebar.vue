<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/userdashboard"
    >
      <div class="sidebar-brand-text mx-3">
        {{Utype}}
        <sup></sup>
      </div>
    </router-link>

    <hr class="sidebar-divider my-0" />

    <!--Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/userdashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />

    <!-- Input Data Goes Here! -->
    <slot></slot>

    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
</template>


<script>
export default {
  name: "Sidebar",
  props: {
    Utype: {
      type: String
    }
  }
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