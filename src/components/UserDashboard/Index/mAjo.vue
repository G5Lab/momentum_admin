<template>
  <!-- mAjo -->
  <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
    <div class="card border-left-danger shadow h-100 pt-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">mAjo</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">&#8358;{{ajo_balance}}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
        <div class="mt-3 small mb-0">
          Amount:
          <span class="text-danger">{{ajoAmount}}</span>
        </div>
        <div class="small mb-0">
          ajoAgent:
          <span class="text-danger">{{ajoAgent}}</span>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small>
          <span class>Cycle:</span>
          <span class="h6 m-2 font-weight-bold">{{cycle}}</span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mAjo",
  props: ["ajo_balance"],
  data() {
    return {
      cycle: "",
      ajoAmount: "",
      ajoAgent: ""
    };
  },
  created() {
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
    // Get ajo
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/ajo/${trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const result = res.data;
        if (result.status == false) {
          this.ajoAmount = "Not set";
          this.cycle = "Not set";
          this.ajoAgent = "Not set";
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>