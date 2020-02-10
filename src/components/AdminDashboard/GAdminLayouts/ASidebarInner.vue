<template>
  <div>
    <!-- Users -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Users</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/allusers">View All Users</router-link>
          <router-link class="collapse-item" to="/akycrequest">View Kyc Request</router-link>
          <router-link class="collapse-item" to>View A User</router-link>
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
          <router-link class="collapse-item" to="/amsavesettings">mSave Settings</router-link>
          <router-link class="collapse-item" to="/asavingsreport">Savings Report</router-link>
          <router-link class="collapse-item" to="/aviewallsavings">View All Savings</router-link>
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
          <router-link class="collapse-item" to="/aminvest">Crowd Investment</router-link>
          <router-link class="collapse-item" to="/aminvest">Upload An Investment</router-link>
          <router-link class="collapse-item" to="/aminvest">View Investment Request</router-link>
          <router-link class="collapse-item" to="/aminvest">Investment Settings</router-link>
          <router-link class="collapse-item" to="/aminvest">View Investment Report</router-link>
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
          <router-link class="collapse-item" to>View mAgents</router-link>
          <router-link class="collapse-item" to>View mAgents Report</router-link>
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
          <router-link class="collapse-item" to>User Messages</router-link>
          <router-link class="collapse-item" to>Sent Messages</router-link>
          <router-link class="collapse-item" to>Send An Annoncement</router-link>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "ASidebarInner"
};
</script>

<style lang="stylus" scoped></style>