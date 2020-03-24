<template>
  <Structure page="Savings History">
    <div class="container-fluid">
      <div class="table-responsive d-none d-md-block">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Transaction</th>
              <th scope="col">Benefactor</th>
              <th scope="col">Details</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="history of savingsHistory" :key="history._id">
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
      <div class="table-responsive d-md-none">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TYPE / DETAILS</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr class="py-0" v-for="history of savingsHistory" :key="history._id">
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
    </div>
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
  </Structure>
</template>


<script>
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Loader from "./Loader";
export default {
  name: "SavingsHistory",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      savingsHistory: [],
      loading: true,
      noHistory: ""
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    axios
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
          console.log(res.data.data);
          this.savingsHistory = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
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


<style scoped>
div {
  color: black;
}
.danger {
  color: white !important;
  background: red !important;
}
</style>