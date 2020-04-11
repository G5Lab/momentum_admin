<template>
  <ViewInvestment>
    <div class="my-3 px-3 p-2 bg-white overflow-auto scroll shadow">
      <router-link class="nav-link nav1" to="viewinvestment">All</router-link>
      <router-link class="nav-link" to="viewinvestmentAgric">Agriculture</router-link>
      <router-link class="nav-link" to>Tech</router-link>
      <router-link class="nav-link" to>Transportation</router-link>
    </div>
    <div v-if="loading" class="text-center mt-5">
      <Loader />
    </div>
    <div class="row">
      <div v-for="(investment, index) in investments" :key="index" class="col-lg-3 col-xl-3 mb-3">
        <CardInvestment
          :link="'/investmentDetails/'+ index"
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
      loading: true
    };
  },
  created() {
    this.token = this.$session.get("jwt");
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
  }
};
</script>

<style scoped>
.nav1 {
  border-bottom: 2.5px solid blue;
}
.nav-link {
  display: inline-block;
  color: rgb(56, 56, 56);
}
.scroll {
  overflow-x: auto;
  white-space: nowrap;
}
</style>