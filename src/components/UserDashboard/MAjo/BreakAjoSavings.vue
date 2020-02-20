<template>
  <Structure page="Break Ajo Savings">
    <div class="container">
      <div class="row no-gutters justify-content-center">
        <form class="col-md-7 border bg-white p-4">
          <div class="text-center text-gray-900 h4 py-4">Enter Amount To Break</div>
          <div class="form-group">
            <label for="number">Amount</label>
            <input type="number" required placeholder="Amount In Naira" class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">Password</label>
            <input type="password" required placeholder="Enter Your Password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary mt-2 mb-3">Break</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
// import BreakAjoSavingsCard from "../GUserLayouts/BreakAjoSavingsCard";
export default {
  name: "BreakAjoSavings",
  components: {
    Structure
    /* BreakAjoSavingsCard */
  }
};
</script>