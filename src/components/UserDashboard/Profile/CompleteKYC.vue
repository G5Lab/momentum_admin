<template>
  <Structure page="KYC">
    <div class="container">
      <div class="row justify-content-center">
        <form class="register bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">KYC Request</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="Name">Employment Status</label>
              <input type="text" class="form-control" required placeholder="Employment Status" />
            </div>
            <div class="form-group col-md-6">
              <label for="KycName">Employer Name</label>
              <input type="text" class="form-control" required placeholder="Employer Name" />
            </div>
          </div>
          <div class="form-group">
            <label for="number">Employer Address</label>
            <input
              type="text"
              required
              placeholder="Employer Address"
              class="form-control"
              id="email"
              name="email"
            />
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
            <label for="number">BVN Number</label>
            <input type="number" required placeholder="BVN Number" class="form-control" />
          </div>

          <button type="submit" class="btn btn-primary mt-2 mb-3">Submit</button>
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
  }
};
</script>

<style scoped>
.register {
  min-height: 25rem;
  padding-top: 5%;
}
.container {
  margin-bottom: 50px;
}
</style>
