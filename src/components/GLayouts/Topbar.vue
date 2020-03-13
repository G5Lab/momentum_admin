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
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{name}}</span>
          <span class="rounded-circle">
            <i class="rounded-circle fa fa-user"></i>
          </span>
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right mt-3 shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <routerLink class="dropdown-item" to="/basicprofile">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </routerLink>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      name: ""
    };
  },
  methods: {},
  created() {
    this.name = this.$session.get("user").fullname;
  }
};
</script>

<style scoped>
.mylogo {
  width: 100%;
  height: 100%;
  text-align: center;
}
.link:hover {
  text-decoration: none;
}
@media screen and (max-width: 992px) {
  .mylogo {
    font-size: 1.3rem;
  }
}
.fa {
  font-size: 1.3rem;
  color: black;
}
</style>