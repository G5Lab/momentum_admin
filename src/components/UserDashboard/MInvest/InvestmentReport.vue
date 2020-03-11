<template>
  <Structure page="Investment Reports">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" v-for="(investment, index) in investments" :key="index">
          <div class="card border-left-success">
            <div class="card-body">
              <p class="card-title mb-0">{{investment.investment_title}}</p>
              <p class="m-0 p-0">Category: {{investment.category}}</p>
              <small class="p text-muted">
                <i class="fa fa-map-marker mr-2"></i>
                <span>{{investment.investment_location}}</span>
              </small>
              <br />
              <p class="lead font-weight-bold my-0">&#8358;{{investment.investment}}</p>
              <div>
                <div class="h6 text-dark d-flex justify-content">
                  <i class="fa font-weight-bold fa-line-chart mr-2"></i>
                  <small class="d-block">
                    <span class="mr-2">Min return:</span>
                    <span>{{investment.min_return_projection}}%</span>
                  </small>
                  <small>
                    <span class="mr-2">Max return:</span>
                    <span>{{investment.max_return_projection}}%</span>
                  </small>
                </div>
              </div>
              <small>
                <span class="mr-2">Cylce:</span>
                <span>{{investment.investment_cycle}} months</span>
              </small>
              <div class="p text-gray-600 font-weight-bold my-0">{{investment.risk_plan}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
// import InvestmentReportCard from "../GUserLayouts/InvestmentReportCard";
export default {
  name: "InvestmentReport",
  components: {
    Structure
    // InvestmentReportCard
  },
  data() {
    return {
      token: "",
      trans_id: "",
      investments: []
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    axios
      .get(`https://momentum.ng/backend/api/investments/investmentreport`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.loading = false;
        if (res.data.data.length == 0) {
          this.onInvestments = "There Is Currectly No Investment";
        } else {
          this.investments = res.data.data.slice().reverse();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  }
};
</script>

<style scoped>
.card-body {
  position: relative;
  margin-top: -5px !important;
}
.card {
  border-radius: 5%;
  transition: 0.6s all;
}
.card-title {
  font-weight: 600;
  color: black;
  font-size: 1.1rem;
  max-width: 67%;
}
.card:hover {
  transform: translateY(4px);
  box-shadow: 2px 1px 2px 2px rgba(4, 107, 9, 0.493);
}

@media only screen and (max-width: 411px) {
  .card {
    border-radius: 5%;
    transition: 0.6s all;
    position: relative;
  }
}
@media only screen and (width: 320px) {
  .container-fluid {
    margin-left: -10px !important;
  }
  .card {
    width: 14rem;
  }
  .card-body {
    margin: -9px !important;
  }
}
</style>