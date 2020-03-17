<template>
<body>
  <div class="container pt-4">
    <AuthLogo />
    <div v-if="loading" class="text-center pb-3">
      <Loader />
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-7 col-md-10">
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
                <div
                  v-if="msg"
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{{msg}}</strong>
                  <button
                    type="button"
                    @click="closeMsg"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
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
      <span class="mr-3">
        <router-link to="/termsCondition" class="text-light">
          <i>Terms &#38; Conditions</i>
        </router-link>
      </span>
      <!-- <span>
        <router-link to="#" class="mx-3 text-light">
          <i>Help</i>
        </router-link>
      </span>-->
      <span>
        <router-link to="/privacyPolicy" class="text-light">
          <i>Privacy Policy</i>
        </router-link>
      </span>
    </div>
  </div>
</body>
</template>


<script>
import axios from "axios";
import Loader from "../Auth/Loader";
import AuthLogo from "./AuthLogo";
export default {
  name: "Login",
  components: {
    Loader,
    AuthLogo
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
      // https://momentum.ng/backend
      this.loading = true;
      axios
        .post("https://momentum.ng/backend/api/users/login", this.login)
        .then(res => {
          this.loading = false;
          if (res.data.status == true) {
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
  background: #0336798e;
}
</style>