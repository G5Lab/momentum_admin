<template>
  <Structure page="View Investments">
    <div class="container">
      <div class="row">
        <ViewInvestmentCard
          name="Farm"
          location="Ibadan"
          state="Selling"
          amount="20,000"
          interest="10% return in 5 months"
        />
        <ViewInvestmentCard
          name="Farm"
          location="Ibadan"
          state="Selling"
          amount="20,000"
          interest="10% return in 5 months"
        />
        <ViewInvestmentCard
          name="Bussiness"
          location="Ikeja"
          state="Selling"
          amount="50,000"
          interest="15% return in 5 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Train"
          location="Kaduna"
          state="Selling"
          amount="200,000"
          interest="5% return in 9 months"
        />
        <ViewInvestmentCard
          name="Transport"
          location="Lagos"
          state="Selling"
          amount="100,000"
          interest="10% return in 5 months"
        />
      </div>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
import ViewInvestmentCard from "../GUserLayouts/ViewInvestmentCard";
export default {
  name: "ViewInvestment",
  components: {
    Structure,
    ViewInvestmentCard
  }
};
</script>