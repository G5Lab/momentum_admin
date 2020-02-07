<template>
  <div>
    <!-- All Profiles -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Profile</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/updateprofile">Update Profile</router-link>
          <router-link class="collapse-item" to="/bkinfo">Enter Bank Info</router-link>
          <router-link class="collapse-item" to>Complete KYC</router-link>
        </div>
      </div>
    </li>

    <!-- mSAVE -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapsePage"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mSAVE</span>
      </a>
      <div
        id="collapsePage"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to>Target Savings</router-link>
          <router-link class="collapse-item" to>Savings Report</router-link>
          <router-link class="collapse-item" to>View Savings</router-link>
        </div>
      </div>
    </li>

    <!-- mINVEST -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mINVEST</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to>Start Investment</router-link>
          <router-link class="collapse-item" to>Investment Reports</router-link>
          <router-link class="collapse-item" to>View Investment History</router-link>
          <router-link class="collapse-item" to>Terminate Investment</router-link>
        </div>
      </div>
    </li>

    <!-- mAgent -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mAgent</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to>Top Up Balance</router-link>
          <router-link class="collapse-item" to>Collect Funds</router-link>
          <router-link class="collapse-item" to>View Savers</router-link>
          <router-link class="collapse-item" to>Report</router-link>
          <router-link class="collapse-item" to></router-link>
        </div>
      </div>
    </li>
    <!-- Support -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseUtilitiesp"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Support</span>
      </a>
      <div
        id="collapseUtilitiesp"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to>Report To Admin</router-link>
          <router-link class="collapse-item" to>View Messages</router-link>
          <router-link class="collapse-item" to>View Annoncement</router-link>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "SidebarInner"
};
</script>

<style lang="stylus" scoped></style>