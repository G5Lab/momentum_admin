<template>
<body>
  <div class="container pt-2">
    <div class="text-center d-flex justify-content-center text-white h2 pt-4 pb-2">
      <div>
        <img src="img/favi.png" width="80rem" alt />
      </div>
      <div class="mt-2">
        <p class="mt-3 d-inline-block">
          <span class="font-weight-light">omen</span>
          <span class="font-weight-bold text-gray-900">tum</span>
        </p>
      </div>
    </div>
    <div v-if="loading" class="text-center pb-3">
      <Loader />
    </div>
    <div class="row justify-content-center pb-4">
      <div class="mb-5 col-xl-8 col-lg-9 col-md-10">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-4">
              <div
                style="font-size: 1.1rem; font-weight: 600"
                class="text-center py-4"
              >CREATE AN ACCOUNT</div>
              <form class="user" v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="fullname">Full Name</label>
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
                    <label for="email">Email</label>
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
                    <label for="tel">Mobile Number</label>
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
                  <label for="referer">Referer</label>
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
                    <label for="password">Password</label>
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
                    <label for="confirmPassword">Confrim Password</label>
                    <input
                      v-model="confirmPassword"
                      required
                      type="password"
                      class="form-control p-4"
                      id="confirmPassword"
                      placeholder="Confirm Your Password"
                    />
                  </div>
                </div>
                <button
                  :disabled="loading"
                  class="btn my-4 px-3 p-2 d-block mx-auto btn-primary px-5"
                  type="submit"
                >Sign Up</button>

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
import Loader from "./Loader";
export default {
  name: "Register",
  components: {
    Loader
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
            if (result.status == true) {
              sessionStorage.setItem(
                "registrationSucces",
                JSON.stringify(result.status)
              );
              this.$router.push("welcomemessage");
            } else if (result.message == "user exists with same email") {
              this.msg = "Email already exist";
            } else if (result.message == "user exists with same number") {
              this.msg = "Phone number already exist";
            } else {
              this.msg = "Registration ins't successful";
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
  background: #0336798e;
}
</style>