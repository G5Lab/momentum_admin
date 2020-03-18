<template>
  <Structure page="Set Ajo Cycle ">
    <div class="text-center" v-if="loading">
      <Loader />
    </div>
    <div class="container-fluid">
      <div
        v-if="mssg"
        class="alert text-center alert-primary alert-dismissible mt-2 fade show"
        role="alert"
      >
        <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
        <button
          type="button"
          @click="closeMsg"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="row no-gutters justify-content-center">
        <form v-on:submit.prevent="SetCycle" class="col-md-7 border bg-white p-4">
          <div class="text-center text-primary font-weight-bold h4 py-3">Set Your Ajo Plan</div>
          <p
            class="p-2 mb-2 text-center font-gray-900"
          >You have the option to change the frequency and amount you want to save through Ajo</p>
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
          <div
            v-if="msg"
            class="alert text-center alert-danger alert-dismissible mt-2 fade show"
            role="alert"
          >
            <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
            <button
              type="button"
              @click="closeMsg"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../Index/Loader";
import axios from "axios";
export default {
  name: "SetAjoCycle",
  components: {
    Structure,
    Loader
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
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
  }
};
</script>