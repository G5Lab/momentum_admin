<template>
  <Structure page="Register / Remove agent ">
    <div class="container-fluid mb-4">
      <div class="container mb-4">
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
        <div class="container">
          <div class="row justify-content-center">
            <form
              v-if="form"
              v-on:submit.prevent="registeragent"
              class="col-md-9 card shadow border bg-white p-4"
            >
              <div class="text-center text-primary font-weight-bold h4 pb-2 pt-2">Register an agent</div>
              <p
                class="p-2 mb-3 text-center font-gray-900"
              >You can register an agent that will collect your savings (Ajo) at regular intervals</p>
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
          </div>
        </div>

        <div class="row justify-content-center mt-2">
          <div class="col-md-10">
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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <div class="card bg-light">
              <div class="card-body p-0">
                <div class="text-center text-danger font-weight-bold h4 pt-2">Remove Agent</div>
                <div class="text-center" v-if="loading2">
                  <Loader />
                </div>
                <div v-if="removeForm" class="p-2">
                  <p class>
                    To be able to donate Ajo to a particular Agent, you should register the Agent in the form above.
                    If you wish to remove your agent, click the button below to remove existing Agent.
                  </p>
                  <button
                    @click="removeAgent"
                    class="btn d-block mx-auto btn-danger px-4"
                  >Remove Agent</button>
                </div>
                <div v-if="verified2" class="col">
                  <Verify class="bg-white p-5" v-on:verifyPin="verifyPin2" />
                </div>
                <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg2" />
                <Failuremsg v-on:closeMsg="closeMsg" :msg="msg2" />
              </div>
            </div>
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
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
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
      verified2: false,
      loading: false,
      removeForm: true,
      loading2: false,

      token: "",
      trans_id: "",
      user_id: "",

      mssg: "",
      msg: "",
      mssg2: "",
      msg2: ""
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
    },
    removeAgent() {
      this.verified2 = true;
      this.removeForm = false;
    },
    verifyPin2(pin) {
      this.loading2 = true;
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
                `https://momentum.ng/backend/api/ajo/removeagent`,
                {
                  trans_id: this.trans_id
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                  }
                }
              )
              .then(res => {
                this.loading2 = false;
                if (res.data.status == true) {
                  this.mssg2 = res.data.message;
                } else {
                  this.msg2 = res.data.message;
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