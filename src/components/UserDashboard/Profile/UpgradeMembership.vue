<template>
  <Structure page="Upgrade Membership">
    <div class="container-fluid mt-4 d-flex justify-content-center">
      <div class="card-body shadow col-md-12 col-xs-12 col-lg-10 mb-4">
        <div class="py-1">
          <div class="bg-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, assumenda hic culpa odit non, ratione vero magnam nihil commodi ducimus quia voluptatibus officiis laudantium dolores optio quaerat sequi ex repellat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque expedita dolores minima hic officiis perspiciatis consequatur molestias aspernatur beatae quis reprehenderit aut tempore delectus ipsam, fugiat at illo. Asperiores, maxime.
          </div>
        </div>
        <div id="accordion" class="mt-2">
          <!-- Standard Member -->
          <div class="border mb-2">
            <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-shield mr-3 lead"></i>
                <span class="font-weight-bold">Become a Premium Member</span>
              </div>
            </a>
            <div class="card border m-2 p-2 collapse" id="collapse3">
              <p>
                Loop Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo cumque laborum, dolorum excepturi soluta placeat animi ipsum nam magnam exercitationem possimus praesentium illo eum. At aperiam soluta adipisci quos.
                <span
                  class="font-weight-bold lead"
                >&#8358;2,500</span>
              </p>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div v-if="loading1" class="my-1 text-center">
                    <Loader />
                  </div>
                  <VerifyPin v-if="verifyBasic" v-on:verifyPin="verifyBasicPin" />
                </div>
              </div>
              <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg1" />
              <Failuremsg v-on:closeMsg="closeMsg" :msg="msg1" />
              <div class="d-flex justify-content-center" v-if="button1">
                <button @click="becomeBasic" class="btn btn-primary">Become Premium</button>
              </div>
            </div>
          </div>

          <!-- Pro -->
          <div class="border mb-2">
            <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-star mr-3 lead"></i>
                <span class="font-weight-bold">Become a Share-holder</span>
              </div>
            </a>
            <div class="border m-2 p-2 collapse" id="collapse4">
              <p>
                4 ansd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugit nobis molestias voluptatum porro quidem quo natus, facere beatae ipsa molestiae, provident aliquam perspiciatis quia, expedita cupiditate iusto fuga commodi!
                <span
                  class="font-weight-bold lead"
                >&#8358;50,000</span>
              </p>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <div v-if="loading2" class="my-1 text-center">
                    <Loader />
                  </div>
                  <VerifyPin v-if="verifyPro" v-on:verifyPin="verifyProPin" />
                </div>
              </div>
              <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg2" />
              <Failuremsg v-on:closeMsg="closeMsg" :msg="msg2" />
              <div class="d-flex justify-content-center" v-if="button2">
                <button @click="becomePro" class="btn btn-primary">Become Share-holder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import VerifyPin from "../../Auth/VerifyPin";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
import Loader from "../Msave/Loader";
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
export default {
  name: "UpgradeMembership",
  components: {
    Structure,
    VerifyPin,
    Loader,
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

      token: "",
      trans_id: "",
      user_id: "",
      fullname: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg1 = "";
      this.mssg1 = "";
      this.msg2 = "";
      this.mssg2 = "";
    },
    becomeBasic() {
      this.verifyBasic = true;
      this.button1 = false;
    },
    verifyBasicPin(pin) {
      this.loading1 = true;
      const token = this.$session.get("jwt");
      // const trans_id = this.$session.get("user").trans_id;
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
          console.log(res.data);
          this.loading1 = false;
          // If Pin is correct
          if (res.data.status == true) {
            //  Pay to become a basic Member
            axios
              .post(
                `https://momentum.ng/backend/api/wallet/upgradetopremium`,
                {
                  trans_id: this.trans_id,
                  amount: 2500
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.token
                  }
                }
              )
              .then(res => {
                console.log(res.data);
                if (res.data.status == true) {
                  this.mssg1 = res.data.message;
                } else {
                  this.msg1 = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
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
    becomePro() {
      this.verifyPro = true;
      this.button2 = false;
    },
    verifyProPin(pin) {
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
          console.log(res.data);
          this.loading2 = false;
          // If Pin is correct
          if (res.data.status == true) {
            // pay to become share-holder
            /* axios
              .post(
                ``,
                {
                  trans_id: this.trans_id,
                  amount: 50000
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.token
                  }
                }
              )
              .then(res => {
                if (res.data.status == true) {
                  this.mssg2 = res.data.message;
                } else {
                  this.msg1 = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
              }); */
          } else {
            this.msg2 = res.data.message;
            // If !pin
            this.msg = "Incorrect Pin";
            setTimeout(() => {
              this.msg = "";
            }, 2500);
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
  }
};
</script>
