<template>
  <Structure page="Top-Up Main Wallet">
    <div class="container-fluid mt-3 d-flex justify-content-center">
      <div class="col-md-8">
        <div class="card shadow justify-content-center mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Save Here!</h6>
          </div>
          <div class="card-body">
            <form class="register bg-white">
              <div class="form-group">
                <label for="amount">Amount To Save</label>
                <input
                  type="number"
                  required
                  name="amount"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>
              <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "TopUpWallet",
  components: {
    Structure
  }
};
</script>