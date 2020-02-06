<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <!-- Topbar -->
      <Topbar />

      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">mSave</h1>
        </div>

        <div class="row">
          <!-- Target Savings -->
          <div class="col-lg-6 mb-4">
            <TargetSavings />
          </div>

          <div class="col-lg-6 mb-4">
            <!-- Saving Plan Setting -->
            <SavingsReport />
          </div>
          <div class="col-lg-6 mb-4">
            <!-- Saving Plan Setting -->
            <SavingPlanSetting />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Topbar from "../GLayouts/Topbar";
import Footer from "../GLayouts/Footer";
import TargetSavings from "./TargetSavings";
import SavingsReport from "./SavingReport";
import SavingPlanSetting from "./SavingPlanSetting";
export default {
  name: "Body",
  components: {
    Topbar,
    Footer,
    SavingsReport,
    TargetSavings,
    SavingPlanSetting
  }
};
</script>

<style lang="stylus" scoped></style>
