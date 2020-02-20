<template>
  <Structure page="Target Savings">
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="border text-center lead p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem repellendus? Corrupti magnam totam voluptatibus, aperiam sunt eveniet perspiciatis expedita, illum accusamus ipsam officia eos distinctio ullam esse libero? Cumque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum cupiditate animi culpa necessitatibus impedit tempore quam excepturi velit aspernatur molestiae nemo adipisci distinctio, dicta fugit accusantium id beatae aperiam?
          <div class="m-2 p-1">
            <i class="fa fa-arrow-down h2 text-primary d-inline-block text-center scroll"></i>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="container mt-3 d-flex justify-content-center">
          <div class="col-md-8">
            <div class="card shadow justify-content-center mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">- Select A Plan</h6>
              </div>
              <div class="card-body">
                <form class="register bg-white">
                  <div class="form-group">
                    <label>Name Your Plan</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-pencil"></i>
                        </span>
                      </div>
                      <input type="text" class="form-control" placeholder="Username" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Enter Target Amount</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-money"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Target Amount"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Select A Target Date</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </div>
                      <input type="date" class="form-control" placeholder="Target Amount" required />
                    </div>
                  </div>

                  <!--  <router-link
                    class="btn btn-primary mt-3 btn-block text-center mb-3"
                    to="#"
                  >Continue</router-link>-->
                  <button
                    type="submit"
                    class="btn btn-primary mt-3 btn-block text-center mb-3"
                  >Continue</button>
                </form>
              </div>
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
  name: "TargetSavings",
  components: {
    Structure
  }
};
</script>

<style scoped>
.scroll {
  width: 30px;
  animation: move 1s infinite alternate;
}
@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>