<template>
  <!-- mSave -->
  <div class="col-xl-3 first col-md-6 col-lg-6 mb-3">
    <div class="card border-left-info shadow h-100 pt-2">
      <div class="card-body px-2">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-ls font-weight-bold text-info text-uppercase mb-1">mSave</div>
            <div
              class="h5 mb-2 font-weight-bold text-gray-800"
            >&#8358;{{savings_balance || 0 | formart}}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-3x text-gray-800"></i>
          </div>
        </div>
        <div class="row no-gutters align-items-center">
          <div class="col-auto mt-3">
            Maturity Date:
            <span class="ml-2 text-info">{{msavematurity || "Not Set"}}</span>
          </div>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small class>
          <span class>Target:</span>
          <span class="h6 m-2 font-weight-bold">
            <span v-if="msavetarget">&#8358;</span>
            {{msavetarget || "Not Set" | formart}}
          </span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "SavingsWallet",
  props: ["savings_balance"],
  data() {
    return {
      msavetarget: "",
      msavematurity: ""
    };
  },

  created() {
    const token = Calls.getJwt();
    const trans_id = Calls.getTrans_Id();
    if (token == "") {
      Calls.reloadPage();
    }
    // Get Savings Wallet
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/savings/${trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const result = res.data;
        // console.log(result);
        if (result.status == true) {
          this.msavetarget = result.savings.target_amount;
          var maturity = new Date(result.savings.maturity);
          // var dayNum = `${maturity.getDay()}th`;
          var day = maturity.toString().slice(0, 15);
          this.msavematurity = day;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    formart(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>