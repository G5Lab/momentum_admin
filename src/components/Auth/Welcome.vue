<template>
<body>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Momentum</a>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="my-4 h2">Registration Successful</h1>
    </div>
    <div class="container mt-4">
      <div class="row justify-content-between">
        <div class="border col-md-6">
          <div class="text-center text-gray-900 h3 pt-4">About The App</div>
          <div class="card-body pb-0">
            Welcome to Momentum, your number one source for Business offers. We're dedicated to providing you the very best of
            <span
              class="font-weight-bold text-primary"
            >Investment, Savings and Ajo Plans.</span>
          </div>
          <div class="card-body py-2">
            Founded in 2020 by
            <span class="text-primary font-weight-bold">SuccessDrive,</span> has come a long way from its beginnings in
            <span
              class="text-primary font-weight-bold"
            >Ikeja, Lagos.</span> When
            <span class="font-weight-bold">Mr Akinlade</span> first started out his passion for Investments, Savings and Ajo, it drive clients interest to start their own business and come up with innovative business ideas. We now serve customers Nationwide and are thrilled that we're able to define our objective.
          </div>
          <div class="card-body pt-1">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            <br />
            <br />Sincerely,
            <br />
            <span class="font-weight-bold text-primary">Momentum</span>
          </div>
        </div>
        <div class="border bg-white col-md-6 py-auto">
          <h2 v-if="msg.length>1" class="text-danger py-1 font-weight-normal text-center h2">{{msg}}</h2>
          <div class="text-center text-gray-900 h3 py-3">Login</div>
          <!-- Set Pin Form -->
          <form class="user" v-on:submit.prevent="onLogin">
            <div class="form-group">
              <input
                required
                v-model="login.loginid"
                class="form-control form-control-user"
                type
                id="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                required
                v-model="login.password"
                class="form-control form-control-user"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary btn-user mb-4 px-5 d-block mx-auto">Login</button>
            <hr />
            <div class="text-center text-gray-850 my-2 mt-4 mb-0">
              <router-link to="/" class="d-block mb-5 text-info">
                <i>Go Back To Home</i>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import axios from "axios";
export default {
  name: "Welcome",
  data() {
    return {
      login: {
        loginid: "",
        password: ""
      },
      pin1: "",
      pin2: "",
      msg: ""
    };
  },
  // https://momentum.ng/backend online
  methods: {
    onLogin() {
      this.loading = true;
      // https://momentum.ng/backend
      axios
        .post("https://momentum.ng/backend/api/users/login", this.login)
        .then(res => {
          if (res.data.status == true) {
            this.$session.start();
            this.$session.set("jwt", res.data.token);
            this.$session.set("user", res.data.user);
            this.$session.set("wallet", res.data.wallet);
            this.loading = false;
            setTimeout(() => {
              sessionStorage.clear();
              this.$router.push("login");
            }, 900000);
            this.$router.push("userdashboard");
          } else if (res.data.status == false) {
            this.loading = false;
            if (res.data.message == "Password Incorrect") {
              this.msg = "Password Incorrect";
              setTimeout(() => {
                this.msg = "";
              }, 2500);
            } else {
              this.msg = "User Not Found";
              setTimeout(() => {
                this.msg = "";
              }, 2500);
            }
          } else {
            console.log("Else occured");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {}
};
</script>

<style scoped>
.nav-item {
  color: white !important;
}
body {
  color: black;
}
.btn {
  display: block;
  text-align: center;
}
</style>