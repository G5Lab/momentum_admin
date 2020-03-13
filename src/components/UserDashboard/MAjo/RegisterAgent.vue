<template>
  <Structure page="mAjo / Register agent ">
    <div class="container-fluid mb-4">
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
      <div class="text-center" v-if="loading">
        <Loader />
      </div>
      <div class="row no-gutters justify-content-center">
        <form
          v-if="form"
          v-on:submit.prevent="registeragent"
          class="col-md-7 card shadow border bg-white p-4"
        >
          <div class="text-center text-gray-900 h4 py-4">Register an agent</div>
          <div class="form-group">
            <label for="number">Enter Agents Id</label>
            <input
              v-model="agent_id"
              type="number"
              required
              placeholder="Agents Id"
              class="form-control"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mt-3 mx-auto d-block px-4 text-center mb-3"
          >Register</button>
        </form>
        <div v-if="verified" class="col-md-6">
          <Verify class="bg-white p-5" v-on:verifyPin="verifyPin" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
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
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Verify from "../../Auth/VerifyPin";
import Loader from "../Index/Loader";
import axios from "axios";
export default {
  name: "RegisterAgent",
  components: {
    Structure,
    Verify,
    Loader
  },
  data() {
    return {
      agent_id: "",
      form: true,
      verified: false,
      loading: false,

      token: "",
      trans_id: "",
      user_id: "",

      mssg: "",
      msg: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.form = true;
    },
    registeragent() {
      this.verified = true;
      this.form = false;
    },
    verifyPin(pin) {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: this.user_id,
            pin: pin
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .then(res => {
          if (res.data.status == true) {
            axios
              .post(
                `https://momentum.ng/backend/api/ajo/registeragent`,
                {
                  user_id: this.user_id,
                  trans_id: this.trans_id,
                  agent_id: this.agent_id
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                  }
                }
              )
              .then(res => {
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
          } else {
            this.loading = false;
            this.msg = "Incorrect Pin";
            console.log(res.data);
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
    this.user_id = this.$session.get("user")._id;
  }
};
</script>