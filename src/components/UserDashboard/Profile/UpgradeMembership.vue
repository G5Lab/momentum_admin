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
        <Mssg :msg="msg" />
        <div id="accordion" class="mt-2">
          <!-- Basic Member -->
          <div class="border mb-2">
            <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-shield mr-3 lead"></i>
                <span class="font-weight-bold">Become a Basic Member</span>
              </div>
            </a>
            <div class="card border m-2 p-2 collapse" id="collapse3">
              <p>
                Loop Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum explicabo cumque laborum, dolorum excepturi soluta placeat animi ipsum nam magnam exercitationem possimus praesentium illo eum. At aperiam soluta adipisci quos.
                <span
                  class="font-weight-bold lead"
                >N100</span>
              </p>
              <VerifyPin v-if="verifyBasic" v-on:verifyPin="verifyBasicPin" />
              <div class="d-flex justify-content-center" v-if="button1">
                <button @click="becomeBasic" class="btn btn-primary">Become Basic</button>
              </div>
            </div>
          </div>

          <!-- Pro -->
          <div class="border mb-2">
            <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
              <div class="p-2 mb-2 text-dark">
                <i class="fa fa-star mr-3 lead"></i>
                <span class="font-weight-bold">Become a Pro</span>
              </div>
            </a>
            <div class="border m-2 p-2 collapse" id="collapse4">
              <p>
                4 ansd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fugit nobis molestias voluptatum porro quidem quo natus, facere beatae ipsa molestiae, provident aliquam perspiciatis quia, expedita cupiditate iusto fuga commodi!
                <span
                  class="font-weight-bold lead"
                >N700</span>
              </p>
              <VerifyPin v-if="verifyPro" v-on:verifyPin="verifyProPin" />
              <div class="d-flex justify-content-center" v-if="button2">
                <button @click="becomePro" class="btn btn-primary">Become Pro</button>
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
import Mssg from "../GUserLayouts/Mssg";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
export default {
  name: "UpgradeMembership",
  components: {
    Structure,
    VerifyPin,
    Mssg
  },
  data() {
    return {
      verifyBasic: false,
      button1: true,
      verifyPro: false,
      button2: true,
      msg: ""
    };
  },
  methods: {
    becomeBasic() {
      this.verifyBasic = true;
      this.button1 = false;
    },
    verifyBasicPin(pin) {
      this.loading = true;
      const token = this.$session.get("jwt");
      const trans_id = this.$session.get("user").trans_id;
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
          this.loading = false;

          // If Pin is correct
          if (res.data.status == true) {
            //  Pay to become a basic Member
            axios
              .post(
                // TODO Api to become a basic member
                ``,
                {
                  trans_id: trans_id
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  }
                }
              )
              .then(res => {
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
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
    },
    becomePro() {
      this.verifyPro = true;
      this.button2 = false;
    },
    verifyProPin(pin) {
      this.loading = true;
      const token = this.$session.get("jwt");
      const trans_id = this.$session.get("user").trans_id;
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
          this.loading = false;
          // If Pin is correct
          if (res.data.status == true) {
            //  Pay to become a Pro Member
            axios
              .post(
                // TODO Api to become a Pro member
                ``,
                {
                  trans_id: trans_id
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  }
                }
              )
              .then(res => {
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
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
  }
};
</script>
