<template>
  <Structure page="Dashboard">
    <div class="container-fluid px-3">
      <div class>
        <!-- Set Pin-->
        <div v-if="others.setpinform" class="row mt-md-5 justify-content-center">
          <SetPin />
        </div>
        <div v-if="others.mode">
          <!-- First -->
          <div class="row mb-4 justify-content-center">
            <!-- Main Wallet -->
            <MainWallet :main_balance="main_balance" :dividends="dividends" />
            <!-- Ajo Wallet -->
            <mAjo :ajo_balance="ajo_balance" class />
            <!-- Savings Wallet -->
            <SavingsWallet :savings_balance="savings_balance" />
            <!-- Investment Wallet -->
            <Invest :investment_balance="investment_balance" />
          </div>

          <!-- Trending Investment -->
          <IndexTrendingInvestment />

          <!-- Announcement -->
          <div>
            <IndexAnnouncement />
          </div>
        </div>
      </div>
      <div class="text-center mt-5" v-if="others.loading">
        <Loader />
      </div>
    </div>
  </Structure>
</template>

    
<script>
import axios from "axios";
import Structure from "./GUserLayouts/Structure";

import MainWallet from "./Index/MainWallet";
import mAjo from "./Index/mAjo";
import SavingsWallet from "./Index/SavingsWallet";
import Invest from "./Index/Invest";

import IndexTrendingInvestment from "./Index/IndexTrendingInvestment";
import IndexAnnouncement from "./Index/IndexAnnouncement";

import Loader from "./Msave/Loader";
import SetPin from "./Index/SetPin";
import Calls from "../../Service/Calls";

export default {
  name: "index",
  components: {
    Structure,
    IndexTrendingInvestment,
    IndexAnnouncement,
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
      },
      trans_id: ""
    };
  },
  created() {
    this.trans_id = Calls.getTrans_Id();
    const token = Calls.getJwt();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
    // Get All Wallet Balance
    axios
      .get(
        `https://momentum.ng/backend/api/fetchdata/wallet/${this.trans_id}`,
        {
          headers
        }
      )
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
      .get(
        `https://momentum.ng/backend/api/fetchdata/userpin/${this.trans_id}`,
        {
          headers
        }
      )
      .then(res => {
        if (res.data.status == false && res.data.message == "Not Set") {
          this.others.loading = false;
          this.others.setpinform = true;
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
@media only screen and (min-width: 765px) {
  .first {
    transition: 0.6s all;
  }

  .first:hover {
    cursor: pointer;
    transform: translateY(8px);
  }
}
.link:hover {
  text-decoration: none;
}
</style>