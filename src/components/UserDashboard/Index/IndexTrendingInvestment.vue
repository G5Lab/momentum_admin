<template>
  <div class="shadow mb-4">
    <!-- Card Header - Dropdown -->
    <div class="card-header py-3">
      <h6 class="m-0 mb-2 h5 font-weight-bold text-primary">- Latest Investments</h6>
      <div class="mb-1 px-1 small text-muted">
        You Can Invest In Any Of The Investment below
        <span
          class="p-1 font-weight-bolder text-danger"
        >Note</span>
        You can also Fill The Upload Investment Form If You Need Investors for your business
      </div>
    </div>
    <div class="row justify-content-start no-gutters">
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
            <div class="card-body mt-0">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="card-title mb-0">{{investment.title}}</p>
                </div>
                <div class="m-0 p-0">
                  <div class="btn btn-success p-2 py-0">{{investment.status}}</div>
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


