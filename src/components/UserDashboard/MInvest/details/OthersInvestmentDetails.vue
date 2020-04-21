<template>
  <Structure page="Investment Details">
    <Loader v-if="loading" class="text-center d-block" />
    <DetailsCard
      :arrive="arrive"
      :notPremium="notPremium"
      :premium="premium"
      :attachment="investmentDetails.attachment"
      :title="investmentDetails.title"
      :category="investmentDetails.category"
      :min_return_projection="investmentDetails.min_return_projection"
      :max_return_projection="investmentDetails.max_return_projection"
      :unit_investment="investmentDetails.unit_investment"
      :unit_available="investmentDetails.unit_available"
      :location="investmentDetails.location"
      :risk_plan="investmentDetails.risk_plan"
      :partners="investmentDetails.partners"
      :details="investmentDetails.details"
      :start_date="investmentDetails.start_date"
      :end_date="investmentDetails.end_date"
      :investment_cycle="investmentDetails.investment_cycle"
    >
      <Form
        :email="email"
        :token="token"
        :trans_id="trans_id"
        :investmentDetails="investmentDetails"
      />
    </DetailsCard>
  </Structure>
</template>


<script>
import Loader from "../../MAjo/Loader";
import Structure from "../../GUserLayouts/Structure";
import DetailsCard from "./reuseable/DetailsCard";
import Form from "./reuseable/Form";

import Calls from "../../../../Service/Calls";
import axios from "axios";

export default {
  name: "OthersInvestmentDetails",
  components: {
    Structure,
    DetailsCard,
    Form,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      email: "",

      investmentDetails: [],
      loading: true,
      related: [],

      arrive: false,
      premium: false,
      notPremium: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fetch(id) {
      axios
        .get(`https://momentum.ng/backend/api/investments/investments`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
          }
        })
        .then(res => {
          this.loading = false;
          this.arrive = true;
          if (res.data.data.length == 0) {
            this.onMaterials = "Thers is currently no investment";
          } else {
            this.related = res.data.data
              .slice()
              .reverse()
              .slice(1, 3);
            var allInvestment = res.data.data.slice().reverse();

            allInvestment = allInvestment.filter(function(item) {
              if (item.category == "others") {
                return item;
              }
            });
            this.investmentDetails = allInvestment[id];
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
    Calls.getUsers().then(res => {
      this.level = res.level;
      this.email = res.email;
      this.fetch(this.$route.params.id);

      if (this.level >= 4) {
        this.premium = true;
      } else {
        this.notPremium = "You Need To Upgrade Your Membership ";
      }
    });
  },

  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  }
};
</script>
