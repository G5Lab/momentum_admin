<template>
  <form v-on:submit.prevent="RecureSavings" class="border p-2 my-2">
    <div class="form-group">
      <label class="h6 font-weight-bold">Enter Debit Amount</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-money"></i>
          </span>
        </div>
        <input
          type="number"
          v-model="amount"
          class="form-control"
          placeholder="Debit Amount"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <label class="h6 font-weight-bold">Select A Date To Stop</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-calendar"></i>
          </span>
        </div>
        <input
          type="date"
          v-model="maturitydate"
          class="form-control"
          placeholder="Maturity Date"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <label class="h6 font-weight-bold">Select Frequency</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-date"></i>
          </span>
        </div>
        <select required v-model="frequency" class="form-control">
          <option value="1">Daily</option>
          <option value="7">Weekly</option>
          <option value="30">Monthly</option>
        </select>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <Rave
        class="shop btn btn-primary text-white"
        :email="email"
        :amount="parseInt(amount)"
        :reference="reference"
        :rave-key="raveKey"
        :callback="callback"
        :close="close"
        :metadata="meta"
        :paymentPlan="plan"
        :customerFirstname="fname"
        :customerLastname="lname"
        paymentOptions="card,barter,account,ussd"
        hostedPayemt="1"
        customTitle="Momentum Recurrent Savings"
        currency="NGN"
        country="NG"
      >
        <i>Recure</i>
      </Rave>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Rave from "vue-ravepayment";

export default {
  name: "RecurringSavings",
  components: {
    Rave
  },
  data() {
    return {
      raveKey: "FLWPUBK_TEST-3f485a6ba24b0da67274f34f4193fcb9-X",
      plan: 2928,
      fname: "Adewale",
      lname: "Ayuba",
      // redirect: "/userdashboard",
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

      // Others
      amount: "",
      frequency: "",
      maturitydate: "",
      email: "",
      trans_id: "",
      authSecKey: "",
      token: ""
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
        response.data.tx.status == "successful" &&
        response.data.tx.chargeResponseCode === "00"
      ) {
        // const txRef = response.data.tx.txRef;

        // handle success
        axios
          .post(
            `https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/verify`,
            {
              txref: response.data.tx.txRef,
              SECKEY: this.secretKey
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            console.log(response);
            var authToken = response.data.data.card.card_tokens[0].embedtoken;

            var freq = this.frequency;
            var maturity = this.maturitydate;

            var freqency = Math.floor(freq);

            var today = new Date();
            var date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();

            var ms = new Date().getTime() + freqency * 86400000;
            var nextn = new Date(ms);
            var nextd =
              nextn.getFullYear() +
              "-" +
              (nextn.getMonth() + 1) +
              "-" +
              nextn.getDate();
            var nextdebit = new Date(nextd).toJSON().slice(0, 10);

            var date1 = new Date(date);
            var date2 = new Date(maturity);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var deductcycle = diffDays / freqency;

            var count = Math.floor(deductcycle);

            var payLoad = {
              trans_id: this.trans_id,
              useremail: response.data.data.custemail,
              amount: response.data.data.amount,
              start_date: date,
              maturity: maturity,
              nextdebit: nextdebit,
              frequency: freqency,
              count: count,
              auth_token: authToken
            };
            axios
              .post(
                "https://momentum.ng/backend/api/savings/startrecuring",
                payLoad,
                {
                  headers: {
                    Authorization: "Bearer " + this.token
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
    this.token = this.$session.get("jwt");
    this.email = this.$session.get("user").email;
    this.trans_id = this.$session.get("user").trans_id;
    axios
      .post(
        `https://momentum.ng/backend/api/users/getpaykeys`,
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
        if (res.data.status == true) {
          this.secretKey = res.data.authSecKey;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style  scoped>
.shop {
  text-transform: capitalize !important;
  max-width: 5rem;
  max-height: 2.5rem;
}
</style>