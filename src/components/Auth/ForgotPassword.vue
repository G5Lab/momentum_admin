<template>
<body>
  <div class="container pt-4">
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
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-7 col-md-10">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-3">
              <div
                style="font-size: 1.1rem; font-weight: 600"
                class="text-center py-4"
              >RESET PASSWORD</div>
              <form v-on:submit.prevent="resetPassword">
                <div class="form-group">
                  <input
                    v-model="email"
                    class="form-control p-4"
                    type="email"
                    id="email"
                    required
                    placeholder="Email Address"
                  />
                </div>
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn p-2 btn-danger btn-block my-4"
                >Continue</button>
              </form>
              <div v-if="msg" class="alert alert-warning alert-dismissible fade show" role="alert">
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
              <hr class="my-4" />
              <div class="text-center">
                Password Remembered? Kindly
                <router-link to="/login" class="text-primary mb-3">Login</router-link>
              </div>
              <div class="text-center">
                <router-link to="/register" class="text-primary">Create An Account</router-link>
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
import Loader from "./Loader";
export default {
  name: "ForgotPassword",
  components: {
    Loader
  },
  data() {
    return {
      msg: "",
      email: "",
      loading: false
    };
  },
  methods: {
    resetPassword() {
      this.$router.push("recover");
      this.loading = true;
      axios
        .post(`http://localhost:3000/api/users/forgotpassword/${this.email}`)
        .then(res => {
          this.loading = false;
          console.log(res.data);
          if (res.data.status != true) {
            this.msg = "Email Does not exist";
          } else {
            this.msg = "Email Sent";
            setTimeout(() => {
              this.$router.push("login");
            }, 2500);
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