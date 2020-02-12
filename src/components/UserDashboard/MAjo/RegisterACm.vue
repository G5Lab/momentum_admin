<template>
  <Structure page="Register A Cm">
    <div class="container d-flex justify-content-center">
      <div class="card shadow justify-content-center mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Cm Registration Form</h6>
        </div>
        <div class="card-body">
          <form class="register bg-white">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="address">State</label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  placeholder="State"
                  id="address"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="address">City</label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  placeholder="City"
                  id="address"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="address">Land Address</label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  placeholder="Land Address"
                  id="address"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "RegisterACm",
  components: {
    Structure
  }
};
</script>