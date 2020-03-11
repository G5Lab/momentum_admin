<template>
  <div class="col-xl-12 col-lg-12">
    <div class="card shadow mb-4">
      <!-- Card Header - Dropdown -->
      <div class="card-header py-3">
        <h6 class="m-0 mb-2 h5 font-weight-bold text-primary">- Trending Investments</h6>
        <div class="container-fluid mb-1 small text-muted">
          You Can Invest In Any Of The Investment below
          <span class="bg-dark p-1 text-white">Note</span>
          You can also Fill The Upload Investment Form If You Need Investors for your business
        </div>
      </div>
      <div class="container-fluid card-body">
        <div class="row no-gutters">
          <div
            v-for="(investment, index) in investments"
            :key="index"
            class="col-md-5 col-lg-5 col-xl-3 col-sm-6 mb-1"
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
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexTrendingInvestment",
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
      .get(`https://momentum.ng/backend/api/investments/investments`, {
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
          var returns = res.data.data.slice(0, 4);
          this.investments = returns.slice().reverse();
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