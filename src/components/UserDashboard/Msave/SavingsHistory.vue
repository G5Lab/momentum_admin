<template>
  <Structure page="Savings History">
    <div class="container-fluid">
      <div class="container">
        <div class="table-responsive">
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
          <div v-if="loading" class="row justify-content-center m-5">
            <div class="mx-5 text-center">
              <Loader class="m-5" />
            </div>
          </div>
          <div class="container">
            <div v-if="noHistory" class="row justify-content-center m-5">
              <div class="text-center">
                <div
                  class="card-body bg-danger text-white border h3 font-weight-bolder"
                >{{noHistory}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      return day.toString().slice(0, 15);
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