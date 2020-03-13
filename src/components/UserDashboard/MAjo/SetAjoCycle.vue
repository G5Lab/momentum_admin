<template>
  <Structure page="mAjo / Set Ajo Cycle ">
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
          <div class="text-center text-gray-900 h4 py-4">Create Your Ajo Cycle</div>
          <div class="form-group">
            <label>Amount</label>
            <input
              v-model="amount"
              type="number"
              required
              placeholder="Amount In Naira"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Choose Cycle</label>
            <select v-model="cycle" class="browser-default custom-select" required>
              <option></option>
              <option value="1">Daily</option>
              <option value="7">Weekly</option>
              <option value="30">Monthly</option>
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
        });
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
  }
};
</script>