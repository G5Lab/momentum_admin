<template>
  <Structure page="Dashboard">
    <!-- Trending Investment -->
    <div class="container mb-5">
      <div class="row no-gutters">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Trending Investment</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <InvestmentCard
                  name="Train"
                  location="Kaduna"
                  state="Selling"
                  amount="200,000"
                  interest="5% return in 9 months"
                />
                <InvestmentCard
                  name="Train"
                  location="Kaduna"
                  state="Selling"
                  amount="200,000"
                  interest="5% return in 9 months"
                />
                <InvestmentCard
                  name="Train"
                  location="Kaduna"
                  state="Selling"
                  amount="200,000"
                  interest="5% return in 9 months"
                />
                <InvestmentCard
                  name="Train"
                  location="Kaduna"
                  state="Selling"
                  amount="200,000"
                  interest="5% return in 9 months"
                />
              </div>
              <router-link
                to="/viewinvestment"
                class="btn d-inline-block text-center btn-success"
              >View All</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Break Ajo Savings And Create Ticket Form -->
    <div class="container mb-5">
      <div class="row">
        <!-- Break Ajo Savings -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Break Ajo Savings</h6>
            </div>
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <BreakAjo />
                  <BreakAjo />
                  <BreakAjo />
                  <BreakAjo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Create Ticket -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Create Ticket</h6>
            </div>
            <div class="card-body">
              <form class="register bg-white">
                <div class="form-group">
                  <label for="exampleTextarea">Ticket Name</label>
                  <input type="text" class="form-control" placeholder="Enter Ticket Name" name id />
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Ticket Name</label>
                  <input type="text" class="form-control" placeholder="Enter Ticket Name" name id />
                </div>

                <div class="form-group">
                  <label for="exampleTextarea">Ticket Name</label>
                  <input type="text" class="form-control" placeholder="Enter Ticket Name" name id />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-3 btn-block text-center mb-3"
                >Create Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Announcement -->
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <AnnouncementCard />
        </div>
        <div class="col-md-3">
          <AnnouncementCard />
        </div>
        <div class="col-md-3">
          <AnnouncementCard />
        </div>
        <div class="col-md-3">
          <AnnouncementCard />
        </div>
      </div>
    </div>

    <!-- Write To Us -->

    <div class="container d-flex justify-content-center mt-4">
      <div class="card shadow last justify-content-center mb-4">
        <div class="card-body">
          <h1 class="h1 text-dark text-center">Write To Us</h1>

          <form class="register bg-white">
            <div class="form-group">
              <label for="exampleTextarea">We Are Glad To Hear From You</label>
              <textarea class="form-control" id="exampleTextarea" rows="7"></textarea>
            </div>
            <div class="form-group">
              <label for>Add File</label>
              <input type="file" placeholder="File" class="form-control" id />
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-3 btn-block text-center mb-3"
            >Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "./GUserLayouts/Structure";
import InvestmentCard from "./GUserLayouts/ViewInvestmentCard";
import BreakAjo from "./GUserLayouts/BreakAjoSavingsCard";
import AnnouncementCard from "./GUserLayouts/AnnouncementCard";
export default {
  name: "index",
  components: {
    Structure,
    InvestmentCard,
    BreakAjo,
    AnnouncementCard
  }
};
</script>
<style scoped>
.last {
  width: 80%;
}
</style>