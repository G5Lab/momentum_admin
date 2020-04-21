<template>
  <Structure page="Momentum Investments">
    <div class="container-fluid px-3">
      <div>
        <slot></slot>
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
      trans_id: ""
    };
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
