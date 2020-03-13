<template>
  <Structure page="View Investments">
    <div class="text-center mt-3" v-if="loading">
      <Loader />
    </div>
    <div class="container-fluid px-2">
      <div v-if="premium" class="container mx-0">
        <div v-if="mode" class="row">
          <div class="d-none d-lg-block col-lg-3 col-xl-2 mb-3">
            <InSidebar />
          </div>
          <div class="col-lg-9 mx-0 px-0 col-xl-10">
            <div class="row justify-content-start">
              <div
                v-for="(investment, index) in investments"
                :key="index"
                class="col-md-4 col-xl-4 col-lg-4 col-sm-4 mb-1"
              >
                <router-link class="nav-link card" v-bind:to="'/investmentDetails/'+ index">
                  <img
                    style="height: 110px"
                    class="card-img-top mb-2"
                    :src="investment.attachment"
                    alt="Image"
                  />
                  <div class="d-flex justify-content-between">
                    <div>
                      <p class="mb-0">{{investment.title}}</p>
                    </div>
                    <div class="m-0 p-0">
                      <div class="btn mr-auto btn-success">{{investment.status}}</div>
                    </div>
                  </div>
                  <small class="p text-muted">
                    <i class="fa fa-map-marker mr-2"></i>
                    <span>{{investment.location}}</span>
                  </small>
                  <p class="lead font-weight-bold my-0">&#8358;{{investment.unit_investment}}</p>
                  <div>
                    <i class="fa font-weight-bold fa-line-chart mr-2"></i>
                    Returns :
                    <span
                      class="small"
                    >{{investment.min_return_projection}}%</span>
                    <span class="mx-1">-</span>
                    <span class="small">{{investment.max_return_projection}}%</span>
                  </div>
                  <small>
                    <span class="mr-2">Cylce:</span>
                    <span>{{investment.investment_cycle}} months</span>
                  </small>

                  <div class="p text-gray-600 font-weight-bold my-0">{{investment.risk_plan}}</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="notPremium" class>
        <p class="text-center my-2 h1 text-danger">{{notPremium}}</p>
      </div>
    </div>
  </Structure>
</template>



<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
import axios from "axios";
import InSidebar from "./InvestSidebar";
export default {
  name: "ViewInvestment",
  components: {
    Structure,
    InSidebar,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",

      level: "",
      premium: false,
      notPremium: "",

      investments: [],

      mode: false,
      loading: true
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.level = this.$session.get("user").level;

    axios
      .get(`https://momentum.ng/backend/api/investments/investments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        this.loading = false;
        this.mode = true;
        if (res.data.data.length == 0) {
          this.onInvestments = "There Is Currectly No Investment";
        } else {
          this.investments = res.data.data.slice().reverse();
        }
      })
      .catch(err => {
        console.log(err);
      });
    if (this.level >= 4) {
      this.premium = true;
    } else {
      this.notPremium = "You Need To Upgrade Your Membership ";
    }
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  }
};
</script>

