<template>
  <Structure page="Top-Up Main Wallet">
    <div class="container-fluid mt-3 d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card shadow justify-content-center mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Save Here!</h6>
          </div>
          <div class="card-body">
            <form v-on:submit.prevent class="register bg-white">
              <div class="form-group">
                <label for="amount">Amount To Save</label>
                <input
                  type="number"
                  required
                  v-model="amount"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>
              <Rave
                class="shop btn btn-primary text-white"
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
            </form>
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