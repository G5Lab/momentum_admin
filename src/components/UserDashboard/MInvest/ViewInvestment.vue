<template>
  <Structure page="View Investments">
    <div class="container-fluid">
      <div class="row">
        <div class="d-none d-lg-block col-lg-2">
          <InSidebar />
        </div>
        <div class="col-lg-10 col">
          <div class="row no-gutters">
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6 mb-1">
              <router-link class="nav-link" to="/invest">
                <ViewInvestmentCard
                  name="Farm"
                  location="Ibadan"
                  state="Selling"
                  amount="20,000"
                  interest="10% return in 5 months"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
import ViewInvestmentCard from "../GUserLayouts/ViewInvestmentCard";
import InSidebar from "./InvestSidebar";
export default {
  name: "ViewInvestment",
  components: {
    Structure,
    ViewInvestmentCard,
    InSidebar
  }
};
</script>

<style scoped>
</style>