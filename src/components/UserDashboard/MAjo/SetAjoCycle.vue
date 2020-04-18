<template>
  <Structure page="Set Ajo Cycle ">
    <div class="container-fluid">
      <Loader class="text-center" v-if="loading" />
      <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
      <div class="row justify-content-center">
        <form v-on:submit.prevent="SetCycle" class="col-md-10 py-4 px-3 bg-white shadow col-lg-8">
          <div class="text-center text-primary font-weight-bold h4 py-md-3">Set Your Ajo Plan</div>
          <p
            class="p-2 text-center font-gray-900"
          >You have the option to change the frequency and amount you want to save through Ajo</p>
          <hr class="my-3" />
          <label>Enter Ajo Amount</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-money"></i>
              </span>
            </div>
            <input
              v-model="amount"
              type="number"
              required
              placeholder="Amount In Naira"
              class="form-control"
            />
          </div>
          <label>Select Frequency</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-bell"></i>
              </span>
            </div>
            <select v-model="cycle" class="browser-default custom-select" required>
              <option value disabled selected>Select</option>
              <option value="30">Monthly</option>
              <option value="90">Quaterly</option>
              <option value="180">Bi-Annually</option>
            </select>
          </div>
          <button
            :disabled="loading"
            type="submit"
            class="btn d-block mx-auto btn-primary my-2"
          >Create Cycle</button>
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "./Loader";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "SetAjoCycle",
  components: {
    Structure,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      amount: "",
      cycle: "",
      token: "",
      trans_id: "",
      loading: false,

      msg: "",
      mssg: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
    },
    SetCycle() {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/ajo/setajo`,
          {
            trans_id: this.trans_id,
            ajo_amount: parseInt(this.amount),
            ajo_cycle: parseInt(this.cycle)
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.loading = false;
          if (res.data.status == true) {
            this.mssg = res.data.message;
          } else {
            this.msg = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
          this.msg = "An Error Occured";
        });
    }
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }
  }
};
</script>