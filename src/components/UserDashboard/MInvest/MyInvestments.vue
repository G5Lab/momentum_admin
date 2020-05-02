<template>
  <Structure page="My mInvest">
    <div class="container-fluid px-3">
      <div>
        <Loader v-if="loading" class="d-block text-center mt-4" />
        <div class="row">
          <div
            v-for="(investment, index) in investments"
            :key="index"
            class="col-lg-3 col-md-6 col-xl-3 mb-2"
          >
            <CardInvestment
              class="col"
              :link="'/allDetails/'+ index"
              :attachment="investment.attachment"
              :title="investment.title"
              :status="investment.status"
              :location="investment.location"
              :unit_investment="investment.unit_investment"
              :minReturn="investment.min_return_projection"
              :maxReturn="investment.max_return_projection"
              :cycle="investment.investment_cycle"
              :risk_plan="investment.risk_plan"
            />
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
import Calls from "../../../Service/Calls";
import Loader from "../MAjo/Loader";
import CardInvestment from "./categories/CardInvestment";
import axios from "axios";

export default {
  name: "MyInvestments",
  components: {
    Structure,
    Loader,
    CardInvestment
  },
  data() {
    return {
      token: "",
      trans_id: "",
      investments: [],
      loading: true
    };
  },
  methods: {
    getUserInvestments() {
      // Get Investmet
      axios
        .get(
          `https://momentum.ng/backend/api/admin/mujeeb/userinvestments/${this.trans_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          this.loading = false;
          const result = res.data;
          if (result.status == true) {
            // console.log(result);
            this.investments = result.userinvestments.reverse();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();

    if (this.token == null) {
      location.reload();
    }

    this.getUserInvestments();
  }
};
</script>