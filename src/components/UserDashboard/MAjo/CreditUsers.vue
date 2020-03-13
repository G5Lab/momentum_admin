<template>
  <Structure page="Credit Users">
    <div class="container-fluid">
      <div class="row card shadow justify-content-center mx-1 mb-4">
        <div class>
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Credit User Form</h6>
          </div>
          <div class="card-body">
            <form class="register bg-white">
              <div class="form-group">
                <label for="name">Name Of The User</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Name Of The User"
                />
              </div>
              <div class="form-group">
                <label for="name">Amount</label>
                <input
                  type="number"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Amount To Send"
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary mt-3 mx-auto d-block px-4 text-center mb-3"
              >Send</button>
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
  name: "CreditUsers",
  components: {
    Structure
  }
};
</script>