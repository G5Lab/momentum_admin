<template>
  <Structure page="Dashboard">
    <!-- Set Pin-->
    <div v-if="others.setpinform" class="row mt-5 justify-content-center">
      <SetPin />
    </div>
    <div v-if="others.mode">
      <div class="container-fluid">
        <!-- First -->
        <div
          class="container-fluid mb-1 d-none d-md-block text-muted"
        >These are Your Current Wallet Balance And Short Details</div>
        <div class="row mb-4">
          <!-- Main Wallet -->
          <MainWallet :main_balance="main_balance" :dividends="dividends" />
          <!-- Ajo Wallet -->
          <mAjo :ajo_balance="ajo_balance" />
          <!-- Savings Wallet -->
          <SavingsWallet :savings_balance="savings_balance" />
          <!-- Investment Wallet -->
          <Invest :investment_balance="investment_balance" />
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
    </div>
    <div class="fixed" v-if="others.loading">
      <Loader />
    </div>
  </Structure>
</template>


    
<script>
import axios from "axios";
import Structure from "./GUserLayouts/Structure";
import InvestmentCard from "./GUserLayouts/ViewInvestmentCard";
import AnnouncementCard from "./GUserLayouts/AnnouncementCard";

import MainWallet from "./Index/MainWallet";
import mAjo from "./Index/mAjo";
import SavingsWallet from "./Index/SavingsWallet";
import Invest from "./Index/Invest";
import Loader from "../Auth/Loader";
import SetPin from "./Index/SetPin";

export default {
  name: "index",
  components: {
    Structure,
    InvestmentCard,
    AnnouncementCard,
    mAjo,
    MainWallet,
    SavingsWallet,
    Invest,
    Loader,
    SetPin
  },
  data() {
    return {
      main_balance: "",
      dividends: "",
      ajo_balance: "",
      savings_balance: "",
      investment_balance: "",
      others: {
        mode: false,
        loading: true,
        setpinform: false
      }
    };
  },
  created() {
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    // Get All Wallet Balance
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/wallet/${trans_id}`, {
        headers
      })
      .then(res => {
        this.main_balance = res.data.wallet.main_balance;
        this.savings_balance = res.data.wallet.savings_balance;
        this.investment_balance = res.data.wallet.investment_balance;
        this.ajo_balance = res.data.wallet.ajo_balance;
        this.interest = res.data.wallet.interest;
        this.dividends = res.data.wallet.dividends;
        this.returns = res.data.wallet.returns;
      })
      .catch(err => {
        console.log(err);
      });

    // Check if Pin isset
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/userpin/${trans_id}`, {
        headers
      })
      .then(res => {
        if (res.data.status == false && res.data.message == "Not Set") {
          this.others.loading = false;
          this.others.setpinform = true;
          console.log(res.data);
        } else {
          this.others.loading = false;
          this.others.mode = true;
          this.others.setpinform = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style scoped>
.fixed {
  position: fixed;
  top: 27%;
  right: 33%;
  z-index: 2;
}
@media (max-width: 768px) {
  .container-fluid {
    padding-left: 0.7rem;
  }

  .fixed {
    top: 30%;
    right: 30%;
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