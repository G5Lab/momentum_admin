<template>
  <HistoryCard
    :theHistory="investmentHistory"
    :loading="loading"
    page="mInvest History"
    :noHistory="noHistory"
  />
</template>


<script>
import HistoryCard from "../GUserLayouts/HistoryCard";

import Calls from "../../../Service/Calls";
import axios from "axios";

export default {
  name: "InvestmentHistory",
  components: { HistoryCard },
  data() {
    return {
      token: "",
      trans_id: "",
      investmentHistory: [],
      loading: true,
      noHistory: ""
    };
  },
  methods: {
    fetchInvestHistory() {
      axios
        .get(
          `https://momentum.ng/backend/api/userinvestments/history/${this.trans_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          this.loading = false;

          if (res.data.data.length == 0) {
            this.noHistory = "You Do Not Have Any History Yet";
          } else {
            this.investmentHistory = res.data.data.slice().reverse();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    if (this.trans_id == null) {
      Calls.reloadPage();
    }
    this.fetchInvestHistory();
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
.danger {
  color: white !important;
  background: red !important;
}
</style>