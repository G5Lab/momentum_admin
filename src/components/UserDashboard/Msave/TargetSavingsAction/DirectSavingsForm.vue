<template>
  <div>
    <h2 v-if="msg.length > 1" class="text-white my-2 p-2 bg-danger text-center display-4">{{msg}}</h2>
    <VerifyPin v-if="verifypin" v-on:verifyPin="verifyPin" />
    <!-- <form class="border p-3" v-if="verifypin" v-on:submit.prevent="verifyPin">
      <p class="text-center font-weight-bold">Enter Your 4 Digit Pin To Proceed</p>
      <div class="form-group">
        <input
          required
          class="form-control"
          v-model="pin"
          type="text"
          placeholder="Enter Four Digit Pin"
        />
      </div>
      <button
        type="submit"
        :disabled="pin<1"
        class="btn d-block btn-primary text-center mx-auto"
      >Enter Pin</button>
    </form>-->
    <form v-if="pay" action class="border p-2 my-2" v-on:submit.prevent>
      <div class="fixed" v-if="loading">
        <Loader />
      </div>
      <div class="form-group">
        <label class="h6 font-weight-bold">Enter Amount To Save</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-money"></i>
            </span>
          </div>
          <input
            type="number"
            v-model="Mamount"
            class="form-control"
            placeholder="Enter Amount"
            required
          />
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <button
          :disabled="Mamount<1"
          v-on:click="SubmitMain"
          class="btn btn-primary mr-3"
        >From Wallet</button>
        <Rave
          class="btn rave btn-primary"
          name="From Bank"
          :email="email"
          :amount="parseInt(Mamount)"
        ></Rave>
      </div>
    </form>
  </div>
</template>

<script>
import Loader from "../../../Auth/Loader";
import VerifyPin from "../../../Auth/VerifyPin";
import Rave from "./TestRave";
import axios from "axios";
export default {
  name: "DirectSavingsForm",
  components: {
    Loader,
    Rave,
    VerifyPin
  },
  data() {
    return {
      Mamount: "",
      loading: false,
      msg: "",
      verifypin: false,
      pay: true,
      email: ""
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  methods: {
    SubmitMain() {
      this.verifypin = true;
      this.pay = false;
    },
    verifyPin(pin) {
      this.loading = true;
      const token = this.$session.get("jwt");
      const trans_id = this.$session.get("user").trans_id;
      const user_id = this.$session.get("user")._id;
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypin`,
          {
            user_id: user_id,
            pin: pin
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          this.loading = false;
          if (res.data.status == true) {
            // Make the pay Request
            axios
              .post(
                `https://momentum.ng/backend/api/savings/mainwalletcredit`,
                {
                  trans_id: trans_id,
                  amount: this.Mamount
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  }
                }
              )
              .then(res => {
                this.loading = false;
                if (res.data.status == true) {
                  this.msg = res.data.message;
                  setInterval(() => {
                    this.msg = "";
                  }, 1500);
                } else {
                  this.msg = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
              });

            this.pay = true;
            this.verifypin = false;
            console.log(res.data);
          } else {
            this.msg = "Incorrect Pin";
            setTimeout(() => {
              this.msg = "";
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.email = this.$session.get("user").email;
    this.fname = this.$session.get("user").fullname;
  }
};
</script>

<style scoped>
.display-4 {
  font-weight: 700;
  font-size: 3.4rem;
  background-color: red;
  border-radius: 15px;
}
.fixed {
  position: fixed;
  top: 27%;
  right: 33%;
  z-index: 2;
}
@media (max-width: 767px) {
  .fixed {
    top: 30%;
    right: 35%;
  }
  .display-4 {
    font-weight: 600;
    font-size: 1.9rem;
  }
  .rave {
    padding-bottom: 3rem;
  }
}
.rave {
  max-width: 7rem;
  min-height: 2.5rem;
}
</style>