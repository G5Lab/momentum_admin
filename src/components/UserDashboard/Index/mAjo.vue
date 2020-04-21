<template>
  <!-- mAjo -->
  <div class="col-xl-3 first col-md-6 col-lg-6 mb-3">
    <div class="card border-left-danger shadow h-100 pt-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-ls font-weight-bold text-danger text-uppercase mb-1">mAjo</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">&#8358;{{ajo_balance | formart}}</div>
          </div>
          <div class="col-auto">
            <i class="fa fa-handshake fa-3x text-gray-800"></i>
          </div>
        </div>
        <div class="mt-3 mb-0">
          Amount:
          <span class="text-danger">
            <span v-if="ajoAmount">&#8358;</span>
            {{ajoAmount || "Not Set"| formart}}
          </span>
        </div>
        <div class="mb-0">
          ajoAgent:
          <span class="text-danger">{{ajoAgent|| "Not Set"}}</span>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small>
          <span class>Cycle:</span>
          <span class="h6 m-2 font-weight-bold">{{cycle || "Not Set"}}</span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "mAjo",
  props: ["ajo_balance"],
  data() {
    return {
      cycle: "",
      ajoAmount: "",
      ajoAgent: "",
      user_id: ""
    };
  },
  created() {
    const token = Calls.getJwt();
    const trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (token == "") {
      Calls.reloadPage();
    }
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
        if (result.status == true) {
          this.ajoAmount = res.data.ajo.ajo_amount;
          if (res.data.ajo.ajo_cycle == 30) {
            this.cycle = "Monthly";
          }
          if (res.data.ajo.ajo_cycle == 90) {
            this.cycle = "Quaterly";
          }
          if (res.data.ajo.ajo_cycle == 180) {
            this.cycle = "Bi-Annually";
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`https://momentum.ng/backend/api/users/${this.user_id}`)
      .then(res => {
        if (res.data.agent) {
          this.ajoAgent = res.data.agent;

          // Get Agent Name
          axios
            .get(
              `https://momentum.ng/backend/api/admin/mujeeb/user/${this.ajoAgent}`
            )
            .then(res => {
              this.ajoAgent = res.data.data[0].fullname;
            })
            .catch(err => {
              console.log(err);
            });
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