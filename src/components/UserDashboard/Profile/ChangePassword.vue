<template>
  <Structure page="Security">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <form class="col-md-7 border bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">Change Password And Pin</div>
          <div class="form-group">
            <label for="number">New Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              class="form-control"
              id="email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="number">Confirm Password</label>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              class="form-control"
              id="email"
              name="email"
            />
          </div>

          <div class="form-group">
            <label for="number">Input Former Password To Save</label>
            <input type="password" required placeholder="Former Password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Save</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "ChangePassword",
  components: {
    Structure
  }
};
</script>