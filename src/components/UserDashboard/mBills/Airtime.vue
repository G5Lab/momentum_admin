<template>
  <Structure page="Airtime Top-up">
    <div class="container-fluid px-3">
      <!-- Content Row -->
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#addMoney">Buy Airtime</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#transHist">Airtime History</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="addMoney" class="container tab-pane active">
              <br />

              <Loader v-if="pageLoading" class="text-center d-block" />

              <!-- <br /> -->
              <form v-if="arrive" v-on:submit.prevent="onSubmit">
                <label for="networkName">
                  <b>Select Network:</b>
                </label>
                <select
                  class="form-control input-sm"
                  name="networkName"
                  id="networkName"
                  autofocus
                  v-model="network"
                  required
                >
                  <option value disabled selected>-- Select Network --</option>
                  <option value="mtn">MTN</option>
                  <option value="glo">GLO</option>
                  <option value="airtel">Airtel</option>
                  <option value="9mobile">9Mobile</option>
                </select>
                <br />
                <label for="mobileno">
                  <b>Mobile Number:</b>
                </label>
                <input
                  type="text"
                  name="mobileno"
                  id="mobileno"
                  class="form-control input-sm"
                  minlength="11"
                  maxlength="11"
                  v-model="recipent"
                  placeholder="Enter phone number 08022290092"
                  required
                />

                <br />
                <label for="amount">
                  <b>Enter Amount:</b>
                </label>
                <input
                  name="airAmnt"
                  id="airAmnt"
                  class="form-control input-sm"
                  type="number"
                  min="10"
                  max="25000"
                  v-model="amount"
                  placeholder="Enter amount"
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
                <Loader v-if="loading1" class="text-center d-block" />

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
                    <tr v-for="history of airtimeHistory" :key="history._id">
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
                v-for="history of airtimeHistory"
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
import Loader from "../MAjo/Loader";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";
import Calls from "../../../Service/Calls";

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
      airtimeHistory: [],
      loading: true,
      loading1: false,
      noHistory: "",

      network: "",
      amount: null,
      recipent: "",
      apiToken: null,

      msg: "",
      mssg: "",

      user_id: "",
      fullname: "",
      level: "",
      pin: "",

      pageLoading: true,
      arrive: false
    };
  },

  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
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
                `https://www.payscribe.ng/api/vend/airtime/`,
                {
                  network: this.network,
                  amount: parseInt(this.amount),
                  recipent: this.recipent
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
                  // alert("Transaction Failed Please Try again");
                } else {
                  //   Listen To Axios from Momentum backend To Store History
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
    this.token = Calls.getJwt();
    Calls.getUsers().then(res => {
      this.level = res.level;
      this.trans_id = res.trans_id;
      this.user_id = res._id;

      this.pageLoading = false;
      this.arrive = true;

      if (this.trans_id == "") {
        Calls.reloadPage();
      }
    });

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
          this.airtimeHistory = res.data.data;
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