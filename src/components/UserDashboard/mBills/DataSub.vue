<template>
  <Structure page="Data Subscription">
    <div class="container-fluid">
      <!-- Content Row -->
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#addMoney">Buy Data</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#transHist">Data History</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="addMoney" class="container tab-pane active">
              <br />

              <!-- <strong>MTN</strong>: 0.00% &emsp;
              <strong>GLO</strong>: 0.00% &emsp;
              <strong>Airtel</strong>: 0.00% &emsp;
              <strong>9Mobile</strong>: 0.00% &emsp;-->
              <br />

              <br />
              <form id="myForm" v-on:submit.prevent="onSubmit">
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
                  <option value>-- Select Network --</option>
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
                  placeholder="Enter phone number"
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
                <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
                <Successmsg :msg="msg" v-on:closeMsg="closeMsg" />
                <br />
                <!-- <font color="red">
                  <b>NOTE:</b>
                </font> Minimum airtime purchase is
                <font color="red">
                  <b>&#8358;10.00</b>
                </font> and Maximum is
                <font color="red">
                  <b>&#8358;25,000.00</b>
                </font>
                <br />-->
                <button class="btn btn-block btn-lg btn-primary" id="mybtn" type="button">
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
      airtimeHistory: [],
      loading: true,
      noHistory: "",

      network: "",
      amount: null,
      recipent: "",

      msg: "",
      mssg: ""
    };
  },

  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
    },
    onSubmit() {
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
            alert("Transaction Failed Please Try again");
          } else {
            //   Listen To Axios from Momentum backend
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