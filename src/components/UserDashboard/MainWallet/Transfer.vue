
<template>
  <Structure page="Transfer Fund">
    <div class="container-fluid mb-4">
      <div>
        <div class="text-center" v-if="loading">
          <Loader />
        </div>
        <div class="row justify-content-center mb-3">
          <form
            v-if="form"
            v-on:submit.prevent="registeragent"
            class="col-md-10 bg-white p-0 shadow col-lg-8 border"
          >
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Transfer to a User</h6>
            </div>
            <div class="card-body">
              <p class="p-md-2 mb-3">
                <span
                  class="d-block"
                >You can transfer funds to other users. Transfer occurs from your Main Wallet.</span>
              </p>

              <label for="number">Enter Reciever Id</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  v-model="reciever_id"
                  type="number"
                  required
                  placeholder="Reciever Id"
                  class="form-control"
                />
              </div>
              <label for="number">Enter Amount To Transfer</label>
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
                  placeholder="Amount in naira"
                  class="form-control"
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3 mx-auto d-block px-4 text-center mb-3"
              >Transfer</button>
            </div>
          </form>
          <div v-if="verified" class="col-md-6">
            <Verify class="bg-white p-5" v-on:verifyPin="verifyPin" />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-7">
            <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
            <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Verify from "../../Auth/VerifyPin";
import Loader from "../MAjo/Loader";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";

import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "Transfer",
  components: {
    Structure,
    Verify,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      reciever_id: "",
      amount: "",
      form: true,
      verified: false,

      token: "",
      trans_id: "",
      user_id: "",

      mssg: "",
      msg: "",
      loading: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.form = true;
    },
    registeragent() {
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
                `https://momentum.ng/backend/api/wallet/transfer`,
                {
                  trans_id: this.trans_id,
                  reciever_id: this.reciever_id,
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
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }
  }
};
</script>