<template>
  <Structure :page="page">
    <div class="container-fluid">
      <div class="table-responsive d-none d-md-block">
        <table class="table table-hover table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Beneficiary</th>
              <th scope="col">Details</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-for="history of theHistory" :key="history._id">
            <tr>
              <th>{{history.date | formatDate }}</th>
              <td
                v-bind:class="{'danger': history.type  != 'Credit' }"
                class="bg-primary text-white"
              >{{history.type}}</td>
              <td>{{history.beneficiary}}{{history.benefactor}}</td>
              <td>{{history.narration}}</td>
              <td>&#8358;{{history.amount}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-responsive d-md-none">
        <table class="table table-hover table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TYPE / DETAILS</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody v-for="history of theHistory" :key="history._id">
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
    </div>
    <div v-if="noHistory" class="container-fluid">
      <p class="text-center my-md-5 display-4 text-danger">History is Currently Empty</p>
    </div>

    <Loader v-if="loading" class="text-center d-block" />
  </Structure>
</template>

<script>
import Structure from "./Structure";
import Loader from "../MAjo/Loader";
export default {
  name: "History",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: ""
    };
  },
  props: ["theHistory", "loading", "page", "noHistory"],

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
.border,
.border-right {
  border: 0.05rem solid black !important;
}
.danger {
  color: white !important;
  background: red !important;
}
</style>