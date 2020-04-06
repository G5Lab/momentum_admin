<template>
  <Structure page="Break Ajo">
    <div class="container">
      <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
      <div class="text-center" v-if="loading">
        <Loader />
      </div>
      <div class="row justify-content-center">
        <form
          v-if="form"
          v-on:submit.prevent="breakSavings"
          class="col-md-7 shadow border bg-white p-3"
        >
          <div class="text-center text-primary font-weight-bold h4 pt-3 pb-2">Enter Amount To Break</div>
          <p
            class="p-2 mb-3 text-center font-gray-900"
          >It is not ideal to withdraw your savings before your cycle completes. However, if it’s a case of emergency, you can break your savings (Ajo) by entering the amount you wish to withdraw.</p>
          <label for="number">Amount</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-money"></i>
              </span>
            </div>
            <input
              v-model="amount"
              type="number"
              required
              placeholder="Amount In Naira"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-danger d-block mx-auto px-3 my-2">Break</button>
        </form>
        <div v-if="verified" class="col-md-6">
          <Verify class="bg-white p-5" v-on:verifyPin="verifyPin" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Verify from "../../Auth/VerifyPin";
import Loader from "../Index/Loader";
import axios from "axios";

import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
export default {
  name: "BreakAjoSavings",
  components: {
    Structure,
    Verify,
    Loader,
    Successmsg,
    Failuremsg
  },
  data() {
    return {
      amount: "",
      form: true,
      verified: false,
      loading: false,

      token: "",
      trans_id: "",
      user_id: "",

      mssg: "",
      msg: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.form = true;
    },
    breakSavings() {
      this.verified = true;
      this.form = false;
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
            axios
              .post(
                `https://momentum.ng/backend/api/ajo/breakajo`,
                {
                  trans_id: this.trans_id,
                  amount: this.amount
                },
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
          } else {
            this.loading = false;
            this.msg = "Incorrect Pin";
            console.log(res.data);
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