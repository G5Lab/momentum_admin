<template>
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
        <input required v-model="pin2" class="form-control" type="text" placeholder=" Confirm Pin" />
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
</template>
<script>
import axios from "axios";
export default {
  name: "setPin",
  data() {
    return {
      pin1: "",
      pin2: "",
      msg: ""
    };
  },
  methods: {
    updatePin() {
      const token = this.$session.get("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      if (
        this.pin1 == this.pin2 &&
        this.pin1.length == 4 &&
        this.pin2.length == 4
      ) {
        axios
          .post(
            `https://momentum.ng/backend/api/users/updatepin`,
            {
              user_id: this.$session.get("user")._id,
              pin: this.pin2
            },
            {
              headers
            }
          )
          .then(res => {
            console.log(res.data);
            console.log("Good");
            location.reload();
          })
          .catch(err => {
            console.log(err);
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
  }
};
</script>
<style scoped>
.btn {
  display: block;
  text-align: center;
}
</style>