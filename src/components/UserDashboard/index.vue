<template>
  <Structure page="Dashboard">
    <div class="container-fluid">
      <!-- First -->
      <div
        class="container-fluid mb-1 d-none d-md-block text-muted"
      >These are Your Current Wallet Balance And Short Details</div>
      <div class="row mb-4">
        <!-- Main Wallet -->
        <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
          <div class="card border-left-primary shadow h-100 pt-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div
                    class="text-xs font-weight-bold text-primary text-900 text-uppercase mb-1"
                  >Main Wallet</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N440,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
            <div class="card-footer m-0 p-1 d-flex justify-content-center">
              <small>
                <span class>Dividends:</span>
                <span class="h6 m-2 font-weight-bold">N90,000</span>
              </small>
            </div>
          </div>
        </div>

        <!-- mAjo -->
        <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
          <div class="card border-left-danger shadow h-100 pt-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">mAjo</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N95,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
              <div class="mt-3 small mb-0">
                Amount:
                <span class="text-danger">N4,000</span>
              </div>
            </div>
            <div class="card-footer m-0 p-1 d-flex justify-content-center">
              <small>
                <span class>Cycle:</span>
                <span class="h6 m-2 font-weight-bold">Daily</span>
              </small>
            </div>
          </div>
        </div>

        <!-- mSave -->
        <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
          <div class="card border-left-info shadow h-100 pt-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">mSave</div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3 small mb-0">
                    Current Amount:
                    <span class="text-info">N450,000</span>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
            <div class="card-footer m-0 p-1 d-flex justify-content-center">
              <small>
                <span class>Target:</span>
                <span class="h6 m-2 font-weight-bold">N900,000</span>
              </small>
            </div>
          </div>
        </div>

        <!-- mInvest -->
        <div class="col-xl-3 first col-md-5 col-lg-6 mb-2">
          <div class="card border-left-warning shadow h-100 pt-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">mInvest</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N90,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
              <div class="mt-3 small mb-0">
                Expected Return:
                <span class="text-warning">N450,000</span>
              </div>
            </div>
            <div class="card-footer m-0 p-1 d-flex justify-content-center">
              <small>
                <span class>Interest:</span>
                <span class="h6 m-2 font-weight-bold">20%</span>
                <span>Every Month</span>
              </small>
            </div>
          </div>
        </div>
      </div>
      <!-- Second -->
      <div class="row">
        <!-- Trending Investment -->
        <div class="col-xl-12 col-lg-12">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3">
              <h6 class="m-0 mb-2 h5 font-weight-bold text-primary">- Trending Investments</h6>
              <div class="container-fluid mb-1 small text-muted">
                You Can Invest In Any Of The Investment below
                <span
                  class="bg-dark p-1 text-white"
                >Note</span>
                You can also Fill The Upload Investment Form If You Need Investors for your business
              </div>
            </div>
            <div class="container-fluid card-body">
              <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                  <router-link class="link" to="/invest">
                    <InvestmentCard
                      name="Jokodn doop"
                      interest="10%"
                      location="Lagos"
                      amount="10000"
                      state="Selling"
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Announcement -->
      <div class="card">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Announcements</h6>
        </div>
        <div class="row no-gutters">
          <div class="col-xl-3 col-md-6 mb-4">
            <AnnouncementCard />
          </div>
          <div class="col-xl-3 d-none d-md-block col-md-6 mb-4">
            <AnnouncementCard />
          </div>
          <div class="col-xl-3 d-none d-md-block col-md-6 mb-4">
            <AnnouncementCard />
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <AnnouncementCard />
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "./GUserLayouts/Structure";
import InvestmentCard from "./GUserLayouts/ViewInvestmentCard";
import AnnouncementCard from "./GUserLayouts/AnnouncementCard";
export default {
  name: "index",
  components: {
    Structure,
    InvestmentCard,
    AnnouncementCard
  }
};
</script>
<style scoped>
@media (max-width: 768px) {
  .container-fluid {
    padding-left: 0.7rem;
  }
}
.first {
  transition: 0.6s all;
}
.first:hover {
  cursor: pointer;
  transform: translateY(8px);
}
.link:hover {
  text-decoration: none;
}
</style>