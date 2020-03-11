<template>
  <div class="justify-content-center">
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div
      v-if="mssg"
      class="alert text-center alert-primary alert-dismissible mt-2 fade show"
      role="alert"
    >
      <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <VerifyPin v-if="verified" v-on:verifyPin="verifyPin" />
      </div>
    </div>
    <button
      class="btn d-block mx-auto btn-danger"
      v-if="btnClicked"
      @click="stopSavings"
    >Stop Savings</button>
    <div v-if="msg" class="alert alert-danger alert-dismissible mt-2 fade show" role="alert">
      <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import VerifyPin from "../../../Auth/VerifyPin";
import Loader from "../Loader";
import axios from "axios";
export default {
  name: "StopSavingsForm",
  components: {
    VerifyPin,
    Loader
  },
  data() {
    return {
      verified: false,
      btnClicked: true,

      // others
      token: "",
      trans_id: "",
      user_id: "",

      msg: "",
      mssg: "",
      loading: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.btnClicked = true;
    },
    stopSavings() {
      this.btnClicked = false;
      this.verified = true;
    },
    verifyPin(pin) {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: this.user_id,
            pin: pin
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          if (res.data.status == true) {
            // Make the pay Request
            axios
              .delete(
                `https://momentum.ng/backend/api/savings/stoprecurring/${this.trans_id}`,
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                  }
                }
              )
              .then(res => {
                this.loading = false;
                if (res.data.status == true) {
                  this.mssg = res.data.message;
                } else {
                  this.msg = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
              });

            this.verifypin = false;
          } else {
            this.loading = false;
            this.msg = "Incorrect Pin";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
  }
};
</script>