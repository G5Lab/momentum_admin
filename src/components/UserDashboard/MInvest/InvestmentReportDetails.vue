<template>
  <Structure page="Investment Details">
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div class="container-fluid">
      <div class="row text-dark">
        <div v-if="arrive" class="m-0 p-0 col-md">
          <div class="row">
            <div class="col-xl-8 col-md-10 mb-2">
              <div class="card">
                <div class="card-body text-dark">
                  <p class="h3">Name: {{investmentReportDetails.title}}</p>
                  <span class="d-block text-gray-900 h6">
                    <span class="mr-1">Category:</span>
                    {{investmentReportDetails.category}}
                  </span>
                  <p class="p">
                    <span class="small rounded p-1 bg-light">Report:</span>
                    {{investmentReportDetails.report}}
                  </p>
                  <p class="m-1">
                    Start_date:
                    <span class="font-weight-bold">
                      <span class>{{investmentReportDetails.start_date}}</span>
                    </span>
                  </p>
                  <p class="m-1">
                    End_date:
                    <span class="font-weight-bold">
                      <span class>{{investmentReportDetails.end_date}}</span>
                    </span>
                  </p>
                  <p class="m-1">
                    Report_date :
                    <span
                      class="font-weight-bold"
                    >{{investmentReportDetails.report_date}}</span>
                  </p>
                  <p class="m-1">
                    Location :
                    <span class="font-weight-bold">{{investmentReportDetails.location}}</span>
                  </p>
                </div>
              </div>
            </div>
            <!--   Related Investments -->
            <!--
              <div class="d-none d-md-block col-xl-5 col-md-5 mb-2">
                <p class="lead h3 ml-4 text-dark font-weight-normal">Related Investments</p>
                <div
                  v-for="(relate, index) in related"
                  :key="index"
                  class="row justify-content-center no-gutters"
                >
                  <div class="col-xl-8 mb-2">
                    <div class="mb-2">
                      <router-link class="nav-link card" to v-on:click="putUp">
                        <img
                          style="height: 110px"
                          class="card-img-top mb-2"
                          :src="relate.attachment"
                          alt="Image"
                        />
                        <div class="d-flex justify-content-between">
                          <div>
                            <p class="mb-0">{{relate.title}}</p>
                          </div>
                          <div class="m-0 p-0">
                            <div class="btn mr-auto btn-success">{{relate.status}}</div>
                          </div>
                        </div>
                        <small class="p text-muted">
                          <i class="fa fa-map-marker mr-2"></i>
                          <span>{{relate.location}}</span>
                        </small>
                        <p class="lead font-weight-bold my-0">&#8358;{{relate.unit_investment}}</p>
                        <div>
                          <i class="fa font-weight-bold fa-line-chart mr-2"></i>
                          Returns :
                          <span
                            class="small"
                          >{{relate.min_return_projection}}%</span>
                          <span class="mx-1">-</span>
                          <span class="small">{{relate.max_return_projection}}%</span>
                        </div>
                        <small>
                          <span class="mr-2">Cylce:</span>
                          <span>{{relate.investment_cycle}} months</span>
                        </small>
                        <div class="p text-gray-600 font-weight-bold my-0">{{relate.risk_plan}}</div>
                      </router-link>
                    </div>
                  </div>
                </div>
            </div>-->
          </div>
          <div class="border mt-0 p-3">
            <p>{{investmentReportDetails.body}}</p>
            <div class="d-flex justify-content-center mt-5">
              <router-link class="btn btn-outline-primary px-5" to="/investmentReport">
                <i class="fa fa-arrow-left"></i>
                View more
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Loader from "../Msave/Loader";
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
export default {
  name: "InvestmentReportDetails",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      investmentReportDetails: [],
      loading: true,
      arrive: false,
      related: []
    };
  },
  methods: {
    putUp(index) {
      console.log(index);
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
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
        console.log(res.data);
        this.loading = false;
        this.arrive = true;
        if (res.data.data.length == 0) {
          this.onMaterials = "Thers is currently no investment";
        } else {
          this.related = res.data.data
            .slice()
            .reverse()
            .slice(0, 3);
          this.investmentReportDetails = res.data.data.slice().reverse()[
            this.$route.params.id
          ];
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