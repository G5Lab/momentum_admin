<template>
<body class="bg-gray-200">
  <div class="container pt-4 px-3">
    <AuthLogo />
    <Loader v-if="loading" class="text-center my-3 d-block" />

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
                <div class="input-group my-3">
                  <input
                    required
                    v-model="login.password"
                    :type="passwordFieldType"
                    class="form-control p-4"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                  <div class="input-group-append">
                    <span
                      v-if="showPasswordButton"
                      @click="showPassword"
                      class="input-group-text btn btn-outline-secondary"
                    >
                      <i class="fa fa-eye-slash"></i>
                    </span>
                    <span
                      v-if="showMaskButton"
                      @click="showMask"
                      class="input-group-text btn btn-outline-secondary"
                    >
                      <i class="fa fa-eye"></i>
                    </span>
                  </div>
                </div>
                <input
                  :disabled="loading"
                  type="submit"
                  value="Login"
                  class="btn btn-primary mb-3 p-2 btn-block"
                />
                <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
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
      loading: false,
      passwordFieldType: "password",
      showPasswordButton: true,
      showMaskButton: false
    };
  },

  methods: {
    closeMsg() {
      this.msg = "";
    },
    showPassword() {
      this.passwordFieldType = "text";
      this.showPasswordButton = false;
      this.showMaskButton = true;
    },
    showMask() {
      this.passwordFieldType = "password";
      this.showPasswordButton = true;
      this.showMaskButton = false;
    },
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