<template>
  <Structure page="Scheduled Savings">
    <!-- Start Savings -->
    <div class="container d-flex justify-content-center">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Start Saving</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="agentname">Choose An Agent</label>
                <select class="browser-default custom-select" name="agentname" id="agentname">
                  <option value="Mr Biyi">Mr Biyi</option>
                  <option value="Mr Taiwo">Mr Taiwo</option>
                  <option value="Mr Grop">Mr Grop</option>
                  <option value="Mr John">Mr John</option>
                  <option value="Mr Top">Mr Top</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="agentname">Set Duration</label>
                <select class="browser-default custom-select" name="duration" id="duration">
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Bimonthly">Bimonthly</option>
                  <option value="triannually">Tri Annually</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="amount">Amount To Save</label>
              <input
                type="Number"
                required
                placeholder=" eg N50000"
                class="form-control"
                id="amount"
                name="amount"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-3 btn-block text-center mb-3"
            >Start Savings</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Scheduled Savings -->
    <div class="container">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Scheduled Savings</h6>
        </div>
        <div class="row card-body d-flex">
          <div class="box">
            <div>
              <span class="p text-primary mr-2">Agent:</span>
              <span class="lead font-weight-bold">Mr Hassan Shola Mide</span>
            </div>
            <div>
              <span class="small text-primary mr-2">Start Date:</span>
              <span class="p font-weight-normal">11/02/2020</span>
            </div>
            <div>
              <span class="small text-primary mr-2">End Date:</span>
              <span class="p font-weight-normal">11/12/2020</span>
            </div>
            <div>
              <span class="p text-primary mr-2">Total Savings:</span>
              <span class="lead font-weight-bold">N 709,000</span>
            </div>
            <button class="btn btn-danger">Stop Savings</button>
          </div>
          <div class="box">
            <div>
              <span class="p text-primary mr-2">Agent:</span>
              <span class="lead font-weight-bold">Mr Hassan Shola Mide</span>
            </div>
            <div>
              <span class="small text-primary mr-2">Start Date:</span>
              <span class="p font-weight-normal">11/02/2020</span>
            </div>
            <div>
              <span class="small text-primary mr-2">End Date:</span>
              <span class="p font-weight-normal">11/12/2020</span>
            </div>
            <div>
              <span class="p text-primary mr-2">Total Savings:</span>
              <span class="lead font-weight-bold">N 709,000</span>
            </div>
            <button class="btn btn-danger">Stop Savings</button>
          </div>
          <div class="box">
            <div>
              <span class="p text-primary mr-2">Agent:</span>
              <span class="lead font-weight-bold">Mr Hassan Shola Mide</span>
            </div>
            <div>
              <span class="small text-primary mr-2">Start Date:</span>
              <span class="p font-weight-normal">11/02/2020</span>
            </div>
            <div>
              <span class="small text-primary mr-2">End Date:</span>
              <span class="p font-weight-normal">11/12/2020</span>
            </div>
            <div>
              <span class="p text-primary mr-2">Total Savings:</span>
              <span class="lead font-weight-bold">N 709,000</span>
            </div>
            <button class="btn btn-danger">Stop Savings</button>
          </div>
          <div class="box">
            <div>
              <span class="p text-primary mr-2">Agent:</span>
              <span class="lead font-weight-bold">Mr Hassan Shola Mide</span>
            </div>
            <div>
              <span class="small text-primary mr-2">Start Date:</span>
              <span class="p font-weight-normal">11/02/2020</span>
            </div>
            <div>
              <span class="small text-primary mr-2">End Date:</span>
              <span class="p font-weight-normal">11/12/2020</span>
            </div>
            <div>
              <span class="p text-primary mr-2">Total Savings:</span>
              <span class="lead font-weight-bold">N 709,000</span>
            </div>
            <button class="btn btn-danger">Stop Savings</button>
          </div>
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
</style>