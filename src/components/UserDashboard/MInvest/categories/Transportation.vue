<template>
  <ViewInvestment>
    <div class="my-3 md-px-3 p-1 md-p-2 bg-white scroll shadow">
      <router-link class="nav-link" to="viewinvestment">All</router-link>
      <router-link class="nav-link" to="viewinvestmentAgric">Agriculture</router-link>
      <router-link class="nav-link nav1" to="viewinvestmentTrans">Transportation</router-link>
      <router-link class="nav-link" to="viewinvestmentOthers">Others</router-link>
    </div>
    <div v-if="loading" class="text-center mt-5">
      <Loader />
    </div>
    <div v-if="noInvestments">
      <p class="text-center my-5 h1 display-4 text-danger">{{noInvestments}}</p>
    </div>
    <div class="row">
      <div v-for="(investment, index) in investments" :key="index" class="col-lg-3 col-xl-3 mb-3">
        <CardInvestment
          class="col"
          :link="'/transinvestmentDetails/'+ index"
          :attachment="investment.attachment"
          :title="investment.title"
          :status="investment.status"
          :location="investment.location"
          :unit_investment="investment.unit_investment"
          :minReturn="investment.min_return_projection"
          :maxReturn="investment.max_return_projection"
          :cycle="investment.investment_cycle"
          :risk_plan="investment.risk_plan"
        />
      </div>
    </div>
  </ViewInvestment>
</template>

<script>
import ViewInvestment from "../ViewInvestment";
import CardInvestment from "./CardInvestment";
import Loader from "../../MAjo/Loader";
import Calls from "../../../../Service/Calls";

import axios from "axios";

export default {
  name: "All",
  components: {
    CardInvestment,
    ViewInvestment,
    Loader
  },
  data() {
    return {
      investments: [],
      token: "",
      noInvestments: "",

      loading: true
    };
  },
  created() {
    this.token = Calls.getJwt();
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
          this.noInvestments = "There Is Currectly No Investment";
        } else {
          var allInvestment = res.data.data.slice().reverse();
          allInvestment = allInvestment.filter(function(item) {
            if (item.category == "Transportation") {
              return item;
            }
          });
          if (allInvestment.length == 0) {
            this.noInvestments = "There Is Currectly No Investment";
          } else {
            this.investments = allInvestment;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

