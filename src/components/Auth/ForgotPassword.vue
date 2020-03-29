<template>
<body class="bg-gray-200">
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
              <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
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
import Loader from "../UserDashboard/MAjo/Loader";
import AuthLogo from "./AuthLogo";
import Failuremsg from "../UserDashboard/GUserLayouts/Failuremsg";
export default {
  name: "ForgotPassword",
  components: {
    Loader,
    AuthLogo,
    Failuremsg
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
      this.loading = true;
      axios
        .post(`https://momentum.ng/backend/api/users/forgotpasscode`, {
          email: this.email
        })
        .then(res => {
          this.loading = false;
          if (res.data.status == false) {
            this.msg = res.data.message;
          } else {
            sessionStorage.setItem("reset", JSON.stringify("recover"));
            sessionStorage.setItem("email", JSON.stringify(this.email));
            this.$router.push("/recover");
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