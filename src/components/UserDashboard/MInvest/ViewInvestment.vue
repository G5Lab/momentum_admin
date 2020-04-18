<template>
  <Structure page="Momentum Investments">
    <div class="container-fluid px-3">
      <div>
        <div v-if="premium">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class>
      <div v-if="notPremium" class>
        <p class="text-center my-md-5 h1 text-danger">{{notPremium}}</p>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "ViewInvestment",
  components: {
    Structure
  },
  data() {
    return {
      token: "",
      trans_id: "",

      level: "",
      premium: false,
      notPremium: ""
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.level = this.$session.get("user").level;

    if (this.level >= 4) {
      this.premium = true;
    } else {
      this.loading = false;
      this.notPremium = "You Need To Upgrade Your Membership ";
    }
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  }
};
</script>

<style>
.nav1 {
  border-bottom: 2px solid blue;
}
.nav-link {
  display: inline-block;
  color: rgb(56, 56, 56);
}
.scroll {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
