<template>
  <!-- Main Wallet -->
  <div class="col-xl-3 first col-md-6 col-lg-6 mb-3">
    <div class="card border-left-primary shadow h-100 pt-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div
              class="text-ls font-weight-bold text-primary text-900 text-uppercase mb-1"
            >Main Wallet</div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">&#8358;{{main_balance | formart}}</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-wallet fa-3x text-gray-800"></i>
          </div>
        </div>
      </div>
      <div class="card-footer m-0 p-1 d-flex justify-content-center">
        <small>
          <span class>Dividends:</span>
          <span class="h6 m-2 font-weight-bold">
            <i class="fa fa-naira"></i>
            &#8358; {{dividends | formart}}
          </span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWallet",
  props: ["main_balance", "dividends"],
  filters: {
    formart(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>
