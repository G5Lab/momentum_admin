<template>
  <Structure page="Enter Bank Details">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <form class="register bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">Bank Details</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstname">Account Name</label>
              <input
                type="text"
                class="form-control"
                required
                placeholder="Account Name"
                id="firstname"
                name="firstname"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lastname">Bank</label>
              <input
                type="text"
                class="form-control"
                required
                id="lastname"
                placeholder="Bank Name"
                name="lastname"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="number">Account Number</label>
            <input
              type="Number"
              required
              placeholder="xxxxxxxxxxxxxxxx"
              class="form-control"
              id="email"
              name="email"
            />
          </div>

          <button type="submit" class="btn btn-primary mt-4 mb-3">Enter</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "BankInfo",
  components: {
    Structure
  }
};
</script>

<style  scoped>
.register {
  min-height: 25rem;
  padding-top: 5%;
}
.container {
  margin-bottom: 50px;
}
</style>