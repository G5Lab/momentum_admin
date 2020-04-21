<template>
  <HistoryCard
    :theHistory="loanHistory"
    :loading="loading"
    page="mLoan History"
    :noHistory="noHistory"
  />
</template>

<script>
import HistoryCard from "../GUserLayouts/HistoryCard";
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "MainHistory",
  components: {
    HistoryCard
  },
  data() {
    return {
      token: "",
      trans_id: "",
      loanHistory: [],
      loading: true,
      noHistory: ""
    };
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();

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
          this.loanHistory = res.data.data;
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


