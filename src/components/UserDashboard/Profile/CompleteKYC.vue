<template>
  <Structure page="KYC">
    <div class="container">
      <div class="row justify-content-center">
        <form class="register bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">KYC Request</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="Name">Name</label>
              <input
                type="text"
                class="form-control"
                required
                placeholder="Name"
                id="Name"
                name="Name"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="KycName">KYC Name</label>
              <input
                type="text"
                class="form-control"
                required
                id="KycName"
                placeholder="KycName"
                name="KycName"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="number">Description</label>
            <input type="text" required placeholder class="form-control" id="email" name="email" />
          </div>

          <button type="submit" class="btn btn-primary mt-4 mb-3">Submit</button>
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
