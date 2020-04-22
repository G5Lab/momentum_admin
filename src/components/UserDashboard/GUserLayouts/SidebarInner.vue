<template>
  <div>
    <!-- Sidebar -->
    <router-link
      class="sidebar-brand d-flex align-items-center justify-content-center"
      to="/userdashboard"
    >
      <div class="sidebar-brand-text mx-3">
        <span class="font-weight-normal p d-block">Transaction Id:</span>
        <span class="font-weight-bold p">{{trans_id}}</span>
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
        <span>mProfile</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white p-2 collapse-inner rounded">
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
    <hr class="sidebar-divider d-md-block" />

    <!-- Main Wallet -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#transactions"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-wallet"></i>
        <!-- <span class>Main</span> -->
        <span class>mWallet</span>
      </a>
      <div
        id="transactions"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white p-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/TopUpWallet">Top-Up Wallet</router-link>
          <router-link class="collapse-item" to="/transfer">Transfer Funds</router-link>
          <router-link class="collapse-item" to="/withdraw">Withdraw</router-link>
          <router-link class="collapse-item" to="/MainHistory">History</router-link>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-md-block" />

    <!-- mAjo -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fa-fw fas fa-handshake"></i>
        <span>mAjo</span>
      </a>
      <div
        id="collapseUtilities"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white p-1 collapse-inner rounded">
          <router-link class="collapse-item" to="/SetAjoCycle">Set Ajo Cycle</router-link>
          <router-link class="collapse-item" to="/registeranagent">Register Agent</router-link>

          <router-link class="collapse-item" to="/removeagent">Remove Agent</router-link>
          <router-link class="collapse-item" to="/becomeanagent">Collect Ajo</router-link>
          <router-link class="collapse-item" to="/breakajosavings">Break Ajo Savings</router-link>
          <router-link class="collapse-item" to="/AjoHistory">Ajo History</router-link>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-md-block" />

    <!-- mSAVE -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapsePage"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-clipboard-list"></i>
        <span>mSave</span>
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
    <hr class="sidebar-divider d-md-block" />

    <!-- mINVEST -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-coins"></i>
        <span>mInvest</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/viewinvestment">All Investments</router-link>
          <!-- <router-link class="collapse-item" to="/investmentreport">Investment Reports</router-link> -->
          <!-- <router-link class="collapse-item" to="/myInvestments">My Investments</router-link> -->
          <!-- <router-link class="collapse-item" to="/uploadinvestment">Upload Investment</router-link> -->
          <router-link class="collapse-item" to="/investmenthistory">Investment History</router-link>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-md-block" />

    <!-- Cooming Soon  -->
    <!--  <li class="nav-item">
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
    </li>-->
    <!--mLoan -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#mLoan"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-hand-holding-usd"></i>
        <span>mLoan</span>
      </a>
      <div
        id="mLoan"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/quickloan">Quick Loan</router-link>
          <router-link class="collapse-item" to="/businessloan">Business Loan</router-link>
          <router-link class="collapse-item" to="/loanHistory">History</router-link>
        </div>
      </div>
    </li>

    <hr class="sidebar-divider d-md-block" />

    <!-- Pay Bills -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#mBills"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-money"></i>
        <span>mBills</span>
      </a>
      <div
        id="mBills"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/airtime_topup">Airtime Topup</router-link>
          <!-- <router-link class="collapse-item" to="/data_subs">Data Subscriptions</router-link> -->
          <!-- <router-link class="collapse-item" to="/cable_tv">Cable Tv</router-link> -->
          <!-- <router-link class="collapse-item" to="/electricity">Electricity</router-link> -->
        </div>
      </div>
    </li>

    <hr class="sidebar-divider d-md-block" />

    <!-- College Of Money -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#learningCenter"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-user-graduate"></i>
        <!-- <i class="fas fa-fw fa-school"></i> -->
        <span>
          mCollege
          <!-- <span class="d-none d-md-inline">of Money</span> -->
        </span>
      </a>
      <div
        id="learningCenter"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/learningmaterials">Materials</router-link>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-md-block" />

    <!-- Support -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        data-toggle="collapse"
        data-target="#collapseUtilitiesp"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i class="fas fa-fw fa-support"></i>
        <span>mSupport</span>
      </a>
      <div
        id="collapseUtilitiesp"
        class="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/createticket">Report To Admin</router-link>
          <router-link class="collapse-item" to="/inbox">Inbox</router-link>
          <router-link class="collapse-item" to="/announcement">Announcements</router-link>
          <router-link class="collapse-item" to="/sentmessages">Sent Messages</router-link>
        </div>
      </div>
    </li>
    <hr class="sidebar-divider d-md-block" />
  </div>
</template>

<script>
import Calls from "../../../Service/Calls";
export default {
  name: "SidebarInner",
  data() {
    return {
      trans_id: ""
    };
  },
  created() {
    this.trans_id = Calls.getTrans_Id();
  }
};
</script>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
</style>


<style scoped>
@media (max-width: 765px) {
  .nav-link,
  .nav-link i,
  .nav-link span {
    font-size: 2px !important;
    margin-right: 1rem;
  }
}
.nav-link,
.nav-link .fas,
.nav-link .fa,
.nav-link span {
  font-size: 1.04rem !important;
}
.collapse-item {
  font-size: 1rem;
  margin: -2px !important;
  padding: -2rem !important;
}
hr {
  margin: 0 !important;
}
.collapse-inner {
  padding: 0.5rem !important;
}
.route {
  text-decoration: none;
}
</style>