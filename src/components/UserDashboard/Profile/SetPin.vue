<template>
  <Structure page="Set Pin">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <form class="col-md-7 border bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">Set Pin</div>
          <div class="form-group">
            <label for="number">Input Pin</label>
            <input
              type="text"
              required
              placeholder="Include Pin"
              class="form-control"
              id="email"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="number">Confirm Pin</label>
            <input
              type="text"
              required
              placeholder="Confirm Pin"
              class="form-control"
              id="email"
              name="email"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Set</button>
        </form>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "SetPin",
  components: {
    Structure
  }
};
</script>