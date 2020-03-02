<template>
  <Structure page="Savings History">
    <h2>{{go}}</h2>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Transaction</th>
              <th scope="col">Amount</th>
              <th scope="col">Details</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11/02/2019</th>
              <td class="bg-primary text-white">Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td class="bg-primary text-white">Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td class="bg-danger text-white">Debit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td>Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td class="bg-danger text-white">Debit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td>Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td>Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td>Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
            <tr>
              <th scope="row">11/02/2019</th>
              <td>Credit</td>
              <td>N1029</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim es</td>
              <td>N40000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Structure>
</template>
<script>
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
export default {
  name: "SavingsHistory",
  components: {
    Structure
  },
  data() {
    return {
      go: ""
    };
  },
  created() {
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/savings/${trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
        this.go = trans_id;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>