<template>
  <div>
    <!-- Sidebar -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/userdashboard"
    >
      <div class="sidebar-brand-text mx-3">
        User
        <sup></sup>
      </div>
    </router-link>

    <hr class="sidebar-divider my-0" />
    <!--Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/userdashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span class="d-none d-md-inline">Dashboard</span>
      </router-link>
    </li>

    <hr class="sidebar-divider" />
    <!-- All Profiles -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-user"></i>
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
          <router-link class="collapse-item" to="/kyc">Complete KYC</router-link>
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
          <router-link class="collapse-item" to="/scheduledsavings">Scheduled Savings</router-link>
          <router-link class="collapse-item" to="/ajo">Ajo</router-link>
          <router-link class="collapse-item" to="/directsavings">Direct Savings</router-link>
          <router-link class="collapse-item" to="/savingshistory">Savings History</router-link>
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
          <router-link class="collapse-item" to="/viewinvestment">View Investments</router-link>
          <router-link class="collapse-item" to="/investmentreport">Investment Reports</router-link>
          <router-link class="collapse-item" to="/investmenthistory">View Investment History</router-link>
          <router-link class="collapse-item" to="/uploadinvestment">Upload Investment</router-link>
        </div>
      </div>
    </li>

    <!-- mAjo -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>mAjo</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/registeracm">Register a CM</router-link>
          <router-link class="collapse-item" to="/becomeacm">Become a CM</router-link>
          <router-link class="collapse-item" to="/credituser">Credit Users</router-link>
          <router-link class="collapse-item" to="/breakajosavings">Break Ajo Savings</router-link>
          <router-link class="collapse-item" to="/myajosettings">My Ajo Settings</router-link>
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
          <router-link class="collapse-item" to="/createticket">Create Ticket</router-link>
          <router-link class="collapse-item" to="/inbox">Inbox</router-link>
          <router-link class="collapse-item" to="/announcement">Announcements</router-link>
        </div>
      </div>
    </li>
    <!-- Learning Center -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#learningCenter"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Learning Center</span>
      </a>
      <div
        id="learningCenter"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/learningmaterials">Learning Materials</router-link>
        </div>
      </div>
    </li>

    <!-- Transactions -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#transactions"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Transact</span>
      </a>
      <div
        id="transactions"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/transfer">Transfer</router-link>
          <router-link class="collapse-item" to="/withdraw">Withdraw</router-link>
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

<style scoped>
@media (max-width: 767px) {
  .navbar-nav {
    margin-left: -20px !important;
  }
  .sidebar {
    width: 4.7rem !important;
  }
}
</style>