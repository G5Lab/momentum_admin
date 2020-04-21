<template>
  <div class="box">
    <div class="card">
      <div class="card-body">
        <p class="card-title text-dark font-weight-bold">Sholas Farm</p>
        <small>
          <i class="fa fa-map-marker mr-2"></i>
          <span>Sango Ota</span>
        </small>
        <p class="lead m-0 text-dark">
          <span class="h6">Min Investment</span>
          N10000
        </p>
        <p class="lead m-0 text-dark">
          <span class="h6">Total Investors</span>
          10
        </p>
        <div class="btn state btn-warning m-0">Pending</div>
        <div class="btn stop btn-danger m-0">Stop</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadedInvestmentCard"
  // props:[]
};
</script>

<style scoped>
.box {
  width: 20rem;
  display: inline-block;
  margin: 0.4rem;
  border: 2px dotted black;
  padding: 0.3rem;
}
.box:hover {
  border: 2px solid black;
  cursor: pointer;
}
span {
  color: black;
}
.state {
  position: absolute;
  top: 15%;
  right: 5%;
}
.stop {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
</style>