<template>
  <structure page="Direct Savings">
    <!-- Start Savings -->
    <div class="container d-flex justify-content-center">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Save Here!</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="amount">Amount To Save</label>
                <input
                  type="number"
                  required
                  name="amount"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="saveto">Save To</label>
                <select class="form-control" name id>
                  <option value="MainWallet">Source</option>
                  <option value="MainWallet">Main Wallet</option>
                  <option value="Bank">Bank Wallet</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="description">Description of The Save</label>
              <input
                type="text"
                placeholder="why you want to save"
                class="form-control"
                id="description"
                name="description"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Save</button>
          </form>
        </div>
      </div>
    </div>
  </structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "DirectSavings",
  components: {
    Structure
  }
};
</script>

<style scoped>
</style>