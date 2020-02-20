<template>
  <Structure page="Withdraw">
    <div class="container-fluid col-md-7">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Withdraw From Any Wallet</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-group">
              <label for="name">Amount</label>
              <input
                type="number"
                name="name"
                class="form-control"
                id="name"
                placeholder="Amount To Withdraw"
              />
            </div>
            <div class="form-group">
              <label for="name">Wallet</label>
              <select class="custom-select form-control">
                <option value>Select Wallet</option>
                <option value>mSave</option>
                <option value>mInvest</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Send</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "Withdraw",
  components: {
    Structure
  }
};
</script>