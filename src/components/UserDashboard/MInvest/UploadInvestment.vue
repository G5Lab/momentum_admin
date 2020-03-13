<template>
  <Structure page="Upload Investment">
    <!-- Upload Investment -->
    <div class="container d-flex justify-content-center">
      <div class="card CardOne shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Investment Upload Form</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="agentname">Name</label>
                <input type="text" required placeholder="Name" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="agentname">Type</label>
                <input type="text" required placeholder="Type" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Location</label>
                <input type="text" required placeholder="State And City" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Investors Profit Percentage</label>
                <input type="number" required placeholder="eg. 10 for 10%" class="form-control" />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Total Numbers Of Investors</label>
                <input
                  type="number"
                  required
                  placeholder="Total No. of Investors"
                  class="form-control"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="location">Minimun Amount To Start Investing</label>
                <input type="number" required placeholder class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label>Investment Ends At...</label>
              <input type="date" required placeholder=" eg N50000" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Submit</button>
          </form>
        </div>
      </div>
    </div>

    <!-- Uploaded Investment -->
    <div class="container">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Uploaded Investment</h6>
        </div>
        <div class="row card-body d-flex">
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import UploadedInvestmentCard from "../GUserLayouts/UploadedInvestmentCard";
export default {
  name: "UploadInvestment",
  components: {
    Structure,
    UploadedInvestmentCard
  }
};
</script>


<style scoped>
.CardOne {
  max-width: 50rem;
}
</style>