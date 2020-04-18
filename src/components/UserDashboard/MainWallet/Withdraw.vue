<template>
  <Structure page="Withdraw">
    <div class="container-fluid">
      <div>
        <div class="text-center my-2" v-if="loading">
          <Loader />
        </div>
        <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
        <div class="row justify-content-center mb-4">
          <div class="col-md-10 bg-white p-0 shadow col-lg-8 border">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Withdraw From Main Wallet</h6>
            </div>
            <div class="card-body">
              <p class="mb-3">
                <span
                  class="d-block text-center"
                >You can make withdrawal from your wallet to your bank account.</span>
              </p>
              <form v-if="form" @submit.prevent="swap" class="register bg-white">
                <label for="name">Amount</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-money"></i>
                    </span>
                  </div>
                  <input
                    required
                    type="number"
                    v-model="amount"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Amount To Withdraw"
                  />
                </div>
                <button
                  :disabled="nobk"
                  type="submit"
                  class="btn btn-primary mt-3 d-block mx-auto text-center mb-3"
                >Withdraw</button>
              </form>
              <div v-if="verified" class="col-md-6">
                <Verify class="bg-white p-5" v-on:verifyPin="verifyPin" />
              </div>
            </div>
            <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
          </div>
        </div>
        <Failuremsg :msg="nobk" v-on:closeMsg="closeNobk" />
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import Verify from "../../Auth/VerifyPin";
import axios from "axios";

import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";

import Calls from "../../../Service/Calls";

export default {
  name: "Withdraw",
  components: {
    Structure,
    Loader,
    Verify,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      amount: "",

      main_balance: "",
      paystackAuthPubKey: "",
      paystackAuthSecKey: "",
      user_recp_code: "",

      form: true,
      verified: false,

      mssg: "",
      msg: "",
      nobk: "",
      loading: false,

      token: "",
      trans_id: "",
      user_id: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.form = true;
      this.nobk = "";
    },
    closeNobk() {
      this.nobk = "";
      setTimeout(() => {
        this.$router.push("bkinfo");
      }, 300);
    },
    swap() {
      this.verified = true;
      this.form = false;
    },
    verifyPin(pin) {
      this.loading = true;
      if (this.amount <= this.main_balance) {
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
              var webAddress = "https://api.paystack.co/transfer";
              axios
                .post(
                  `${webAddress}`,
                  {
                    source: "balance",
                    reason: "Calm down",
                    amount: this.amount * 100,
                    recipient: this.user_recp_code
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + this.paystackAuthSecKey
                    }
                  }
                )
                .then(res => {
                  if (res.data.status == true) {
                    axios
                      .post(
                        `https://momentum.ng/backend/api/wallet/withdraw`,
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
                    this.msg = res.data.message;
                  }
                })
                .catch(err => {
                  console.log(err);
                  this.msg = "An Error Occured Try Again";
                });
            } else {
              this.loading = false;
              this.msg = "Incorrect Pin";
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.loading = false;
        this.msg = "Insufficient funds";
      }
    },
    getmWalletBalance() {
      axios
        .get(
          `https://momentum.ng/backend/api/fetchdata/wallet/${this.trans_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          this.main_balance = res.data.wallet.main_balance;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.loading = true;

    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }

    this.getmWalletBalance();

    axios
      .post(
        `https://momentum.ng/backend/api/users/verifypaypinweb`,
        {
          trans_id: this.trans_id
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
        // console.log(res.data);

        this.paystackAuthPubKey = res.data.paystackAuthPubKey;
        this.paystackAuthSecKey = res.data.paystackAuthSecKey;
        this.user_recp_code = res.data.user_recp_code;
        if (!this.user_recp_code) {
          this.nobk = "Enter Your Bank Details To Withdraw";
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>