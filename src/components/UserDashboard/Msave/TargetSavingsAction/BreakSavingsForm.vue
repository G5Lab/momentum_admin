<template>
  <form v-on:submit.prevent="breakSavings" class="border p-2 m-2">
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div v-if="btnClick" class="form-group">
      <label class="h6 font-weight-bold">Enter Amount To Break</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-money"></i>
          </span>
        </div>
        <input type="number" v-model="amount" class="form-control" placeholder=" Amount" required />
      </div>
    </div>
    <div v-if="mssg" class="alert alert-primary alert-dismissible mt-2 fade show" role="alert">
      <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <VerifyPin v-on:verifyPin="verifyPin" v-if="verify" />
      </div>
    </div>
    <div v-if="msg" class="alert alert-danger alert-dismissible mt-2 fade show" role="alert">
      <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
      <button type="button" @click="closeMsg" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-if="btnClick" class="d-flex justify-content-center">
      <button class="btn btn-primary">Break</button>
    </div>
  </form>
</template>

<script>
import Loader from "../../MAjo/Loader";
import VerifyPin from "../../../Auth/VerifyPin";
import axios from "axios";

import Calls from "../../../../Service/Calls";

export default {
  name: "BreakSavingsForm",
  components: {
    VerifyPin,
    Loader
  },
  data() {
    return {
      amount: "",
      verify: false,
      btnClick: true,

      token: "",
      trans_id: "",
      user_id: "",

      msg: "",
      mssg: "",
      loading: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.btn = true;
      this.verify = false;
      this.btnClick = true;
    },
    breakSavings() {
      this.btnClick = false;
      this.verify = true;
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
                `https://momentum.ng/backend/api/savings/breaksavings`,
                {
                  trans_id: this.trans_id,
                  amount: this.amount
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
                console.log(res.data);
                if (res.data.status == true) {
                  this.mssg = `${res.data.message} thanks for being with us`;
                } else {
                  if (
                    res.data.message ==
                    "You do not have sufficient balance to perform the operation"
                  ) {
                    this.msg = `${res.data.message} refresh the page and try again`;
                  } else {
                    this.msg = res.data.message;
                  }
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
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == null) {
      Calls.reloadPage();
    }
  }
};
</script>