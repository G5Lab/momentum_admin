<template>
<body>
  <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Momentum</a>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="text-center">
      <h1 class="my-4 h2">Registration Successful</h1>
    </div>
    <div class="container mt-4">
      <div class="row justify-content-between">
        <div class="border col-md-6">
          <div class="text-center text-gray-900 h3 pt-4">About The App</div>
          <div
            class="card-body pb-0"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia pariatur earum impedit veniam. Voluptatum quas quasi illo error maxime, accusamus optio aliquam eveniet quidem, nesciunt pariatur magnam esse ea.</div>
          <div
            class="card-body"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia pariatur earum impedit veniam. Voluptatum quas quasi illo error maxime, accusamus optio aliquam eveniet quidem, nesciunt pariatur magnam esse ea.</div>
        </div>
        <div class="border bg-white col-md-6 py-auto">
          <h2 v-if="msg.length>1" class="text-danger py-1 font-weight-normal text-center h2">{{msg}}</h2>
          <div class="text-center text-gray-900 h3 py-3">Set A Pin</div>
          <!-- Set Pin Form -->
          <form v-on:submit.prevent="updatePin">
            <div class="form-group">
              <input
                required
                class="form-control"
                v-model="pin1"
                type="text"
                placeholder="Enter Four Digit Pin"
              />
            </div>
            <div class="form-group">
              <input
                required
                v-model="pin2"
                class="form-control"
                type="text"
                placeholder=" Confirm Pin"
              />
            </div>

            <button
              type="submit"
              v-bind:disabled="pin1.length > 4 || pin2.length > 4"
              class="btn my-3 mt-4 btn-primary mx-auto"
            >Set Pin</button>
            <div class="text-center my-2">
              Haven't registered. Register
              <router-link class="text-primary mb-3" to="/register">Here</router-link>
              <span class="mx-1">|</span>
              <router-link to="/ForgotPassword" class="text-danger">
                <i>Forgot Password?</i>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import axios from "axios";
export default {
  name: "Welcome",
  data() {
    return {
      pin1: "",
      pin2: "",
      msg: ""
    };
  },
  // https://momentum.ng/backend online
  methods: {
    updatePin() {
      if (
        this.pin1 == this.pin2 &&
        this.pin1.length == 4 &&
        this.pin2.length == 4
      ) {
        axios
          .post("https://momentum.ng/backend/api/users/updatepin", {
            user_id: this.$session.get("user")._id,
            pin: this.pin2
          })
          .then(res => {
            console.log(res.data);
            if (res.data.status == true) {
              this.$session.start();
              this.$session.set("jwt", res.data.token);
              this.$session.set("trans_id", res.data.user.trans_id);
              this.$session.set("user", res.data.user);
              this.$session.set("wallet", res.data.wallet);
              this.$router.push("userdashboard");
            } else if (res.data.status == false) {
              if (res.data.message == "Password Incorrect") {
                this.msg = "Password Incorrect";
                setTimeout(() => {
                  this.msg = "";
                }, 2000);
              } else {
                this.msg = "User Not Found";
                setTimeout(() => {
                  this.msg = "";
                }, 2000);
              }
            } else {
              console.log("Else occured");
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else if (this.pin1 != this.pin2) {
        this.msg = "Pins do not match";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      } else {
        this.msg = "Pin Should be 4 digit";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.nav-item {
  color: white !important;
}
body {
  color: black;
}
.btn {
  display: block;
  text-align: center;
}
</style>