<template>
  <Structure page="Top-Up mWallet">
    <div class="container-fluid">
      <Loader v-if="loading" class="d-block text-center my-4" />
      <div v-if="arrive" class="row justify-content-center mb-4">
        <div class="col-md-10 bg-white p-0 shadow col-lg-8 border">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Fund your mWallet here!</h6>
          </div>
          <div class="card-body">
            <p class="p-md-2 mb-3">
              <span
                class="d-block"
              >Top-up funds in your Main Wallet and use the funds for Savings, Investments, transfer and other Services.</span>
            </p>
            <form v-on:submit.prevent>
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
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import Rave from "vue-ravepayment";
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "TopUpWallet",
  components: {
    Structure,
    Rave,
    Loader
  },
  data() {
    return {
      raveKey: "FLWPUBK-7492f6c786edc0035ec95c5cb64c4f38-X",
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
      amount: "",
      trans_id: "",

      arrive: false,
      loading: true
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
      if (
        response.tx.status == "successful" &&
        response.tx.chargeResponseCode === "00"
      ) {
        axios
          .post(
            `https://momentum.ng/backend/api/wallet/directbankpayment`,
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
    Calls.getUsers().then(res => {
      this.fname = res.fullname;
      this.email = res.email;
      this.trans_id = res.trans_id;
      this.loading = false;
      this.arrive = true;
    });
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    if (this.trans_id == null) {
      Calls.reloadPage();
    }
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