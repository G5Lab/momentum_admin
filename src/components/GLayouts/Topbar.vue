<template>
  <nav class="navbar navbar-expand navbar-light static-top bg-white topbar mb-4 shadow">
    <button
      id="sidebarToggleTop"
      @click="$emit('hideSidebar')"
      class="btn d-md-none btn-link rounded-circle mr-3"
    >
      <i class="text-center fa fa-bars"></i>
    </button>
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>
      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-capitalize text-gray-600">{{name}}</span>
          <span class="rounded-circle">
            <i class="rounded-circle fa fa-user"></i>
          </span>
          <!-- <img
            class="img-profile rounded-circle"
            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          />-->
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right mt-3 shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <routerLink class="dropdown-item" to="/basicprofile">
            <i class="fas fa-user fa-fw mr-2 black"></i>
            Profile
          </routerLink>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-fw mr-2 black"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import Calls from "../../Service/Calls";
export default {
  name: "Topbar",
  data() {
    return {
      name: ""
    };
  },
  created() {
    Calls.getUsers().then(res => {
      this.name = res.fullname;
      if (this.fullname == "") {
        location.reload();
      }
    });
  }
};
</script>

<style scoped>
.link:hover {
  text-decoration: none;
}

.fa {
  font-size: 1.3rem;
  color: black;
}
</style>