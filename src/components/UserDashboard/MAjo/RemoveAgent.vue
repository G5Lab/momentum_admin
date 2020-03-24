<template>
  <Structure page="Register an Agent ">
    <div class="container-fluid mb-4">
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-md-8">
            <div class="card shadow p-3 bg-light">
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
  name: "RemoveAgent",
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
      verified2: false,
      removeForm: true,
      loading2: false,

      token: "",
      trans_id: "",
      user_id: "",

      mssg2: "",
      msg2: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg2 = "";
      this.mssg2 = "";
      this.verified = false;
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
            this.loading2 = false;
            this.msg2 = "Incorrect Pin";
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
