<template>
  <Structure page="Top-Up Main Wallet">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col-md-10 col-lg-8">
            <div class="shadow card">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">- Save Money Here!</h6>
              </div>
              <div class="card-body">
                <p class="p-2 mb-2">
                  <span
                    class="d-block"
                  >Top up funds in your Main Wallet and use the funds for savings, investments or transfer to your bank account</span>
                </p>
                <form v-on:submit.prevent class="register bg-white">
                  <label for="amount">Amount To Save</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-money"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      required
                      v-model="amount"
                      class="form-control"
                      placeholder="Amount"
                    />
                  </div>
                  <div>
                    <Rave
                      class="shop d-block mx-auto btn btn-primary text-white"
                      :email="email"
                      :amount="parseInt(amount)"
                      :reference="reference"
                      :rave-key="raveKey"
                      :callback="callback"
                      :close="close"
                      :metadata="meta"
                      :redirectUrl="redirect"
                      :paymentPlan="plan"
                      :customerFirstname="fname"
                      paymentOptions="card,barter,account,ussd"
                      hostedPayemt="1"
                      customTitle="Momentum Top-Up Main Wallet"
                      currency="NGN"
                      country="NG"
                    >
                      <i>Top Wallet</i>
                    </Rave>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Rave from "vue-ravepayment";
import axios from "axios";
export default {
  name: "TopUpWallet",
  components: {
    Structure,
    Rave
  },
  data() {
    return {
      raveKey: "FLWPUBK_TEST-3f485a6ba24b0da67274f34f4193fcb9-X",
      plan: 2928,
      fname: "",
      redirect: "/userdashboard",
      meta: [
        {
          metaname: "school",
          metavalue: "high school"
        }
      ],
      sub: [
        {
          id: "1324"
        },
        {
          id: "1221"
        }
      ],
      email: "",
      amount: ""
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },

  methods: {
    callback: function(response) {
      const token = this.$session.get("jwt");
      const trans_id = this.$session.get("user").trans_id;
      console.log(response);
      if (
        response.data.tx.status == "successful" &&
        response.data.tx.chargeResponseCode === "00"
      ) {
        axios
          .post(
            `https://momentum.ng/backend/api/wallet/directbankpayment`,
            {
              trans_id: trans_id,
              amount: this.amount
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            console.log(res.data);
            alert(res.data.message);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    close: function() {
      console.log("Payment closed");
    }
  },
  created() {
    this.email = this.$session.get("user").email;
    this.fname = this.$session.get("user").fullname;
  }
};
</script>

<style scoped>
.shop {
  text-transform: capitalize !important;
  max-width: 9rem;
  max-height: 2.5rem;
}
</style>