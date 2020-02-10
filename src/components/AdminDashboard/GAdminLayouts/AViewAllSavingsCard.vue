<template>
  <!-- Investment Update/Report -->
  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-1">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-1">
            <span class="text-xs font-weight-bold mb-1 mr-2">Agent:</span>
            <span class="text-xs font-weight-bold text-info text-uppercase mb-1">{{Agent}}</span>
            <div class="row no-gutters align-items-center">
              <div class="col-auto">
                <div class="mb-0 mr-1 font-weight-normal d-inline-block text-gray-800">Total Balance</div>
                <div class="h5 mb-0 mr-3 font-weight-bold d-inline-block text-gray-800">N{{Balance}}</div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <i class="text-gray-900 h4">{{Customers}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AViewAllSavings",
  props: {
    Agent: {},
    Balance: {},
    Customers: {}
  }
};
</script>