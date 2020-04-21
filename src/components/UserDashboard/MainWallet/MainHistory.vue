<template>
  <HistoryCard
    :theHistory="mainHistory"
    :loading="loading"
    page="mWallet History"
    :noHistory="noHistory"
  />
</template>

<script>
import axios from "axios";
import HistoryCard from "../GUserLayouts/HistoryCard";
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
      mainHistory: [],
      loading: true,
      noHistory: ""
    };
  },
  methods: {
    fetchMainHistory() {
      axios
        .get(
          `https://momentum.ng/backend/api/wallet/history/${this.trans_id}`,
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
            this.mainHistory = res.data.data;
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
    this.fetchMainHistory();
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
