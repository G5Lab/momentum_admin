<template>
  <Structure page="Upload Investment">
    <!-- Upload Investment -->
    <div class="container-fluid px-3">
      <div class="d-flex justify-content-center">
        <div v-if="premium" class="card CardOne shadow justify-content-center mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Investment Upload Form</h6>
          </div>
          <div class="card-body">
            <p
              class="mb-3 text-center font-gray-900 rounded"
            >You can submit a proposal for investments to the momentum board and begin the process to listing your business in the investment pool.</p>
            <form class="register bg-white">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    v-model="title"
                    required
                    placeholder="Name of Investment"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Investment Category</label>
                  <select v-model="category" class="browser-default custom-select" required>
                    <option value disabled selected>Select</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>Required Capital</label>
                  <input type="text" required placeholder="Enter Amount" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                  <label>Expected Returns</label>
                  <input type="text" required placeholder="Enter Amount" class="form-control" />
                </div>
              </div>
              <div class="form-group">
                <label>Overview</label>
                <input
                  type="text"
                  required
                  placeholder="Brief Overview Of Investment"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Uploaad Business Brief</label>
                <input
                  type="file"
                  required
                  placeholder="Brief Overview Of Investment"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary mt-3 btn-block text-center mb-3">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div class="container">
        <div v-if="notPremium" class>
          <p class="text-center my-5 my-2 h1 text-danger">{{notPremium}}</p>
        </div>
      </div>

      <!-- Uploaded Investment -->
      <!-- <div class="container">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">- Uploaded Investment</h6>
        </div>
        <div class="row card-body d-flex">
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
          <UploadedInvestmentCard />
        </div>
      </div>
      </div>-->
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
// import UploadedInvestmentCard from "../GUserLayouts/UploadedInvestmentCard";
export default {
  name: "UploadInvestment",
  components: {
    Structure
    // UploadedInvestmentCard
  },
  data() {
    return {
      category: "",

      level: "",
      notPremium: "",
      premium: false,

      title: ""
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.level = this.$session.get("user").level;

    if (this.level >= 4) {
      this.premium = true;
    } else {
      this.notPremium = "You Need To Upgrade Your Membership ";
    }
  }
};
</script>


<style scoped>
.CardOne {
  max-width: 50rem;
}
</style>