<template>
  <Structure page="Collect Ajo">
    <div class="container-fluid mt-4">
      <div class="row justify-content-center">
        <div class="card-body shadow col-md-12 col-xs-12 col-lg-10 mb-4">
          <div class="py-1">
            <div class="bg-light">
              <div
                class="text-center text-uppercase text-primary font-weight-bold h4 mb-0"
              >COLLEECT AJO OPTIONS</div>
              <div class="py-2">
                <p>Community leaders can collect funds from users under them at regular intervals as part of the user's savings. At the point of collection, the Community Leader transfer to the User (Client), and the user gets the funds in their wallet.</p>
              </div>
            </div>
          </div>
          <div id="accordion" class="mt-2">
            <!-- Become a collector -->
            <div class="border mb-2">
              <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-users mr-3 lead"></i>
                  <span class="font-weight-bold">Become a Collector</span>
                </div>
              </a>
              <div class="card m-0 p-2 collapse bg-light border-0" id="collapse3">
                Community leaders are responsible for collecting funds from users under them. You will collect funds and transfer to the users account as set up by the user. As a Community leader, you will need to have sufficient balance in your account, as this will be the source of the funds you transfer to users.
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div v-if="loading1" class="my-1 text-center">
                      <Loader />
                    </div>
                    <VerifyPin v-if="verifyBasic" v-on:verifyPin="becomeACollectorPin" />
                  </div>
                </div>
                <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg1" />
                <Failuremsg v-on:closeMsg="closeMsg" :msg="msg1" />
                <div>
                  <div class="d-flex justify-content-center mt-2" v-if="button1">
                    <button @click="becomeACollector" class="btn btn-primary">I Understand</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Collect -->
            <div class="border mb-2">
              <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                <div class="p-2 mb-2 text-dark">
                  <i class="fa fa-handshake-o mr-3 lead"></i>
                  <span class="font-weight-bold">Collect From Users</span>
                </div>
              </a>
              <div class="m-0 p-2 collapse border-0" id="collapse4">
                <p
                  class="text-center"
                >When Collecting Ajo form users, enter the transaction Id and the amount collected, to complete the transaction</p>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <Loader v-if="loading2" class="my-1 text-center" />
                    <VerifyPin v-if="verifyPro" v-on:verifyPin="completeCollection" />
                  </div>
                </div>
                <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg2" />
                <Failuremsg v-on:closeMsg="closeMsg" :msg="msg2" />
                <div>
                  <form @submit.prevent="collectFromUser" class="p-1 border-0" v-if="button2">
                    <label for="number">Enter Recievers Id</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        v-model="reciever_id"
                        type="number"
                        required
                        placeholder="Reciever Id"
                        class="form-control"
                      />
                    </div>
                    <label for="number">Enter Amount To Transfer</label>
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
                        placeholder="Amount in naira"
                        class="form-control"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button class="btn btn-primary">Complete Transaction</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Loader from "../Index/Loader";
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import VerifyPin from "../../Auth/VerifyPin";

export default {
  name: "BecomeAgent",
  components: {
    Structure,
    Loader,
    VerifyPin,
    Successmsg,
    Failuremsg
  },
  data() {
    return {
      verifyBasic: false,
      button1: true,
      verifyPro: false,
      button2: true,

      msg1: "",
      mssg1: "",
      msg2: "",
      mssg2: "",
      loading1: false,
      loading2: false,

      reciever_id: "",
      amount: "",

      token: "",
      trans_id: "",
      user_id: "",
      fullname: "",
      level: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg1 = "";
      this.mssg1 = "";
      this.msg2 = "";
      this.mssg2 = "";
      this.$router.go();
    },
    becomeACollector() {
      this.verifyBasic = true;
      this.button1 = false;
    },
    becomeACollectorPin(pin) {
      this.loading1 = true;
      const token = this.$session.get("jwt");
      const user_id = this.$session.get("user")._id;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      // Verify Pin
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: user_id,
            pin: pin
          },
          {
            headers
          }
        )
        .then(res => {
          this.loading1 = false;
          // If Pin is correct
          if (res.data.status == true) {
            axios
              .post(
                `https://momentum.ng/backend/api/users/becomeagent`,
                {
                  user_id: user_id
                },
                {
                  headers
                }
              )
              .then(res => {
                if (res.data.status == true) {
                  this.mssg1 = res.data.message;
                  setTimeout(() => {
                    this.$router.go();
                  }, 4000);
                } else {
                  setTimeout(() => {
                    this.$router.go();
                  }, 4000);
                  this.msg1 = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
                this.msg1 = "An Error Occured";
              });
          } else {
            // If !pin
            this.msg1 = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    collectFromUser() {
      this.verifyPro = true;
      this.button2 = false;
    },
    completeCollection(pin) {
      this.loading2 = true;
      const token = this.$session.get("jwt");
      const user_id = this.$session.get("user")._id;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      // Verify Pin
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: user_id,
            pin: pin
          },
          {
            headers
          }
        )
        .then(res => {
          // If Pin is correct
          if (res.data.status == true) {
            axios
              .post(
                `https://momentum.ng/backend/api/ajo/collectajo`,
                {
                  trans_id: this.trans_id,
                  reciever_id: this.reciever_id,
                  amount: this.amount
                },
                {
                  headers
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
                this.loading2 = false;
                console.log(err);
                this.msg2 = "An Error Occured";
              });
          } else {
            this.loading2 = false;
            this.msg2 = res.data.message;
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
    this.fullname = this.$session.get("user").fullname;
    this.level = this.$session.get("user").level;
  }
};
</script>

<style scoped>
.p {
  font-size: 1.035rem;
}
.fa {
  color: rgb(59, 111, 172);
}
</style>