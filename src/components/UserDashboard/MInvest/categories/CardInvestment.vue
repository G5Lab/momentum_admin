<template>
  <router-link class="nav-link text-dark p-0 card" v-bind:to="link">
    <img style="height: 110px" class="card-img-top mb-0" :src="attachment" alt="Image" />
    <div class="card-body px-2 pt-2">
      <div class="d-flex justify-content-between m-0 p-0">
        <div class="m-0">
          <p class="m-0 lead font-weight-bold text-capitalize">{{title}}</p>
        </div>
        <div class="m-0 p-0">
          <div class="btn p-1 m-0 mr-auto btn-success">{{status}}</div>
        </div>
      </div>
      <small class="p text-muted">
        <i class="fa fa-map-marker mr-2"></i>
        <span>{{location}}</span>
      </small>
      <p class="font-weight-bold my-0">&#8358;{{unit_investment}}</p>
      <div>
        <i class="fa font-weight-bold fa-line-chart mr-2"></i>
        Returns :
        <span class="small">{{minReturn}}%</span>
        <span class="mx-1">-</span>
        <span class="small">{{maxReturn}}%</span>
      </div>
      <small>
        <span class="mr-2">Cylce:</span>
        <span>{{cycle}} months</span>
      </small>
      <div class="p text-gray-600 font-weight-bold my-0">{{risk_plan}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardInvestment",
  props: [
    "link",
    "attachment",
    "title",
    "status",
    "location",
    "unit_investment",
    "minReturn",
    "maxReturn",
    "cycle",
    "risk_plan"
  ]
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
.card:hover {
  transform: translateY(4px);
  box-shadow: 2px 1px 2.5px 2px rgb(87, 82, 184);
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
.card-body {
  position: relative;
  margin-top: -5px !important;
}
.card {
  border-radius: 5%;
  transition: 0.6s all;
}
</style>