<template>
  <Structure page="Cable Tv Subscription">
    <div class="container-fluid">
      <!-- Content Row -->
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#addMoney">Activate Decoder</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#transHist">History</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="addMoney" class="container tab-pane active">
              <br />

              <br />
              <div v-if="loading1" class="text-center">
                <Loader />
              </div>
              <br />
              <form v-on:submit.prevent="onSubmit">
                <label for="networkName">
                  <b>Select Decoder:</b>
                </label>
                <select
                  class="form-control input-sm"
                  name="networkName"
                  id="networkName"
                  autofocus
                  v-model="multichoice_type"
                  required
                >
                  <option value disabled selected>-- Select Decoder --</option>
                  <option value="dstv">Dstv</option>
                  <option value="gotv">Gotv</option>
                  <option value="startimes">Startimes</option>
                </select>
                <br />
                <label for="mobileno">
                  <b>Decoder/IUC Number:</b>
                </label>
                <input
                  type="text"
                  name="mobileno"
                  id="mobileno"
                  class="form-control input-sm"
                  minlength="11"
                  maxlength="11"
                  v-model="smart_card_no"
                  placeholder="Enter decoder/ iuc number"
                  required
                />
                <br />
                <label for="amount">
                  <b>Your Pin:</b>
                </label>
                <input
                  name="airAmnt"
                  id="airAmnt"
                  class="form-control input-sm"
                  v-model="pin"
                  placeholder="Enter Your Pin"
                  required
                />

                <br />
                <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
                <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
                <br />

                <button :disabled="loading1" class="btn btn-block btn-lg btn-primary" type="submit">
                  <b>Buy Airtime</b>
                </button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </form>
            </div>
            <div id="transHist" class="container tab-pane fade">
              <br />
              <div class="table-responsive d-none d-md-block">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Network</th>
                      <th scope="col">Mobile No</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="history of dataHistory" :key="history._id">
                      <th>{{history.date | formatDate }}</th>
                      <td
                        v-bind:class="{'danger': history.type  != 'Credit' }"
                        class="bg-primary text-white"
                      >{{history.type}}</td>
                      <td>{{history.benefactor}}{{history.beneficiary}}</td>
                      <td>{{history.narration}}</td>
                      <td>&#8358;{{history.amount}}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="container">
                  <div v-if="noHistory">
                    <p class="text-center my-5 h1 display-4 text-danger">History is Currently Empty</p>
                  </div>
                </div>
              </div>
              <div
                class="table-responsive d-md-none"
                v-for="history of dataHistory"
                :key="history._id"
              >
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">DATE</th>
                      <th scope="col">TYPE / DETAILS</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="py-0">
                      <th class="px-1 py-1">{{history.date | formatDate }}</th>
                      <td class="px-0 py-1">
                        <span
                          v-bind:class="{'danger': history.type  != 'Credit' }"
                          class="bg-primary text-white font-weight-bold px-2"
                        >{{history.type}}</span>
                        <br />
                        <span class="py-1">{{history.narration}}</span>
                      </td>
                      <td class="py-1 px-1">&#8358;{{history.amount}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="loading" class="text-center">
                <Loader />
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
import Loader from "../Msave/Loader";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";

import axios from "axios";

export default {
  name: "Airtime",
  components: {
    Structure,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      token: "",
      trans_id: "",
      dataHistory: [],
      loading: true,
      loading1: false,
      noHistory: "",

      multichoice_type: "",
      smart_card_no: "",
      msg: "",
      mssg: "",
      pin: ""
    };
  },

  methods: {
    closeMsg() {
      this.mssg = "";
      this.msg = "";
    },
    onSubmit() {
      this.loading1 = true;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
      };
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: this.user_id,
            pin: this.pin
          },
          {
            headers
          }
        )
        .then(res => {
          // If Pin is correct
          if (res.data.status == true) {
            axios
              .post(
                `https://www.payscribe.ng/api/validate/multichoice/`,
                {
                  multichoice_type: this.multichoice_type,
                  smart_card_no: this.smart_card_no
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.apiToken}`
                  }
                }
              )
              .then(res => {
                if (res.data.status != true) {
                  this.loading1 = false;
                  this.msg = res.data.message.description;
                } else {
                  axios
                    .post(
                      `https://www.payscribe.ng/api/multichoice/payment/`,
                      {
                        multichoice_type: this.multichoice_type,
                        smart_card_no: this.smart_card_no
                        // amount: null to be fixed,
                        // product_code: res.data.message.details.bouquets
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${this.apiToken}`
                        }
                      }
                    )
                    .then(res => {
                      if (res.data.status != true) {
                        this.msg = res.data.message.description;
                        this.loading1 = false;
                      } else {
                        // Momentum Api Request
                      }
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.loading1 = false;
            this.msg = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
    this.level = this.$session.get("user").level;
    /* axios
      .get(`https://momentum.ng/backend/api/savings/history/${this.trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        this.loading = false;
        if (res.data.data.length == 0) {
          this.noHistory = "You Do Not Have Any History Yet";
        } else {
          this.dataHistory = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      }); */
    axios;
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      var date = day.getDate();
      var month = day.getMonth() + 1;
      var year = day.getFullYear();
      return `${date}- ${month}- ${year}`;
    }
  }
};
</script>