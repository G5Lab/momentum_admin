<template>
<body class="bg-gradient-primary">
  <Nav />
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <h2
                  v-if="msg.length > 1"
                  class="text-primary pt-5 py-2 font-weight-bold text-center h2"
                >PAssword Change Sussefully</h2>
                <div class="p-4">
                  <div class="text-center">
                    <h1 class="h4 py-3 text-gray-900 mb-1">Choose a new password</h1>
                    <p
                      class="mb-4 mt-0"
                    >Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation marks.</p>
                  </div>
                  <form class="user" v-on:submit.prevent="resetPassword">
                    <div class="form-group">
                      <input
                        v-model="password"
                        class="form-control form-control-user"
                        type="password"
                        required
                        placeholder="New password"
                      />
                    </div>
                    <button type="submit" class="btn btn-danger btn-user btn-block my-4">Continue</button>
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
    </div>
  </div>
</body>
</template>

<script>
import axios from "axios";
import Nav from "./Nav";
export default {
  name: "Initial",
  components: {
    Nav
  },
  data() {
    return {
      msg: "",
      password: ""
    };
  },
  methods: {
    resetPassword() {
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
};
</script>

<style scoped>
body {
  min-height: 100vh;
}
</style>