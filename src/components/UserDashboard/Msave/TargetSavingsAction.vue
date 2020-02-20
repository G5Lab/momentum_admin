<template>
  <structure page="Target Savings  Action">
    <!-- Start Savings -->
    <div class="container-fluid mt-3 d-flex justify-content-center">
      <div class="col-md-8">
        <div class="card shadow justify-content-center mb-4">
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
                <form action class="border p-2 my-2">
                  <div class="form-group">
                    <label class="h6 font-weight-bold">Enter Amount To Save</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-money"></i>
                        </span>
                      </div>
                      <input type="number" class="form-control" placeholder="Enter Amount" required />
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">From Main Wallet</button>
                    <button class="btn btn-primary">From Bank</button>
                  </div>
                </form>
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
                <form action class="border p-2 my-2">
                  <div class="form-group">
                    <label class="h6 font-weight-bold">Enter Debit Amount</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-money"></i>
                        </span>
                      </div>
                      <input type="number" class="form-control" placeholder="Debit Amount" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="h6 font-weight-bold">Select A Date To Stop</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </div>
                      <input type="date" class="form-control" placeholder="Maturity Date" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="h6 font-weight-bold">Select Frequency</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-date"></i>
                        </span>
                      </div>
                      <select class="form-control">
                        <option value>Select</option>
                        <option value>Daily</option>
                        <option value>Weekly</option>
                        <option value>Monthly</option>
                      </select>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Recure</button>
                  </div>
                </form>
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
                <div class="d-flex justify-content-center">
                  <button class="btn btn-danger">Stop Savings</button>
                </div>
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
                <form action class="border p-2 m-2">
                  <div class="form-group">
                    <label class="h6 font-weight-bold">Enter Amount To Break</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-money"></i>
                        </span>
                      </div>
                      <input type="number" class="form-control" placeholder=" Amount" required />
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-primary">Break</button>
                  </div>
                </form>
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
export default {
  name: "TargetSavingsAction",
  components: {
    Structure
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