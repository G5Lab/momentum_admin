<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <Topbar />
      <!-- End of Topbar -->

      <!-- Begin Page Content -->
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">mINVEST</h1>
        </div>

        <div class="row">
          <!-- Crowd Investment -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                    >Crowd Investment</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Start Investment Offer -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >Start Investment Offer</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Investment Update/Report -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-info text-uppercase mb-1"
                    >Investment Update/Report</div>
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
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Distribute Profit Investment -->
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                    >Distribute Profit Investment</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Investment Report -->
          <div class="col-lg-6">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Investment Report</h6>
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusantium tenetur maxime reiciendis consectetur eligendi qui, ipsam praesentium quasi, ut dolor cupiditate libero nobis sint. Eligendi totam suscipit natus veniam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi sequi tenetur, molestiae voluptates eaque nesciunt nihil, laborum quos adipisci ad aliquam? Est ut enim doloribus dicta ea vero impedit.
              </div>
            </div>
          </div>

          <!-- Terminate Investment -->
          <div class="col-lg-6">
            <div class="card shadow mb-4">
              <a
                href="#collapseCardExample"
                class="d-block card-header py-3"
                data-toggle="collapse"
                role="button"
                aria-expanded="true"
                aria-controls="collapseCardExample"
              >
                <h6 class="m-0 font-weight-bold text-primary">Terminate Investment</h6>
              </a>
              <!-- Card Content - Collapse -->
              <div class="collapse show" id="collapseCardExample">
                <div class="card-body">
                  This is a collapsable card example using Bootstrap's built in collapse functionality.
                  <strong>Click on the card header</strong> to see the card body collapse and expand!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <Footer />
    <!-- Footer -->
  </div>
</template>

<script>
import Topbar from "../GLayouts/Topbar";
import Footer from "../GLayouts/Footer";
export default {
  name: "Body",
  components: {
    Footer,
    Topbar
  }
};
</script>

<style  scoped>
</style>