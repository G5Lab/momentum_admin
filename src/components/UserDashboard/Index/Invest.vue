<template>
  <!-- mInvest -->
  <div class="col-xl-3 first col-md-6 col-lg-6 mb-3">
    <div class="card border-left-warning shadow h-100 pt-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-ls font-weight-bold text-warning text-uppercase mb-1">mInvest</div>
            <div
              class="h5 mb-0 font-weight-bold text-gray-800"
            >&#8358;{{investment_balance || 0 | formart}}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-fw fa-coins fa-3x text-gray-800"></i>
          </div>
        </div>
        <div class="mt-3 mb-0">
          Expected Return:
          <span class="text-warning">
            <span v-if="returns">&#8358;</span>
            {{returns || "Not Set" | formart}}
          </span>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small>
          <span class>Interest:</span>
          <span class="h6 m-2 font-weight-bold">
            <span v-if="interest">&#8358;</span>
            {{interest || "Not Set" | formart}}
          </span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Invest",
  props: ["investment_balance"],
  data() {
    return {
      returns: "",
      interest: ""
    };
  },
  filters: {
    formart(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  },
  created() {
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
    // Get Investmet
    axios
      .get(
        `https://momentum.ng/backend/api/fetchdata/userinvestments/${trans_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        const result = res.data;
        if (result.status == true) {
          console.log(result);
          this.interest = result.data.interest;
          this.returns = result.data.returns;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

