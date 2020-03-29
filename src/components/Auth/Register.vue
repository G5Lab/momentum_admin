<template>
<body class="bg-gray-200">
  <div class="container pt-2">
    <AuthLogo />
    <div v-if="loading" class="text-center pb-3">
      <Loader />
    </div>
    <div class="row justify-content-center pb-4">
      <div class="mb-5 col-xl-7 col-lg-8 col-md-9">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-4">
              <div
                style="font-size: 1.2rem; font-weight: 600"
                class="text-center py-3"
              >CREATE AN ACCOUNT</div>
              <form class="user" v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <!-- <label for="fullname">Full Name</label> -->
                  <input
                    v-model="register.fullname"
                    required
                    type="text"
                    class="form-control p-4"
                    placeholder="Full Name"
                    id="fullname"
                    name="fullname"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <!-- <label for="email">Email</label> -->
                    <input
                      v-model="register.email"
                      required
                      type="email"
                      placeholder="example@gmail.com"
                      class="form-control p-4"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="col-sm-6">
                    <!-- <label for="tel">Mobile Number</label> -->
                    <input
                      v-model="register.mobile"
                      required
                      type="number"
                      class="form-control p-4"
                      id="tel"
                      placeholder="Telephone Number"
                      name="mobile"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="referer">Referer</label> -->
                  <input
                    v-model="register.referer"
                    type="text"
                    class="form-control p-4"
                    id="referer"
                    placeholder="Refere Id"
                    name="referer"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <!-- <label for="password">Password</label> -->
                    <input
                      v-model="register.passwordd"
                      required
                      type="password"
                      class="form-control p-4"
                      id="password"
                      placeholder="Enter Password"
                      name="passwordd"
                    />
                  </div>
                  <div class="col-sm-6">
                    <!-- <label for="confirmPassword">Confrim Password</label> -->
                    <input
                      v-model="confirmPassword"
                      required
                      type="password"
                      class="form-control p-4"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <button
                  :disabled="loading"
                  class="btn my-4 px-3 p-2 d-block mx-auto btn-primary px-5"
                  type="submit"
                >Sign Up</button>

                <div v-if="msg">
                  <Failuremsg :msg="msg" />
                </div>
                <hr />
                <div class="text-center">
                  Already have an account?
                  <router-link to="/login" class="text-primary">Login</router-link>
                  <br />
                  <router-link to="/ForgotPassword" class="d-block mb-3 text-danger">
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
</body>
</template>

<script>
import axios from "axios";
import Loader from "../UserDashboard/MAjo/Loader";
import AuthLogo from "./AuthLogo";
import Failuremsg from "../UserDashboard/GUserLayouts/Failuremsg";

export default {
  name: "Register",
  components: {
    Loader,
    AuthLogo,
    Failuremsg
  },
  data() {
    return {
      register: {
        fullname: "",
        email: "",
        mobile: "",
        passwordd: "",
        referer: ""
      },
      confirmPassword: "",
      msg: "",
      loading: false
    };
  },
  // https://momentum.ng/backend/api/users/register online
  methods: {
    onSubmit() {
      this.loading = true;
      if (this.confirmPassword != this.register.passwordd) {
        this.loading = false;
        this.msg = "Passwords do not Match";
      } else {
        axios
          .post("https://momentum.ng/backend/api/users/register", this.register)
          .then(res => {
            this.loading = false;
            const result = res.data;
            console.log(result);
            if (result.status == true) {
              sessionStorage.setItem(
                "registrationSucces",
                JSON.stringify(result.status)
              );
              this.$router.push("welcomemessage");
            } else {
              this.msg = result.message;
            }
          })
          .catch(err => {
            console.error(err);
          });
        // console.log(res.data);
        this.register = {};
      }
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