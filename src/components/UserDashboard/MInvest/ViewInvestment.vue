<template>
  <Structure page="View Investments">
    <div class="container-fluid">
      <div class="container">
        <div class="text-center mt-3" v-if="loading">
          <Loader />
        </div>
        <div v-if="mode" class="row">
          <div class="d-none d-lg-block col-lg-3 col-xl-2">
            <InSidebar />
          </div>
          <div class="col-lg-9 col-xl-10 col">
            <div class>
              <div class="row no-gutters">
                <div
                  v-for="(investment, index) in investments"
                  :key="index"
                  class="col-md-6 col-lg-6 col-xl-4 col-sm-6 mb-1"
                >
                  <router-link class="nav-link" to="/invest">
                    <div class="card">
                      <img
                        style="height: 110px"
                        class="card-img-top mb-0 d-none d-md-block"
                        :src="investment.attachment"
                        alt="Image"
                      />
                      <div class="card-body mt-0">
                        <p class="card-title mb-0">{{investment.title}}</p>
                        <small class="p text-muted">
                          <i class="fa fa-map-marker mr-2"></i>
                          <span>{{investment.location}}</span>
                        </small>
                        <br />
                        <div class="btn state m-0">{{investment.status}}</div>
                        <p class="lead font-weight-bold my-0">&#8358;{{investment.unit_investment}}</p>
                        <div>
                          <div class="h6 text-dark d-flex justify-content">
                            <div class="my-auto">
                              <i class="fa font-weight-bold fa-line-chart mr-2"></i>
                            </div>
                            <div>
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
                        </div>
                        <small>
                          <span class="mr-2">Cylce:</span>
                          <span>{{investment.investment_cycle}} months</span>
                        </small>
                        <div class="p text-gray-600 font-weight-bold my-0">{{investment.risk_plan}}</div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      investments: [],

      mode: false,
      loading: true
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
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
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 255, 0.493);
}
.state {
  position: absolute;
  top: 3%;
  right: 3%;
  width: 5rem;
  padding: 2px;
  background: rgba(43, 163, 43, 0.685);
  color: white;
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
  .state {
    top: 3%;
    right: 3%;
    max-width: 4rem;
    padding: 2px;
    margin: 0px !important;
  }
}
</style>