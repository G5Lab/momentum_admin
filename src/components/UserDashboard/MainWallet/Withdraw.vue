<template>
  <Structure page="Withdraw">
    <div class="container-fluid">
      <div class="text-center my-2" v-if="loading">
        <Loader />
      </div>
      <div
        v-if="mssg"
        class="alert text-center alert-primary alert-dismissible my-2 fade show"
        role="alert"
      >
        <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
        <button
          type="button"
          @click="closeMsg"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Withdraw From Any Wallet</h6>
        </div>
        <div class="card-body">
          <form v-if="form" @submit.prevent="swap" class="register bg-white">
            <div class="form-group">
              <label for="name">Amount</label>
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
              :disabled="loading || nobk"
              type="submit"
              class="btn btn-primary mt-3 d-block mx-auto text-center mb-3"
            >Withdraw</button>
          </form>
          <div v-if="verified" class="col-md-6">
            <Verify class="bg-white p-5" v-on:verifyPin="verifyPin" />
          </div>

          <div
            v-if="msg"
            class="alert text-center alert-danger alert-dismissible mt-1 fade show"
            role="alert"
          >
            <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
            <button
              type="button"
              @click="closeMsg"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="nobk"
        class="alert text-center alert-danger alert-dismissible mt-2 fade show"
        role="alert"
      >
        <span class="text-center d-inline-block font-weight-bolder">{{nobk}}</span>
        <button
          type="button"
          @click="closeNobk"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
import Verify from "../../Auth/VerifyPin";
import axios from "axios";

export default {
  name: "Withdraw",
  components: {
    Structure,
    Loader,
    Verify
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
              console.log(res.data);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.loading = false;
        this.msg = "Insufficient funds";
      }
    }
  },
  created() {
    this.loading = true;
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;

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
        if (!this.user_recp_code) {
          this.nobk = "Enter Your Bank Details To Withdraw";
        }
        this.paystackAuthPubKey = res.data.paystackAuthPubKey;
        this.paystackAuthSecKey = res.data.paystackAuthSecKey;
        this.user_recp_code = res.data.user_recp_code;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>