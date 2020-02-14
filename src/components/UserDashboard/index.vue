<template>
  <Structure page="Dashboard">
    <div class="container-fluid">
      <!-- First -->
      <div class="row">
        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-2">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Main Wallet</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N440,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-2">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">mSave</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N95,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-2">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">mInvest</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N81,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-2">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">mAjo</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">N900,000</div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Second -->
      <div class="row">
        <!-- Trending Investment -->
        <div class="col-xl-7 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">- Trending Investments</h6>
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
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Create Ticket -->
        <div class="col-xl-5 col-lg-5">
          <div class="card p-0 shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
            >
              <h6 class="m-0 font-weight-bold text-primary">- Create Ticket</h6>
            </div>
            <!-- Card Body -->
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
      <!-- Third -->
      <div class="card d-none d-md-block shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">mSave History</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Details</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td class="bg-primary text-white">Credit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td class="bg-primary text-white">Credit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td class="bg-danger text-white">Debit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td>Credit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td class="bg-danger text-white">Debit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td>Credit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
                <tr>
                  <th scope="row">11/02/2019</th>
                  <td>Credit</td>
                  <td>N1029</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
                  <td>N40000</td>
                </tr>
              </tbody>
            </table>
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
          <div class="col-xl-3 col-md-6 mb-4">
            <AnnouncementCard />
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
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
    /* padding-right: initial !important; */
  }
}
</style>