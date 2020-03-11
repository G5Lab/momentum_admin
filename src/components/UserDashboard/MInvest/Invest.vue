<template>
  <Structure page="Invest Now">
    <div class="container-fluid text-dark">
      <div class="row">
        <div class="col-xl-7 col-md-7 mb-2">
          <div class="card">
            <div class="card-body text-dark">
              <p class="h2">Farm And Animal Rearing</p>
              <p class="p">
                <span class="rounded small p-1 bg-light">From:</span> Wale
              </p>
              <p class="p">
                <span class="small rounded p-1 bg-light">Description:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio illo, non accusantium impedit nesciunt incidunt architecto dignissimos omnis. Soluta voluptates culpa autem quidem qui dolorem eius laborum, ad accusamus.
              </p>
              <p class="p">
                <span class="small rounded p-1 bg-light">Risks Involved:</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odio illo, non accusantium impedit nesciunt incidunt architecto dignissimos omnis. Soluta voluptates culpa autem quidem qui dolorem eius laborum, ad accusamus.
              </p>
              <p class="m-1">Intrest: 20%</p>
              <p class="m-1">Price : N30,000</p>
              <p class="m-1">Available Units : 19</p>
              <p class="m-1">Location : 19, bald Street, Lagos Nigeria.</p>
              <button class="btn btn-dark">Invest Now</button>
            </div>
          </div>
        </div>

        <!-- Related Investments -->
        <div class="d-none d-md-block col-xl-5 col-md-5 mb-2">
          <p class="lead h5 text-dark font-weight-normal">Related Investments</p>
          <div class="row no-gutters">
            <div class="col-xl-6 mb-2">
              <div class="mb-2">
                <router-link class="nav-link" to="/invest">
                  <ViewInvestmentCard
                    name="Farm"
                    location="Ibadan"
                    state="Selling"
                    amount="20,000"
                    interest="10% return in 5 months"
                  />
                </router-link>
              </div>
            </div>
            <div class="col-xl-6 col mb-2">
              <div class="mb-2">
                <router-link class="nav-link" to="/invest">
                  <ViewInvestmentCard
                    name="Farm"
                    location="Ibadan"
                    state="Selling"
                    amount="20,000"
                    interest="10% return in 5 months"
                  />
                </router-link>
              </div>
            </div>
            <div class="col-xl-6 col mb-2">
              <div class="mb-2">
                <router-link class="nav-link" to="/invest">
                  <ViewInvestmentCard
                    name="Farm"
                    location="Ibadan"
                    state="Selling"
                    amount="20,000"
                    interest="10% return in 5 months"
                  />
                </router-link>
              </div>
            </div>
            <div class="col-xl-6 col mb-2">
              <div class="mb-2">
                <router-link class="nav-link" to="/invest">
                  <ViewInvestmentCard
                    name="Farm"
                    location="Ibadan"
                    state="Selling"
                    amount="20,000"
                    interest="10% return in 5 months"
                  />
                </router-link>
              </div>
            </div>

            <!-- <div class="mr-auto col-xl-5 col-md-5 mb-2">
              <router-link to="/viewinvestment" class="btn btn-primary">View More</router-link>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "Invest",
  components: {
    Structure
  }
};
</script>