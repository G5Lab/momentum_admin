<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="border bg-white col-md-6 py-auto">
        <div class="text-center text-gray-900 h4 pb-2 pt-3">Set A Pin</div>
        <!-- Set Pin Form -->
        <form v-on:submit.prevent="updatePin">
          <p
            class="text-center"
          >For security reason, we will be requesting a four digit pin on every transaction you will be making on this application</p>
          <p class="text-center font-weight-bold">
            Pls Keep Transaction Pin
            Confidential
          </p>
          <div class="form-group">
            <input
              maxlength="4"
              required
              class="form-control"
              v-model="pin1"
              type="password"
              placeholder="Set A Four Digit Pin"
            />
          </div>
          <div class="form-group">
            <input
              required
              maxlength="4"
              v-model="pin2"
              class="form-control"
              type="password"
              placeholder=" Confirm Pin"
            />
          </div>
          <Loader v-if="loading" class="text-center d-block" />
          <button
            type="submit"
            v-bind:disabled="pin1.length > 4 || pin2.length > 4"
            class="btn my-3 mt-4 btn-primary mx-auto"
          >Set Pin</button>
          <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
          <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Calls from "../../../Service/Calls";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";
import Loader from "../MAjo/Loader";
import axios from "axios";
export default {
  name: "setPin",
  components: {
    Failuremsg,
    Successmsg,
    Loader
  },
  data() {
    return {
      loading: false,
      pin1: "",
      pin2: "",
      msg: "",

      token: "",
      user_id: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
    },
    updatePin() {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      };

      if (
        this.pin1 == this.pin2 &&
        this.pin1.length == 4 &&
        this.pin2.length == 4
      ) {
        this.loading = true;
        axios
          .post(
            `https://momentum.ng/backend/api/users/updatepin`,
            {
              user_id: this.user_id,
              pin: this.pin2
            },
            {
              headers
            }
          )
          .then(res => {
            this.loading = false;
            this.mssg = res.data.message;
            setTimeout(() => {
              location.reload();
            }, 1000);
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.pin1 != this.pin2) {
        this.msg = "Pins do not match";
      } else {
        this.msg = "Pin Should be 4 digit";
      }
    }
  },
  created() {
    this.token = Calls.getJwt();
    this.user_id = Calls.getUser_id();

    if (this.token == "") {
      Calls.reloadPage();
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