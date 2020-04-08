<template>
  <div class="pb-5">
    <div class="card pb-0">
      <div class="p-3 card-header">
        <h6 class="m-0 mb-2 h4 font-weight-bold text-primary">-Latest Investments</h6>
        <p class="mb-1 ml-3 px-1 text-md text-muted">
          <span class="d-block">You Can Invest In Any Of The Investment below</span>
          <span class="p-1 font-weight-bolder text-danger">Note :</span>
          You can also Fill The Upload Investment Form If You Need Investors for your business
        </p>
      </div>
      <div class="row py-2 no-gutters">
        <div
          v-for="(investment, index) in investments"
          :key="index"
          class="col-md-5 col-lg-4 col-xl-3 col-sm-3 mb-1"
        >
          <router-link class="nav-link" v-bind:to="'/investmentDetails/'+ index">
            <div class="card">
              <img
                style="max-height: 110px"
                class="card-img-top mb-0 d-md-block"
                :src="investment.attachment"
                alt="Image"
              />
              <div class="card-body pb-0 mt-0">
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="card-title mb-0">{{investment.title}}</p>
                  </div>
                  <div class="m-0 p-0">
                    <div class="btn btn-success p-1">{{investment.status}}</div>
                  </div>
                </div>
                <small class="p text-muted">
                  <i class="fa fa-map-marker mr-2"></i>
                  <span>{{investment.location}}</span>
                </small>
                <br />
                <p class="lead font-weight-bold my-0">&#8358;{{investment.unit_investment}}</p>
                <div>
                  <div class="h6 text-dark d-flex justify-content">
                    <div>
                      <i class="fa font-weight-bold fa-line-chart mr-2"></i>
                      Returns :
                      <span
                        class="small"
                      >{{investment.min_return_projection}}%</span>
                      <span class="mx-1">-</span>
                      <span class="small">{{investment.max_return_projection}}%</span>
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
        <button class="btn mx-auto d-block">
          <router-link
            to="/viewinvestment"
            class="btn mx-auto btn-success my-3 px-5 py-2 mb-0"
          >View All Investments</router-link>
        </button>
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
      investments: [],

      level: ""
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


<style  scoped>
.nav-link {
  transition: 0.6s all;
}
.nav-link:hover {
  cursor: pointer;
  transform: scale(1.03);
}
</style>