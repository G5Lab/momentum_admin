<template>
  <!-- mSave -->
  <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
    <div class="card border-left-info shadow h-100 pt-2">
      <div class="card-body px-2">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">mSave</div>

            <div class="h5 mb-2 font-weight-bold text-gray-800">&#8358;{{savings_balance || 0}}</div>

            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <!-- <div class="mb-0 mr-3 font-weight-bold text-gray-800">50%</div> -->
              </div>
              <!-- <div class="col">
                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 50%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>-->
            </div>
            <small class>
              <span class>Maturity Date:</span>
              <span class="ml-2">{{msavematurity || "Not Set"}}</span>
            </small>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small class>
          <span class>Target:</span>
          <span class="h6 m-2 font-weight-bold">N{{msavetarget || "ot Set"}}</span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
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
          // var month = maturity.getMonth() + 1;
          // var year = maturity.getFullYear();
          // console.log(`${dayNum}  ${month}  ${year}`);
          this.msavematurity = day;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>