<template>
  <Structure page="Upgrade Membership">
    <div class="container-fluid mt-4">
      <div>
        <div class="row justify-content-center">
          <div class="card-body shadow col-md-12 col-xs-12 col-lg-10 mb-4">
            <div class="py-1">
              <div class="bg-light">
                <p class="text-center text-uppercase font-weight-bold h4 mb-1">MEMBERSHIP</p>
                <p class="text-center lead mb-4">Membership For Momentum Is In Three Categories</p>
                <div class="p">
                  <div class="d-flex">
                    <div class="fa fa-check-square-o mx-3 my-auto"></div>
                    <div>
                      <span class="font-weight-bold">Free Membership</span>
                      (free for life) Features include: Saving, BillPay, FundTransfer,, Support, MyProfile, Refer &#38; Invite, Announcement. Once you create an account you automatically become a basic member.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="accordion" class="mt-2">
              <!-- Basic Member -->
              <div class="border mb-2">
                <a href="#collapes3" data-parent="#accordion" data-toggle="collapse">
                  <div class="p-2 mb-2 text-dark">
                    <i class="fa fa-shield mr-3 lead"></i>
                    <span class="font-weight-bold">Become a Basic Member</span>
                  </div>
                </a>
                <div class="border bg-light m-2 p p-2 collapse" id="collapes3">
                  <div class="d-flex my-3">
                    <div v-if="level < 4" class="fa fa-square-o mx-3 my-auto"></div>
                    <div v-if="level >= 4" class="fa fa-check-square-o mx-3 my-auto"></div>
                    <div>
                      <span class="font-weight-bold">Basic Membership</span>
                      <!--  (&#8358;
                      2,500 / Year) Features include Basic + Investment, Loan, Hire Purchase, and Referral.-->
                      gets full access to all features of the app (Activation Fee: &#8358;2,000)
                    </div>
                  </div>
                  <div v-if="level >= 4" class="row justify-content-center">
                    <p
                      class="text-center font-weight-bolder text-uppercase bg-primary p-2 text-white col-md-7 p lead"
                    >You Are A Basic Member</p>
                  </div>
                  <p v-if="level < 4" class="text-center p">
                    Basic Membership Upgrade Costs
                    <span class="ml-1 font-weight-bold">&#8358;2,000</span>
                  </p>
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <div v-if="loading1" class="my-1 text-center">
                        <Loader />
                      </div>
                      <VerifyPin v-if="verifyBasic" v-on:verifyPin="verifyBasicPin" />
                    </div>
                  </div>
                  <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg1" />
                  <Failuremsg v-on:closeMsg="closeMsg" :msg="msg1" />
                  <div v-if="level < 4">
                    <div class="d-flex justify-content-center" v-if="button1">
                      <button @click="becomeBasic" class="btn btn-primary">Become Premium</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Shareholder -->
              <div class="border mb-2">
                <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                  <div class="p-2 mb-2 text-dark">
                    <i class="fa fa-star-o mr-3 lead"></i>
                    <span class="font-weight-bold">Become a Shareholder</span>
                  </div>
                </a>
                <div class="border m-2 p-2 p collapse" id="collapse4">
                  <div class="d-flex my-3">
                    <div v-if="level <= 4" class="fa fa-square-o mx-3 my-auto"></div>
                    <div v-if="level >= 10" class="fa fa-check-square-o mx-3 my-auto"></div>
                    <div>
                      <span class="font-weight-bold">Shareholder Membership</span>

                      <!-- (&#8358;
                      50,000 for 3 years) Features include Standard + Community Leader, + Share in 25% of Momentum Profit (we have created 3,000 unit @ 50k)-->
                      gets full access to all features of the app plus Ecosystem Profit Share (Minimum
                      Share Acquisition: &#8358;20,000)
                    </div>
                  </div>
                  <p v-if="level >= 10" class="text-center p">You Are A Shareholder Member</p>
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <div v-if="loading2" class="my-1 text-center">
                        <Loader />
                      </div>
                      <VerifyPin v-if="verifyPro" v-on:verifyPin="verifyProPin" />
                    </div>
                  </div>
                  <form v-if="level < 10" v-on:submit.prevent class="p-2 border">
                    <label for="amount">Number Of Shares To Buy</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fa fa-pencil"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        v-on:keyup="checkUnitNum"
                        v-model="unit"
                        class="form-control"
                        placeholder="Enter Units Of Shares"
                      />
                    </div>
                    <div v-if="btnRave">
                      <Rave
                        class="shop d-block mx-auto px-0 btn btn-primary text-white"
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
                        <i>Buy Shares</i>
                      </Rave>
                    </div>
                    <div v-if="level < 10">
                      <div class="d-flex mt-2 justify-content-center" v-if="button2">
                        <button @click="throwErrorMsg" class="btn btn-primary">Buy Shares</button>
                      </div>
                    </div>
                  </form>
                  <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg2" />
                  <Failuremsg v-on:closeMsg="closeMsg" :msg="msg2" />
                </div>
              </div>

              <!-- Enterprise Agency Partner -->
              <div class="border mb-2">
                <a href="#collapes5" data-parent="#accordion" data-toggle="collapse">
                  <div class="p-2 mb-2 text-dark">
                    <i class="fa fa-star mr-3 lead"></i>

                    <span class="font-weight-bold">Become an Enterprise Agency / Partner</span>
                  </div>
                </a>
                <div class="border bg-light m-2 p p-2 collapse" id="collapes5">
                  <!--  <div class="d-flex my-3">
                <div v-if="level < 4" class="fa fa-square-o mx-3 my-auto"></div>
                <div v-if="level >= 4" class="fa fa-check-square-o mx-3 my-auto"></div>
                <div>
                  <span class="font-weight-bold">Basic Membership</span>
                  gets full access to all features of the app (Activation Fee: &#8358;2000)
                </div>
                  </div>-->
                  <div class="row justify-content-center">
                    <p
                      class="text-center font-weight-bolder text-uppercase bg-primary p-2 text-white col-md-7 p lead"
                    >COMING SOON</p>
                  </div>
                  <!--  <p v-if="level < 4" class="text-center p">
                Premium Membership Upgrade Costs
                <span class="ml-1 font-weight-bold">&#8358;2,500</span>
                  </p>-->
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <div v-if="loading1" class="my-1 text-center">
                        <Loader />
                      </div>
                      <VerifyPin v-if="verifyBasic" v-on:verifyPin="verifyBasicPin" />
                    </div>
                  </div>
                  <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg1" />
                  <Failuremsg v-on:closeMsg="closeMsg" :msg="msg1" />
                  <div v-if="level < 4">
                    <div class="d-flex justify-content-center" v-if="button1">
                      <button @click="becomeBasic" class="btn btn-primary">Become Premium</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import VerifyPin from "../../Auth/VerifyPin";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
import Rave from "vue-ravepayment";
import Loader from "../MAjo/Loader";
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";

import Calls from "../../../Service/Calls";

export default {
  name: "UpgradeMembership",
  components: {
    Structure,
    VerifyPin,
    Loader,
    Successmsg,
    Failuremsg,
    Rave
  },
  data() {
    return {
      raveKey: "FLWPUBK_TEST-3f485a6ba24b0da67274f34f4193fcb9-X",
      plan: 2928,
      fname: "",
      redirect: "/upgrademembership",
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

      // Rave Ends

      verifyBasic: false,
      button1: true,
      verifyPro: false,
      button2: true,
      btnRave: false,

      msg1: "",
      mssg1: "",
      msg2: "",
      mssg2: "",
      loading1: false,
      loading2: false,

      unit: "",

      token: "",
      trans_id: "",
      user_id: "",
      fullname: "",
      level: ""
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
    resestSession() {
      axios
        .get(`https://momentum.ng/backend/api/users/${this.user_id}`)
        .then(res => {
          // Reset Values
          this.trans_id = res.data.trans_id;
          this.user_id = res.data._id;
          this.fullname = res.data.fullname;
          this.email = res.data.email;
          this.fname = res.data.fullname;
          this.level = res.data.level;

          this.verifyBasic = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkUnitNum() {
      var value = parseInt(this.unit);
      if (value >= 2000) {
        this.btnRave = true;
        this.button2 = false;
        this.amount = value * 10;
      } else {
        this.btnRave = false;
        this.button2 = true;
      }
    },
    throwErrorMsg() {
      this.msg2 = "The min units of shares you can buy is 2000";
    },
    callback: function(response) {
      if (
        response.tx.status == "successful" &&
        response.tx.chargeResponseCode === "00"
      ) {
        axios
          .post(
            `https://momentum.ng/backend/api/wallet/buyshares`,
            {
              trans_id: this.trans_id,
              amount: this.amount,
              unit: this.unit
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
              this.resestSession();
              this.mssg = res.data.message;
            } else {
              this.msg2 = res.data.message;
            }
          })
          .catch(err => {
            console.log(err);
            this.msg2 = "An Error Occured";
          });
      }
    },
    close: function() {
      alert("Payment Closed");
    },
    closeMsg() {
      this.msg1 = "";
      this.mssg1 = "";
      this.msg2 = "";
      this.mssg2 = "";
    },
    becomeBasic() {
      this.verifyBasic = true;
      this.button1 = false;
    },
    verifyBasicPin(pin) {
      this.loading1 = true;

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      };
      // Verify Pin
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: this.user_id,
            pin: pin
          },
          {
            headers
          }
        )
        .then(res => {
          this.loading1 = false;
          // If Pin is correct
          if (res.data.status == true) {
            //  Pay to become a basic Member
            axios
              .post(
                `https://momentum.ng/backend/api/wallet/upgradetopremium`,
                {
                  trans_id: this.trans_id,
                  amount: 2000
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.token
                  }
                }
              )
              .then(res => {
                if (res.data.status == true) {
                  this.resestSession();
                  this.mssg1 = res.data.message;
                } else {
                  this.msg1 = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.msg1 = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    start() {
      Calls.getUsers().then(res => {
        this.trans_id = res.trans_id;
        this.user_id = res._id;
        this.fullname = res.fullname;
        this.email = res.email;
        this.fname = res.fullname;
        this.level = res.level;
      });
    }
  },
  created() {
    this.start();
    this.token = Calls.getJwt();

    if (this.token == null) {
      Calls.reloadPage();
    }
  }
};
</script>


