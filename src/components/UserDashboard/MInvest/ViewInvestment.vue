<template>
  <Structure page="View Investments">
    <div class="container-fluid">
      <div class="side">
        <InSidebar />
      </div>
      <div class="body">
        <div class="row no-gutters">
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
          <div class="col-xl-3 col-md-4 mb-2">
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
.container-fluid {
  display: flex !important;
}
.body {
  flex: 4;
  margin-left: 0.3rem;
}
.side {
  flex: 1;
}
</style>