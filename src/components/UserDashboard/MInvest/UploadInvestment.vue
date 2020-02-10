<template>
  <Structure page="Upload Investment">
    <!-- Start Savings -->
    <div class="container d-flex justify-content-center">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Investment Upload Form</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="agentname">Name</label>
                <input type="text" placeholder="Name" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="agentname">Type</label>
                <input type="text" placeholder="Type" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Location</label>
                <input type="text" placeholder="State And City" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Investors Profit Percentage</label>
                <input type="number" placeholder="eg. 10 for 10%" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Total Numbers Of Investors</label>
                <input type="number" placeholder="Total No. of Investors" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Minimun Amount To Start Investing</label>
                <input type="number" placeholder class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label for="amount">Investment Ends At...</label>
              <input
                type="date"
                required
                placeholder=" eg N50000"
                class="form-control"
                id="amount"
                name="amount"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "UploadInvestment",
  components: {
    Structure
  }
};
</script>
<style scoped>
.card {
  max-width: 50rem;
}
</style>