<template>
  <div class="container-fluid">
    <div class="row text-dark">
      <div v-if="arrive" class="m-0 p-0 col-md">
        <div class="row">
          <div v-if="notPremium" class="container my-5">
            <p class="text-center my-2 h1 text-danger">{{notPremium}}</p>
          </div>
          <div v-if="premium" class="col-lg-8 col-md-10 mb-2">
            <div class="card">
              <img class="card-img-top" style="max-height:30em" :src="attachment" alt="Image" />
              <div class="card-body text-dark">
                <p class="h3">
                  Name:
                  <span class="text-capitalize">{{title}}</span>
                </p>
                <div class="row no-gutters">
                  <div class="col-md-5">
                    <p class="m-1">
                      <span class="font-weight-bold mr-1">Category:</span>
                      {{category}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Price :</span>
                      &#8358;{{unit_investment}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Location :</span>
                      {{location}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Returns :</span>
                      <span class>{{min_return_projection}}%</span>
                      <span class="mx-1">-</span>
                      <span class>{{max_return_projection}}%</span>
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Available Units :</span>
                      {{unit_available}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Investment_cycle :</span>
                      {{investment_cycle}} months
                    </p>
                  </div>
                  <hr />
                  <div class="col-md-7">
                    <p class="m-1">
                      <span class="font-weight-bold">Start date:</span>
                      {{start_date}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">End date:</span>
                      {{end_date}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Risk_plan:</span>
                      {{risk_plan}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Partners:</span>
                      {{partners}}
                    </p>
                    <p class="m-1">
                      <span class="font-weight-bold">Details:</span>
                      {{details}}
                    </p>
                  </div>
                </div>
                <ul class="nav justify-content-center nav-pills my-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="font-weight-bold nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <span class="d-none d-md-inline">Invest</span> From mWallet
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="font-weight-bold nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <span class="d-none d-md-inline">Invest</span> From Bank
                    </a>
                  </li>
                </ul>
                <slot></slot>
              </div>
            </div>
          </div>
          <!--   Related Investments -->
          <!-- 
            <div class="d-none d-md-block col-lg-4 col-md-2 mb-2">
              <p class="lead h3 ml-4 text-dark font-weight-normal">Related Investments</p>
              <div
                v-for="(relate, index) in related"
                :key="index"
                class="row justify-content-center no-gutters"
              >
                <div class="col-xl-8 mb-2">
                  <div class="mb-2">
                    <router-link class="nav-link card" to>
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
          <p>{{investmentDetails.body}}</p>
          <div class="d-flex justify-content-center mt-5">
            <router-link class="btn btn-outline-primary px-5" to @click.native="goBack">
              <i class="fa fa-arrow-left"></i>
              Go Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsCard",
  data() {
    return {
      investmentDetails: []
    };
  },
  props: [
    "arrive",
    "notPremium",
    "premium",
    "attachment",
    "title",
    "category",
    "min_return_projection",
    "max_return_projection",
    "unit_investment",
    "unit_available",
    "investment_cycle",
    "location",
    "risk_plan",
    "partners",
    "details",
    "end_date",
    "start_date"
  ],
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>