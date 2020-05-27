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
              <Successmsg :mssg="mssg" v-on:closeMsg="closeMssg" />
              <div
                style="font-size: 1.4rem; font-weight: 600"
                class="text-center py-2 pb-4"
              >Set a new password</div>
              <form class v-on:submit.prevent="resetPassword">
                <div class="form-group">
                  <input
                    v-model="password"
                    class="form-control p-4"
                    type="password"
                    required
                    placeholder="New password"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="password2"
                    class="form-control p-4"
                    type="password"
                    required
                    placeholder="Confirm password"
                  />
                </div>
                <button type="submit" class="btn btn-danger p-2 btn-block my-4">Continue</button>
              </form>
              <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
              <hr />
              <div class="text-center">
                <router-link to="/login" @click.native="clearSession" class="text-danger">Cancel</router-link>
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
import Failuremsg from "../UserDashboard/GUserLayouts/Failuremsg";
import Successmsg from "../UserDashboard/GUserLayouts/Successmsg";
import Loader from "../UserDashboard/MAjo/Loader";
export default {
  name: "Initial",
  components: {
    AuthLogo,
    Failuremsg,
    Successmsg,
    Loader
  },
  data() {
    return {
      msg: "",
      mssg: "",
      password: "",
      password2: "",
      email: "",
      loading: false
    };
  },
  methods: {
    clearSession() {
      sessionStorage.clear();
    },
    closeMsg() {
      this.msg = "";
      this.password = "";
      this.password2 = "";
    },
    closeMssg() {
      setTimeout(() => {
        this.clearSession();
        this.$router.push("/");
      }, 500);
    },
    resetPassword() {
      if (this.password != this.password2) {
        this.msg = "Unmatched Password";
      } else {
        this.loading = true;
        axios
          .post(`https://momentum.ng/backend/api/users/setnewpassword`, {
            email: this.email,
            password: this.password2
          })
          .then(res => {
            this.loading = false;
            if (res.data.status == false) {
              this.msg = res.data.message;
            } else {
              this.mssg = res.data.message;
            }
          })
          .catch(err => {
            this.loading = false;
            this.msg = "Error occured";
            console.error(err);
          });
      }
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