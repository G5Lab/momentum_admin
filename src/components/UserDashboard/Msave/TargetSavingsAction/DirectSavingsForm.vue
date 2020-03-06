<template>
  <div>
    <div v-if="mssg" class="alert alert-primary alert-dismissible mt-2 fade show" role="alert">
      <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <VerifyPin class="my-2" v-if="verifypin" v-on:verifyPin="verifyPin" />
      </div>
    </div>
    <div v-if="msg" class="alert alert-danger alert-dismissible mt-2 fade show" role="alert">
      <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form v-if="pay" action class="border p-2 my-2" v-on:submit.prevent>
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
import Loader from "../Loader";
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
      mssg: "",
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
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.pay = true;
      this.verifypin = false;
    },
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
                  this.mssg = res.data.message;
                } else {
                  this.loading = false;
                  this.msg = res.data.message;
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.loading = false;
            this.msg = "Incorrect Pin";
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
@media (max-width: 767px) {
  .rave {
    padding-bottom: 3rem;
  }
}
.rave {
  max-width: 7rem;
  min-height: 2.5rem;
}
</style>