<template>
  <Structure page="KYC Request Form">
    <div class="container">
      <div class="row justify-content-center px-1">
        <form v-on:submit.prevent="submitKyc" class="register border col-md-11 bg-white p-3">
          <div class="text-center text-gray-900 h5 py-2">Kyc Request</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Employment Status</label>
              <select name class="form-control">
                <option value disabled selected>Select</option>
                <option value="Employee">Employee</option>
                <option value="Worker">Worker</option>
                <option value="Self Employed">Self Employed</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="KycName">Employer Name</label>
              <input type="text" class="form-control" required placeholder="Employer Name" />
            </div>
          </div>
          <div class="form-group">
            <label>Employer Address</label>
            <input type="text" required placeholder="Employer Address" class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">Utility Bill</label>
            <input type="file" required class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">National Identification</label>
            <input type="file" required class="form-control" />
          </div>
          <div class="form-group">
            <label>BVN Number</label>
            <input type="number" required placeholder="BVN Number" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary mx-auto d-block mt-2 mb-3">Submit Kyc</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "CompleteKYC",
  components: {
    Structure
  },
  data() {
    return {};
  },
  methods: {
    submitKyc() {}
  }
};
</script>



