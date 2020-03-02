<template>
  <structure page="Target Savings  Action">
    <!-- Start Savings -->
    <div class="container-fluid p-0">
      <div class="container mx-0">
        <div class="row justify-content-center my-3">
          <div class="col-md-12 col-lg-10">
            <div class="card shadow border">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem blanditiis eius quaerat quis ea illo aut aliquid aperiam adipisci maiores porro omnis aspernatur ad sed deserunt. Perferendis, tempore maiores.
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
                    Rora Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla quaerat ipsam quo mollitia, voluptatem eaque cum molestias optio nesciunt, laboriosam ea omnis tempora quidem doloremque ipsum, eum assumenda perferendis.
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
                    Loop Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo cumque laborum, dolorum excepturi soluta placeat animi ipsum nam magnam exercitationem possimus praesentium illo eum. At aperiam soluta adipisci quos.
                    <!-- StopSavingsForm Here! -->
                    <StopSavingsForm />
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
                    4 ansd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugit nobis molestias voluptatum porro quidem quo natus, facere beatae ipsa molestiae, provident aliquam perspiciatis quia, expedita cupiditate iusto fuga commodi!
                    <!-- BreakSavingsForm -->
                    <BreakSavingsForm />
                  </div>
                </div>
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