<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#/admin">
      <div class="sidebar-brand-text mx-3">
        Admin
        <sup></sup>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <a class="nav-link" href="/#/admin">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading"></div>

    <!-- All Profiles -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <!-- <i class="fas fa-fw fa-cog"></i> -->
        <span>User Profile</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="collapse-item" href="#/userprofile">View User Profiles</a>
        </div>
      </div>
    </li>

    <!-- mINVEST -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePage"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mINVEST</span>
      </a>
      <div
        id="collapsePage"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="collapse-item" href="#/minvest">Crowd Investment</a>
          <a class="collapse-item" href="#/minvest">Start Investment Offer</a>
          <a class="collapse-item" href="#/minvest">Investment Update/Report</a>
          <a class="collapse-item" href="#/minvest">Distribute Profit Investment</a>
          <a class="collapse-item" href="#/minvest">Terminate Investment</a>
          <a class="collapse-item" href="#/minvest">Investment Report</a>
        </div>
      </div>
    </li>

    <!-- mSave -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mSAVE</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="collapse-item" href="#/msave">– Target Savings</a>
          <a class="collapse-item" href="#/msave">Saving Plan Setting</a>
          <a class="collapse-item" href="#/msave">Saving Report</a>
        </div>
      </div>
    </li>

    <!-- User MTG -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-wrench"></i>
        <span>User MGT</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="collapse-item" href="#/usermtg">KYC Approved</a>
          <a class="collapse-item" href="#/usermtg">Create New User</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
</template>


<script>
export default {
  name: "Sidebar",
  methods: {}
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