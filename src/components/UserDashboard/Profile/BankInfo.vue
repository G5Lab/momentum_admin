<template>
  <Structure page="Enter Bank Details">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <form v-on:submit.prevent="submitBkinfo" class="col-md-10 border bg-white p-3">
            <div class="text-center text-gray-900 h5 py-3">Bank Details</div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstname">Account Name</label>
                <input
                  v-model="accountName"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Account Name"
                  id="firstname"
                  name="firstname"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="lastname">Bank Name</label>
                <input
                  v-model="bankName"
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
                v-model="accountNumber"
                type="Number"
                required
                placeholder="xxxxxxxxxxxxxxxx"
                class="form-control"
                id="email"
                name="email"
              />
            </div>
            <button type="submit" class="btn btn-primary d-block px-3 mx-auto my-3">Submit</button>
          </form>
        </div>
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
  },
  data() {
    return {
      accountName: "",
      bankName: "",
      accountNumber: ""
    };
  },
  methods: {
    submitBkinfo() {}
  }
};
</script>
