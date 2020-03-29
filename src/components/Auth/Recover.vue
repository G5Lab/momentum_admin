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
                style="font-size: 1.4rem; font-weight: 600"
                class="text-center py-3"
              >Enter Security Code</div>
              <p class="mb-4 text-center">Enter the PIN sent to your Email to continue.</p>
              <form class="user" v-on:submit.prevent="resetPassword">
                <div class="form-group">
                  <input
                    v-model="pin"
                    class="form-control p-4"
                    type="number"
                    required
                    placeholder="Enter Code"
                  />
                </div>
                <button type="submit" class="btn p-2 btn-danger btn-block my-4">Continue</button>
              </form>
              <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
              <hr />
              <div class="text-center">
                <router-link
                  to="/ForgotPassword"
                  @click.native="clearSession"
                  class="text-primary"
                >Didn't get a code?</router-link>
                <span class="mx-2">||</span>
                <router-link to="/login" @click.native="clearSession" class="text-primary">Cancel</router-link>
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
import AuthLogo from "./AuthLogo";
import axios from "axios";
import Loader from "../UserDashboard/Msave/Loader";
import Failuremsg from "../UserDashboard/GUserLayouts/Failuremsg";
export default {
  name: "Recover",
  components: {
    AuthLogo,
    Loader,
    Failuremsg
  },
  data() {
    return {
      loading: false,
      msg: "",
      email: "",
      pin: ""
    };
  },
  methods: {
    clearSession() {
      sessionStorage.clear();
    },
    closeMsg() {
      this.msg = "";
    },
    resetPassword() {
      this.loading = true;
      axios
        .post(`https://momentum.ng/backend/api/users/resetpincode`, {
          pin: this.pin,
          email: this.email
        })
        .then(res => {
          console.log(res.data);
          this.loading = false;
          if (res.data.status == false) {
            this.msg = res.data.message;
          } else {
            sessionStorage.setItem("reset", JSON.stringify("initial"));
            this.$router.push("initial");
          }
        })
        .catch(err => {
          this.loading = false;
          console.error(err);
          this.msg = "Error occured";
        });
    }
  },
  created() {
    this.email = JSON.parse(sessionStorage.getItem("email"));
  }
};
</script>


<style scoped>
body {
  min-height: 100vh;
  color: black;
}
</style>
