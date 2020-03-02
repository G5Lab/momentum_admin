<template>
  <Rave
    :email="email"
    :amount="amount"
    :reference="reference"
    :rave-key="raveKey"
    :callback="callback"
    :close="close"
    :metadata="meta"
    :redirectUrl="redirect"
    :paymentPlan="plan"
    :customerFirstname="fname"
    :customerLastname="lname"
    paymentOptions="card,barter,account,ussd"
    hostedPayemt="1"
    customTitle="Momentum Direct Savings"
    currency="NGN"
    country="NG"
  >
    <i>{{name}}</i>
  </Rave>
</template>
<script type="text/javascript">
import axios from "axios";
import Rave from "vue-ravepayment";
export default {
  components: {
    Rave
  },
  props: {
    email: {
      type: String
    },
    amount: {},
    name: {
      type: String
    }
  },
  data() {
    return {
      raveKey: "FLWPUBK_TEST-3f485a6ba24b0da67274f34f4193fcb9-X",
      plan: 2928,
      fname: "Adewale",
      lname: "Ayuba",
      redirect: "/userdashboard",
      meta: [
        {
          metaname: "school",
          metavalue: "high school"
        }
      ]
      /* sub: [
        {
          id: "1324"
        },
        {
          id: "1221"
        }
      ] */
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
          `https://momentum.ng/backend/api/savings/directbankpayment`,
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
          console.log("Saved");
        })
        .catch(err => {
          console.log(err);
        });
    },
    close: function() {
      console.log("Payment closed");
    }
  }
};
</script>
