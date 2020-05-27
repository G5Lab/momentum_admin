<template>
<body class="bg-gray-200">
  <div class="container pt-2">
    <AuthLogo />
    <div v-if="loading" class="text-center pb-2">
      <Loader />
    </div>
    <div class="row justify-content-center">
      <div class="mb-2 col-xl-7 col-lg-8 col-md-9">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-4">
              <div
                style="font-size: 1.2rem; font-weight: 600"
                class="text-center py-3"
              >CREATE AN ACCOUNT</div>
              <form class="user" v-on:submit.prevent="onSubmit">
                <div class="form-group">
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
                    <input
                      v-model="register.mobile"
                      required
                      class="form-control p-4"
                      id="tel"
                      placeholder="Mobile Number"
                      name="mobile"
                      minlength="11"
                      maxlength="11"
                    />
                  </div>
                </div>
                <div class="form-group">
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
                    <div class="input-group">
                      <input
                        v-model="register.passwordd"
                        required
                        :type="passwordFieldType1"
                        class="form-control p-4"
                        id="password"
                        placeholder="Enter Password"
                        name="passwordd"
                        minlength="8"
                      />
                      <div class="input-group-append">
                        <span
                          v-if="showPasswordButton1"
                          @click="showPassword1"
                          class="input-group-text btn btn-outline-secondary"
                        >
                          <i class="fa fa-eye-slash"></i>
                        </span>
                        <span
                          v-if="showMaskButton1"
                          @click="showMask1"
                          class="input-group-text btn btn-outline-secondary"
                        >
                          <i class="fa fa-eye"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-group">
                      <input
                        v-model="confirmPassword"
                        required
                        :type="passwordFieldType2"
                        class="form-control p-4"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        minlength="8"
                      />
                      <div class="input-group-append">
                        <span
                          v-if="showPasswordButton2"
                          @click="showPassword2"
                          class="input-group-text btn btn-outline-secondary"
                        >
                          <i class="fa fa-eye-slash"></i>
                        </span>
                        <span
                          v-if="showMaskButton2"
                          @click="showMask2"
                          class="input-group-text btn btn-outline-secondary"
                        >
                          <i class="fa fa-eye"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-check texxt-center">
                  <input type="checkbox" required class="form-check-input" id="exampleCheck1" />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >I agree to the Terms and Conditions</label>
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
    <div class="text-center pb-5 pt-2">
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
      loading: false,
      passwordFieldType1: "password",
      showPasswordButton1: true,
      showMaskButton1: false,

      passwordFieldType2: "password",
      showPasswordButton2: true,
      showMaskButton2: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
    },
    showPassword1() {
      this.passwordFieldType1 = "text";
      this.showPasswordButton1 = false;
      this.showMaskButton1 = true;
    },
    showMask1() {
      this.passwordFieldType1 = "password";
      this.showPasswordButton1 = true;
      this.showMaskButton1 = false;
    },
    showPassword2() {
      this.passwordFieldType2 = "text";
      this.showPasswordButton2 = false;
      this.showMaskButton2 = true;
    },
    showMask2() {
      this.passwordFieldType2 = "password";
      this.showPasswordButton2 = true;
      this.showMaskButton2 = false;
    },
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