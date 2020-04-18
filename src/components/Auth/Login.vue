<template>
<body class="bg-gray-200">
  <div class="container pt-4 px-3">
    <AuthLogo />
    <div v-if="loading" class="text-center pb-3">
      <Loader />
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-6 col-md-10">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-3">
              <div
                style="font-size: 1.1rem; font-weight: 600"
                class="text-center py-4"
              >LOGIN TO YOUR DASHBOARD</div>
              <form v-on:submit.prevent="onLogin">
                <div class="form-group">
                  <input
                    required
                    v-model="login.loginid"
                    class="form-control p-4"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div class="form-group my-4">
                  <input
                    required
                    v-model="login.password"
                    class="form-control p-4"
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <input
                  :disabled="loading"
                  type="submit"
                  value="Login"
                  class="btn btn-primary mb-3 p-2 btn-block"
                />
                <div v-if="msg">
                  <Failuremsg :msg="msg" />
                </div>
                <hr />
                <div class="text-center text-gray-850 my-2 mt-4 mb-0">
                  Don't have an account?
                  <router-link class="text-primary mb-3" to="/register">Sign up</router-link>
                  <br />
                  <router-link to="/ForgotPassword" class="d-block mb-4 text-danger">
                    <i>Forgot Password?</i>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-3">
      <span>
        <router-link to="/aboutMomentum" class="text-dark">
          <i>About Us</i>
        </router-link>
      </span>
      <span class="mx-4">
        <router-link to="/termsCondition" class="text-dark">
          <i>Terms &#38; Conditions</i>
        </router-link>
      </span>

      <span>
        <router-link to="/privacyPolicy" class="text-dark">
          <i>Privacy Policy</i>
        </router-link>
      </span>
    </div>
  </div>
</body>
</template>


<script>
import axios from "axios";
import Loader from "../UserDashboard/MAjo/Loader";
import AuthLogo from "./AuthLogo";
import Failuremsg from "../UserDashboard/GUserLayouts/Failuremsg";

export default {
  name: "Login",
  components: {
    Loader,
    AuthLogo,
    Failuremsg
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
      axios
        .post("https://momentum.ng/backend/api/users/login", this.login)
        .then(res => {
          this.loading = false;
          if (res.data.status == true) {
            sessionStorage.setItem("userId", res.data.user._id);
            sessionStorage.setItem("trans_id", res.data.user.trans_id);
            sessionStorage.setItem("jwt", res.data.token);
            this.$session.start();
            this.$session.set("jwt", res.data.token);
            this.$session.set("user", res.data.user);
            this.$session.set("wallet", res.data.wallet);
            setTimeout(() => {
              sessionStorage.clear();
              this.$router.push("login");
            }, 900000);
            this.$router.push("userdashboard");
          } else if (res.data.status == false) {
            if (res.data.message == "Password Incorrect") {
              this.msg = "Error: The Password You Enterd Is Incorrect.";
            } else {
              this.msg =
                "Error: The email address you entered is does not match any user. ";
            }
          } else {
            console.log("Else occured");
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    closeMsg() {
      this.msg = "";
    }
  }
};
</script>


<style scoped>
body {
  min-height: 100vh;
  color: black;
}
</style>