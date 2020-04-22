<template>
  <Structure page="Quick Loan">
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <div class="col-md-9 border p-3 pb-md-5">
          <p
            class="font-weight-bold text-center lead"
          >Quick Loan is disbursed instantly (Loan Wallet debited and Main Wallet Credited).</p>
          <p class="m-1">
            <span class="font-weight-bold">Loan Tenure:</span>
            30Days max.
          </p>

          <p class="m-1">
            <span class="font-weight-bold">Maximum Amount Allowable:</span> 50% of Savings Wallet Balance and/or Term Deposit Balance.
          </p>
          <p class="m-1">
            <span class="font-weight-bold">Processing FEE:</span> &#8358;1,000 or 5% amount requested whichever that is higher.
          </p>
          <div class="text-center">
            <i class="fa fa-arrow-down h2 text-primary d-inline-block text-center scroll"></i>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-5">
        <div class="col-md-8">
          <Loader class="text-center d-block" v-if="loading" />
          <div class="d-flex justify-content-center">
            <VerifyPin class="my-2 shadow col-md-9" v-if="verifypin" v-on:verifyPin="verifyPin" />
          </div>
          <div v-if="mode" class="card shadow m-0 mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Create a quick loan</h6>
            </div>

            <div class="card-body">
              <form class="register bg-white" v-on:submit.prevent="QuickLoan">
                <div class="form-group mb-4">
                  <label>Enter Amount</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas text-primary fa-hand-holding-usd"></i>
                      </span>
                    </div>
                    <input
                      type="number"
                      v-model="amount"
                      class="form-control"
                      placeholder="Loan Amount"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-3 btn-block text-center mb-3"
                >Request</button>
              </form>
            </div>
          </div>
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import VerifyPin from "../../Auth/VerifyPin";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";
import Calls from "../../../Service/Calls";

import axios from "axios";
export default {
  name: "QuickLoan",
  components: {
    Structure,
    Loader,
    VerifyPin,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      user_id: "",
      trans_id: "",
      token: "",

      amount: "",

      msg: "",
      mssg: "",

      verifypin: false,
      mode: true,
      loading: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.mode = true;
      this.verifypin = false;
    },
    QuickLoan() {
      this.mode = false;
      this.verifypin = true;
    },
    getQuickLoan() {
      axios
        .post(
          `https://momentum.ng/backend/api/wallet/quickloan`,
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
            // Make the pay Request
            this.getQuickLoan();
          } else {
            this.loading = false;
            this.msg = "Incorrect Pin";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.user_id = Calls.getUser_id();
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();

    if (this.trans_id == "") {
      Calls.reloadPage();
    }
  }
};
</script>


<style scoped>
.scroll {
  width: 30px;
  animation: move 1s infinite alternate;
  font-size: 1.5rem;
}
@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>