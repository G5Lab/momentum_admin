<template>
  <Structure page="Register an Agent ">
    <div class="container-fluid mb-4">
      <Loader class="text-center" v-if="loading" />
      <div class="row justify-content-center">
        <form
          v-if="form"
          v-on:submit.prevent="registeragent"
          class="col-md-10 py-4 px-3 bg-white shadow col-lg-8"
        >
          <div class="text-center text-primary font-weight-bold h4 p2">Register an agent</div>
          <p
            class="p-2 text-center font-gray-900"
          >You can register an agent that will collect your savings (Ajo) at regular intervals</p>
          <hr class="my-3" />
          <label for="number">Enter Agents Id</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-user"></i>
              </span>
            </div>
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
        <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
        <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Verify from "../../Auth/VerifyPin";
import Loader from "../MAjo/Loader";
import axios from "axios";
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";

import Calls from "../../../Service/Calls";
export default {
  name: "RegisterAgent",
  components: {
    Structure,
    Verify,
    Loader,
    Successmsg,
    Failuremsg
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
      this.form = true;
      this.verified = false;
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
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }
  }
};
</script>