<template>
  <structure page="Target Savings Action">
    <!-- Start Savings -->
    <div class="container-fluid">
      <div class="row justify-content-center my-3">
        <div class="col-md-12 col-lg-10 shadow border p-0">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- You Can Start Saving Now</h6>
          </div>
          <div id="accordion" class="card-body">
            <!-- Direct Savings -->
            <div class="border">
              <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-save text-primary mr-3 lead"></i>
                  <span class="font-weight-bold">DirectSavings</span>
                </div>
              </a>
              <div id="collapse1" class="collapse border m-2 p-2 show">
                You can instantly save funds to your savings wallet to meet your target quickly. For convenience and ease, you can choose to save from your bank account or your main wallet.
                <!-- DirectSavingsForm Here! -->
                <DirectSavingsForm />
              </div>
            </div>

            <!-- Recurring Savings -->
            <div class="border">
              <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-save mr-3 lead"></i>
                  <span class="font-weight-bold">Recurring Savings</span>
                </div>
              </a>
              <div class="card border m-2 p-2 collapse" id="collapse2">
                You can set up your periodic debits from your bank account to savings wallent automatically until you reach your set target. You will be debited starting from the day you start, at the frequency you selected until you reach your target.
                <!-- Recurring Savings Form Here! -->
                <RecurringSavingsForm />
              </div>
            </div>

            <!-- Stop Savings -->
            <div class="border">
              <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-exclamation-triangle text-danger mr-3 lead"></i>
                  <span class="font-weight-bold">Stop Recurring Savings</span>
                </div>
              </a>
              <div class="card border m-2 p-2 collapse" id="collapse3">
                You can discontinue your periodic debits from your bank account to savings wallet. Once this process is cancelled, you will need to set it again if you wish to enable periodic debits.
                <!-- StopSavingsForm Here! -->
                <StopSavingsForm class="mt-2" />
              </div>
            </div>

            <!-- Break Savings -->
            <div class="border">
              <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-chain-broken mr-3 lead"></i>
                  <span class="font-weight-bold">Break Savings</span>
                </div>
              </a>
              <div class="border m-2 p-2 collapse" id="collapse4">
                <div class="px-3 py-2">
                  Withdrawing from your savings wallet will break your savings target and we would like to help you reach your target. If you wish to continue,
                  <span
                    class="font-weight-bold"
                  >you will wait for a period of 10 days</span> to process the amount requested for and thereafter, your funds will be available in your main wallet.
                </div>

                <!--  Top Up Main Wallet
                Top up funds in your main wallet and use funds for savings, investments or transfer to your bank account.-->
                <!-- BreakSavingsForm -->
                <BreakSavingsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";

import RecurringSavingsForm from "./TargetSavingsAction/RecurringSavingsForm";
import DirectSavingsForm from "./TargetSavingsAction/DirectSavingsForm";
import BreakSavingsForm from "./TargetSavingsAction/BreakSavingsForm";
import StopSavingsForm from "./TargetSavingsAction/StopSavingsForm";
export default {
  name: "TargetSavingsAction",
  components: {
    Structure,
    RecurringSavingsForm,
    DirectSavingsForm,
    BreakSavingsForm,
    StopSavingsForm
  }
};
</script>


<style scoped>
.fa {
  color: blue;
  font-size: 1.5rem;
}
.link:hover {
  text-decoration: none;
}
</style>