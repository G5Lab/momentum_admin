<template>
  <Structure page="Investment Reports">
    <div class="container-fluid">
      <div class="row" v-if="premium">
        <div class="col-md-6 col-lg-4 mb-3" v-for="(investment, index) in investments" :key="index">
          <router-link class="text-dark link" v-bind:to="'/investmentReportDetails/'+ index">
            <div class="card border-left-primary py-2">
              <div class="card-body p-2">
                <p class="card-title mb-0">Name: {{investment.title}}</p>
                <p class="m-0 p-0">Category: {{investment.category}}</p>
                <small class="p text-muted">
                  <i class="fa fa-map-marker text-dark mr-2"></i>
                  <span>{{investment.location}}</span>
                </small>
                <br />
                <small>
                  <span class="mr-2">End_date:</span>
                  <span>{{investment.end_date}}</span>
                </small>
                <div class="p text-gray-600 font-weight-bold my-0">{{investment.risk_plan}}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div class="container">
      <div v-if="notPremium" class>
        <p class="text-center my-5 my-2 h1 text-danger">{{notPremium}}</p>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
import axios from "axios";
export default {
  name: "InvestmentReport",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      investments: [],
      loading: true,
      level: "",
      premium: false,
      notPremium: ""
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.level = this.$session.get("user").level;
    axios
      .get(
        `https://momentum.ng/backend/api/investments/investmentreport/${this.trans_id}`,
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
      this.loading = false;
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


<style scoped>
.link:hover {
  text-decoration-line: none;
}
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
  box-shadow: 2px 1px 2px 2px rgba(52, 46, 131, 0.493);
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
  .card-body {
    margin: -9px !important;
  }
}
</style>