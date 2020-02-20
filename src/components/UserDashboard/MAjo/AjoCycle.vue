<template>
  <Structure page="Ajo Cycle">
    <div class="container-fluid">
      <div class="row no-gutters justify-content-center">
        <form class="col-md-7 border bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">Cycle Your Ajo</div>
          <div class="form-group">
            <label for="number">Amount</label>
            <input type="number" required placeholder="Amount In Naira" class="form-control" />
          </div>
          <div class="form-group">
            <label for="agentname">Frequency</label>
            <select class="browser-default custom-select" required name="duration" id="duration">
              <option value>Select Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Bimonthly">Bimonthly</option>
              <option value="triannually">Tri Annually</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Start</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "AjoCycle",
  components: {
    Structure
  }
};
</script>