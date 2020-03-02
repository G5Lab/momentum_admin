<template>
  <form action class="border p-2 m-2">
    <div class="form-group">
      <label class="h6 font-weight-bold">Enter Amount To Break</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-money"></i>
          </span>
        </div>
        <input type="number" class="form-control" placeholder=" Amount" required />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary">Break</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "BreakSavingsForm"
};
</script>