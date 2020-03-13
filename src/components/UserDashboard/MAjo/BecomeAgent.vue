<template>
  <Structure page="Become an Agent">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card shadow justify-content-center mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Become an Agent</h6>
            </div>
            <div class="card-body">
              <form v-on:submit.prevent="agree" class="bg-white">
                <div class="border p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis perspiciatis totam sit assumenda laudantium, ducimus quo corporis iusto dignissimos velit deserunt aliquid dolore distinctio, officiis vel reprehenderit error quibusdam!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quasi totam eius reiciendis eos hic voluptatem iusto, impedit expedita veniam saepe quam sit sunt accusantium in, consequuntur natus quas similique!
                </div>
                <button
                  type="submit"
                  class="btn btn-primary mt-3 btn-block text-center mb-3"
                >Yes I Agree</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-2">
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
          v-on:submit.prevent="breakSavings"
          class="col-md-7 card shadow border bg-white p-4"
        >
          <div class="text-center text-gray-900 h4 py-2">Fill ajo agent form</div>
          <div class="form-group">
            <label for="number">Reciever_id</label>
            <input
              v-model="reciever_id"
              type="number"
              required
              placeholder="Reciever_id"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="number">Amount</label>
            <input
              v-model="amount"
              type="number"
              required
              placeholder="Amount In Naira"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-dark d-block mx-auto px-3 my-2">Become</button>
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
import Loader from "../Index/Loader";
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Verify from "../../Auth/VerifyPin";

export default {
  name: "BecomeAgent",
  components: {
    Structure,
    Loader,
    Verify
  },
  data() {
    return {
      amount: "",
      reciever_id: "",

      form: false,
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
    agree() {
      setTimeout(() => {
        this.form = true;
      }, 200);
    },
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      this.verified = false;
      this.form = false;
    },
    breakSavings() {
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
                `https://momentum.ng/backend/api/ajo/collectajo`,
                {
                  trans_id: this.trans_id,
                  reciever_id: this.reciever_id,
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