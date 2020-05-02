<template>
  <Structure page="Business Loan">
    <div class="container-fluid">
      <div class="d-flex justify-content-center">
        <div class="col-md-10 border p-3 pb-md-5 text-gray-900">
          <p class="py-2 mb-2">
            <span class="font-weight-bold">Business-Loan :</span>
            Disbursement is subject to approval. Member must have been saving consistently for up
            to 4months. A sustainable guarantor is required – guarantor must be an active member of Momentum,
            with asset on momentum in excess of applicant request amount.
          </p>
          <p class="my-0">
            <span class="font-weight-bold">Loan Tenure:</span>
            10 Weeks max.
          </p>

          <p class="my-2">
            <span class="font-weight-bold">Maximum Amount Allowable:</span>
            Twice the balance on the applicant savings.
          </p>
          <p class="mb-3">
            <span class="font-weight-bold">Processing FEE:</span>
            &#8358;2,000 or 10% amount requested whichever that is higher.
          </p>
          <p class="m-1">
            <span class>Repayment shall be through direct credit/ deposit to the loan wallet.</span>
          </p>
          <p
            class="m-1"
          >System shall generate weekly Demand Note to help member pay back their loan easily in 10 installment.</p>
          <div class="text-muted my-2">
            <b class="text-dark">NOTE:</b>
            Prompt payment of loan will raise the borrower’s credit score and impact on credit limit. Credit Score and
            Loan Limit Cap – in the first instance the loan limit shall be 20k, 50k, 100k then twice Savings Balance; this
            limit shall be adjusted based on prompt repayment history
          </div>
          <div class="text-center">
            <i class="fa fa-arrow-down h2 text-primary d-inline-block text-center scroll"></i>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-5">
        <div class="col-md-9">
          <Loader class="text-center d-block" v-if="loading" />
          <div class="d-flex justify-content-center">
            <VerifyPin class="my-2 shadow col-md-9" v-if="verifypin" v-on:verifyPin="verifyPin" />
          </div>
          <div v-if="mode" class="card m-0 shadow mb-4">
            <h6 class="m-0 card-header py-3 font-weight-bold text-primary">- Create a Business Loan</h6>
            <div class="card-body">
              <form class="bg-white p-0" v-on:submit.prevent="BusinessLoan">
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
                      v-model="businessLoan.amount"
                      class="form-control"
                      placeholder="Loan Amount"
                      required
                    />
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label>Repayment Frequency</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-clock-o"></i>
                      </span>
                    </div>
                    <select required v-model="businessLoan.duration" class="form-control">
                      <option value disabled selected>Select</option>
                      <option value="7">Weekly</option>
                      <option value="30">Monthly</option>
                    </select>
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
  name: "BusinessLoan",
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

      businessLoan: {
        amount: "",
        duration: ""
      },
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
      this.businessLoan.amount = "";
      this.businessLoan.duration = "";
    },
    BusinessLoan() {
      this.mode = false;
      this.verifypin = true;
    },
    getBusinessLoan() {
      // Make the pay Request
      axios
        .post(
          `https://momentum.ng/backend/api/wallet/loanapply`,
          {
            trans_id: this.trans_id,
            amount: this.businessLoan.amount,
            duration: this.businessLoan.duration
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
            this.loading = false;
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
            this.getBusinessLoan();
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