<template>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show card active"
      id="pills-home"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div class="card-body">
        <form @submit.prevent="startInvestWallet">
          <p
            class="card-title text-dark text-center m-0 p-0 mb-1 font-weight-bold h5"
          >Start Investing</p>
          <p class="text-center text-danger">
            <span class="font-weight-bold">Note:</span>
            Investment price will be deducted from your mWallet.
          </p>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Number of units</label>
              <input
                type="number"
                required
                @keyup="updateAmount"
                class="form-control"
                v-model="unit_purchased"
                min="1"
                :max="investmentDetails.unit_available"
                placeholder="Enter units to buy"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Amount</label>
              <input
                type="number"
                :value="amount"
                class="form-control"
                placeholder="Amount"
                disabled
              />
            </div>
          </div>
          <Loader class="d-block text-center my-2" v-if="mWalletLoading" />
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssgWallet" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msgWallet" />
          <button
            type="submit"
            :disabled="mWalletLoading"
            class="btn btn-dark d-block mx-auto p-2 px-5"
          >Invest</button>
        </form>
      </div>
    </div>
    <div
      class="tab-pane fade card"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div class="card-body">
        <form @submit.prevent>
          <p
            class="card-title text-dark text-center m-0 p-0 mb-1 font-weight-bold h5"
          >Start Investing</p>
          <p class="text-center text-danger mx-0 px-0">
            <span class="font-weight-bold">Note:</span>
            Investment price will be deducted from your Bank Account.
          </p>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Number of units</label>
              <input
                type="number"
                required
                @keyup="checkUnitNum"
                class="form-control"
                v-model="unit_purchasedbank"
                min="1"
                :max="investmentDetails.unit_available"
                placeholder="Enter units to buy"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Amount</label>
              <input
                type="number"
                :value="amountbank"
                class="form-control"
                placeholder="Amount"
                disabled
              />
            </div>
          </div>
          <Loader class="d-block text-center my-2" v-if="bankLoading" />
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssgBank" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msgBank" />
          <div v-if="btnRave" class="m-0 p-0">
            <Rave
              class="shop d-block m-0 mx-auto p-0 btn btn-dark text-white"
              :email="email"
              :amount="parseInt(amountbank)"
              :reference="reference"
              :rave-key="raveKey"
              :callback="callback"
              :close="close"
              :metadata="meta"
              :paymentPlan="plan"
              :customerFirstname="fname"
              paymentOptions="card,barter,account,ussd"
              hostedPayemt="1"
              customTitle="Momentum Investment"
              currency="NGN"
              country="NG"
            >
              <i class="m-0 p-0">Invest</i>
            </Rave>
          </div>
          <button
            v-if="button2"
            type="submit"
            @click="throwErrorMsg"
            class="btn btn-dark d-block mx-auto p-2 px-5"
          >Invest</button>
          <Failuremsg :msg="msg2" v-on:closeMsg="closeMsg" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Failuremsg from "../../../GUserLayouts/Failuremsg";
import Successmsg from "../../../GUserLayouts/Successmsg";
import Loader from "../../../MAjo/Loader";

import Rave from "vue-ravepayment";
import axios from "axios";
export default {
  name: "Form",
  props: ["email", "token", "trans_id", "investmentDetails"],
  data() {
    return {
      // Rave Starts
      raveKey: "FLWPUBK_TEST-3f485a6ba24b0da67274f34f4193fcb9-X",
      plan: 2928,
      fname: "",
      meta: [
        {
          metaname: "Momentum",
          metavalue: "Momentun"
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
      // Rave Ends

      // Payment
      // For  mWallet
      mssgWallet: "",
      msgWallet: "",
      unit_purchased: "",
      amount: "",
      mWalletLoading: false,

      // For Bank
      msg2: "",
      button2: true,
      btnRave: false,
      unit_purchasedbank: "",
      amountbank: "",
      bankLoading: false,
      mssgBank: "",
      msgBank: ""
    };
  },
  components: {
    Failuremsg,
    Successmsg,
    Rave,
    Loader
  },
  methods: {
    closeMsg() {
      this.msg2 = "";
      this.mssgWallet = "";
      this.msgWallet = "";
      this.mssgBank = "";
      this.msgBank = "";
      this.unit_purchasedbank = "";
      this.amountbank = "";
      this.amount = "";
      this.unit_purchased = "";
    },
    updateAmount() {
      if (this.unit_purchased == null) {
        this.amount == "";
      } else {
        if (this.unit_purchased != "") {
          var value =
            parseInt(this.investmentDetails.unit_investment) *
            parseInt(this.unit_purchased);
          this.amount = value;
        } else {
          this.amount = "";
        }
      }
    },
    startInvestWallet() {
      // startinvesting_bank for bank
      this.mWalletLoading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/investments/startinvesting`,
          {
            trans_id: this.trans_id,
            investment_id: this.investmentDetails._id,
            investment_title: this.investmentDetails.title,
            unit_cost: this.investmentDetails.unit_investment,
            units_purchased: this.unit_purchased,
            amount: this.amount,
            min_percentage: this.investmentDetails.min_return_projection,
            max_percentage: this.investmentDetails.min_return_projection,
            duration: this.investmentDetails.investment_cycle,
            start_date: this.investmentDetails.start_date,
            end_date: this.investmentDetails.end_date
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          this.mWalletLoading = false;
          if (res.data.status == true) {
            this.mssgWallet = res.data.message;
            this.unit_purchasedbank = "";
            this.amountbank = "";
          } else {
            this.msgWallet = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    startInvestBank() {
      this.bankLoading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/investments/startinvesting_bank`,
          {
            trans_id: this.trans_id,
            investment_id: this.investmentDetails._id,
            investment_title: this.investmentDetails.title,
            unit_cost: this.investmentDetails.unit_investment,
            units_purchased: this.unit_purchasedbank,
            amount: this.amountbank,
            min_percentage: this.investmentDetails.min_return_projection,
            max_percentage: this.investmentDetails.min_return_projection,
            duration: this.investmentDetails.investment_cycle,
            start_date: this.investmentDetails.start_date,
            end_date: this.investmentDetails.end_date
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          this.bankLoading = false;
          if (res.data.status == true) {
            this.mssgBank = res.data.message;
          } else {
            this.msgBank = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    throwErrorMsg() {
      this.msg2 = `The min units of shares you can buy is `;
    },
    checkUnitNum() {
      if (this.unit_purchasedbank == null) {
        this.amountbank == "";
      } else {
        if (this.unit_purchasedbank != "") {
          var value =
            parseInt(this.investmentDetails.unit_investment) *
            parseInt(this.unit_purchasedbank);
          this.amountbank = value;
        } else {
          this.amountbank = "";
        }
      }

      // change Button To Ravebutton
      if (
        parseInt(this.unit_purchasedbank) >= 1 &&
        parseInt(this.unit_purchasedbank) <=
          parseInt(this.investmentDetails.unit_available)
      ) {
        this.btnRave = true;
        this.button2 = false;
      } else {
        this.btnRave = false;
        this.button2 = true;
      }
    },
    callback: function(response) {
      if (
        response.tx.status == "successful" &&
        response.tx.chargeResponseCode === "00"
      ) {
        this.startInvestBank();
      }
    },
    close: function() {
      alert("Payment Closed");
    }
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
  }
};
</script>