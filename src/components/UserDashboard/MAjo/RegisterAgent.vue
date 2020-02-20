<template>
  <Structure page="Register an Agent">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Agent Registration Form</h6>
            </div>
            <div class="card-body">
              <form class="bg-white">
                <div class="form-group">
                  <label for="name">Enter Agents Username</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Username"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-3 btn-block text-center mb-3"
                >Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "RegisterAgent",
  components: {
    Structure
  }
};
</script>