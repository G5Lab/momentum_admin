<template>
  <div class="card">
    <div class="card-body">
      <p class="card-title">{{name}}</p>
      <small>
        <i class="fa fa-map-marker mr-2"></i>
        <span>{{location}}</span>
      </small>
      <p class="lead">N{{amount}}</p>
      <div class="btn state btn-success m-0">{{state}}</div>
      <div class="p m-0">{{interest}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewInvestmentCard",
  props: {
    name: {},
    amount: {},
    state: {},
    interest: {},
    location: {}
  }
};
</script>
<style scoped>
.card {
  border-radius: 5%;
  transition: 0.6s all;
  position: relative;
}
.card:hover {
  transform: translateY(4px);
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 255, 0.493);
}
.state {
  position: absolute;
  top: 14%;
  right: 5%;
  width: 6rem;
  padding: 3px;
}
@media only screen and (max-width: 330px) {
  .card {
    background-color: red;
  }
  .state {
    position: absolute;
    top: 10%;
    right: 3%;
    width: 4rem;
    padding: 0;
  }
}
</style>