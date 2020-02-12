<template>
  <Structure page="Scheduled Savings">
    <!-- Schedule Savings -->
    <div class="container d-flex justify-content-center">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Start Saving</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="agentname">Amount</label>
                <input type="number" class="form-control" placeholder="Amount" />
              </div>
              <div class="form-group col-md-6">
                <label for="agentname">Frequency</label>
                <select
                  class="browser-default custom-select"
                  required
                  name="duration"
                  id="duration"
                >
                  <option value>Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Bimonthly">Bimonthly</option>
                  <option value="triannually">Tri Annually</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="amount">Start Date</label>
              <input type="date" required class="form-control" />
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-3 btn-block text-center mb-3"
            >Start Savings</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "ScheduledSavings",
  components: {
    Structure
  }
};
</script>
