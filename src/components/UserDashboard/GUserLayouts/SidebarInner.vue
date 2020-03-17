<template>
  <div>
    <!-- Sidebar -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/userdashboard"
    >
      <div class="sidebar-brand-text mx-3">
        <span class="font-weight-normal d-block">Transaction Id:</span>
        <span class="font-weight-bold">{{trans_id}}</span>
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
          <router-link class="collapse-item" to="/basicprofile">Basic Info</router-link>
          <router-link class="collapse-item" to="/updateprofile">Update Profile</router-link>
          <router-link class="collapse-item" to="/upgrademembership">Upgrade Membership</router-link>
          <router-link class="collapse-item" to="/bkinfo">Enter Bank Info</router-link>
          <router-link class="collapse-item" to="/kyc">Complete KYC</router-link>
          <router-link class="collapse-item" to="/ChangePassword">Update Password</router-link>
          <router-link class="collapse-item" to="/resetPin">Reset Pin</router-link>
        </div>
      </div>
    </li>

    <!-- Main Wallet -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#transactions"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span class="mr-1">Main</span>
        <span class="d-none d-md-inline">Wallet</span>
      </a>
      <div
        id="transactions"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/TopUpWallet">Top-Up Wallet</router-link>
          <router-link class="collapse-item" to="/transfer">Transfer Funds</router-link>
          <router-link class="collapse-item" to="/withdraw">Withdraw</router-link>
          <router-link class="collapse-item" to="/MainHistory">History</router-link>
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
          <router-link class="collapse-item" to="/SetAjoCycle">Set Ajo Cycle</router-link>
          <router-link class="collapse-item" to="/registeranagent">Register / Remove Agent</router-link>
          <router-link class="collapse-item" to="/becomeanagent">Collect Ajo</router-link>
          <!-- <router-link class="collapse-item" to="/changeanagent">Change Agent</router-link> -->
          <!-- <router-link class="collapse-item" to="/credituser">Credit Users</router-link> -->
          <router-link class="collapse-item" to="/breakajosavings">Break Ajo Savings</router-link>
          <router-link class="collapse-item" to="/AjoHistory">Ajo History</router-link>
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
          <router-link class="collapse-item" to="/TargetSavings">Target Savings</router-link>
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
          <router-link class="collapse-item" to="/uploadinvestment">Upload Investment</router-link>
          <router-link class="collapse-item" to="/investmenthistory">Investment History</router-link>
        </div>
      </div>
    </li>

    <!-- Cooming Soon  -->
    <!-- <li class="nav-item">
      <router-link class="route" to="/marketplace">
        <a
          class="nav-link"
          data-toggle="collapse"
          data-target="#"
          aria-expanded
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-folder"></i>
          <span class="mx-2">Market Place</span>
        </a>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="route" to="/hirepurchase">
        <a
          class="nav-link"
          data-toggle="collapse"
          data-target="#"
          aria-expanded
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-folder"></i>
          <span class="mx-1">Hire Purchase</span>
        </a>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="route" to="/loan">
        <a
          class="nav-link"
          data-toggle="collapse"
          data-target="#"
          aria-expanded
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-folder"></i>
          <span>Loan</span>
        </a>
      </router-link>
    </li>-->

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
          <router-link class="collapse-item" to="/sentmessages">Sent Messages</router-link>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "SidebarInner",
  data() {
    return {
      trans_id: ""
    };
  },
  created() {
    this.trans_id = this.$session.get("user").trans_id;
  }
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
.route:hover {
  text-decoration: none !important;
}
</style>