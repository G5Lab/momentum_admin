<template>
<body class="bg-gradient-primary">
  <Nav name="Welcome To Momentum" />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden py-3 border-0 shadow-lg my-5">
          <div class="card-body py-3">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-">
                <img src="/img/login.jpg" alt class="w-100 h-100" />
              </div>
              <div class="fixed" v-if="loading">
                <Loader />
              </div>
              <div class="bg-white col-md-12 col-lg-6 py-auto">
                <h2
                  v-if="msg.length > 1"
                  class="text-danger mx-0 py-2 bg-white text-center display-4"
                >{{msg}}</h2>
                <div class="text-center text-gray-900 h4 py-4">Login Board</div>
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

                  <button type="submit" class="btn btn-primary btn-user mb-4 btn-block">Login</button>
                  <hr />
                  <div class="text-center text-gray-850 my-2 mt-4 mb-0">
                    <router-link class="text-primary mb-3" to="/register">Create An Account</router-link>
                    <br />
                    <router-link to="/ForgotPassword" class="d-block mb-5 text-danger">
                      <i>Forgot Password?</i>
                    </router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>


<script>
import axios from "axios";
import Nav from "./Nav";
import Loader from "./Loader";

export default {
  name: "Login",
  components: {
    Nav,
    Loader
  },
  data() {
    return {
      login: {
        loginid: "",
        password: ""
      },
      msg: "",
      loading: false
    };
  },
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
  }
};
</script>


<style scoped>
body {
  min-height: 100vh;
}
.fixed {
  position: fixed;
  top: 27%;
  right: 39%;
  z-index: 2;
}
.display-4 {
  font-weight: 700;
  font-size: 3.4rem;
  position: fixed;
}
@media (max-width: 767px) {
  .fixed {
    top: 30%;
    right: 30%;
  }
  .display-4 {
    font-weight: 600;
    font-size: 2.1rem;
    position: fixed;
  }
}
@media (max-width: 360px) {
  .fixed {
    top: 30%;
    right: 14%;
  }
  .display-4 {
    font-weight: 600;
    font-size: 2.1rem;
    position: fixed;
  }
}
</style>