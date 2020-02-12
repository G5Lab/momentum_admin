<template>
  <Structure page="Investment History">
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Invested Amount</th>
            <th scope="col">ROI</th>
            <th scope="col">Interest</th>
            <th scope="col">Total Income</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">11/02/2019</th>
            <td>Transportation</td>
            <td>SDCar</td>
            <td>10% of the Invetment per annum</td>
            <td>N1029</td>
            <td>10%</td>
            <td>12000</td>
            <td>129000</td>
          </tr>
          <tr>
            <th scope="row">11/02/2019</th>
            <td>Feeding</td>
            <td>Mooile Resturant</td>
            <td>15% of the Invetment per annum</td>
            <td>N129</td>
            <td>15%</td>
            <td>20000</td>
            <td>115000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "InvestmentHistory",
  components: {
    Structure
  }
};
</script>