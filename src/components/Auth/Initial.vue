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
              >Choose a new password</div>
              <p
                class="mb-4 text-justify"
              >Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation marks.</p>

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
              <hr />
              <div class="text-center">
                <router-link to="/ForgotPassword" class="text-primary">Didn't get a code?</router-link>
                <span class="mx-2">||</span>
                <router-link to="/login" class="text-primary">Cancel</router-link>
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
export default {
  name: "Initial",
  components: {
    AuthLogo
  },
  data() {
    return {
      msg: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    resetPassword() {
      if (this.password != this.password2) {
        this.msg = "Unmatched Password";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      } else {
        axios
          .patch(
            `http://localhost:3000/api/users/resetpassword/${sessionStorage.getItem(
              "emailpassupdate"
            )}`,
            { password: this.password }
          )
          .then(res => {
            if (
              res.data.status == true &&
              res.data.msg == "Password Updated Successfully"
            ) {
              this.msg = "Password Updated successfully";
              setTimeout(() => {
                this.$router.push("login");
              }, 2000);
            } else {
              this.msg = "Email Does not exist";
              setTimeout(() => {
                this.msg = "";
              }, 1500);
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
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