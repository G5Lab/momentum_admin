<template>
  <Structure page="Reset Transaction Pin">
    <div class="container-fluid mb-4">
      <div class="row justify-content-center px-1 mb-2">
        <div v-if="loading" class="my-2 text-center">
          <Loader />
        </div>
        <form v-on:submit.prevent="updatePin" class="col-md-11 col-lg-7 border bg-white py-2 px-3">
          <div class="text-center text-gray-900 h5 py-2">Reset Pin</div>

          <label for="number">Input Pin</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              maxlength="4"
              type="password"
              required
              placeholder="Include Pin"
              class="form-control"
              v-model="pin1"
            />
          </div>
          <label for="number">Confirm Pin</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              maxlength="4"
              required
              placeholder="Confirm Pin"
              class="form-control"
              v-model="pin2"
            />
          </div>
          <label for="number">Enter Former Pin</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              maxlength="4"
              required
              placeholder="Former Pin"
              class="form-control"
              v-model="formerPin"
            />
          </div>
          <button
            :disabled="loading"
            type="submit"
            class="btn mx-auto d-block px-4 btn-primary my-2"
          >Reset</button>
        </form>
      </div>
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
  </Structure>
</template>


<script>
import Loader from "../Msave/Loader";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
export default {
  name: "ResetPin",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      pin1: "",
      pin2: "",
      formerPin: "",

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
      this.pin1 = "";
      this.pin2 = "";
      this.formerPin = "";
    },
    updatePin() {
      if (this.pin1 == this.pin2) {
        this.loading = true;
        axios
          .post(
            `https://momentum.ng/backend/api/users/verifypin`,
            {
              user_id: this.user_id,
              pin: this.formerPin
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
                  `https://momentum.ng/backend/api/users/resetpin`,
                  {
                    user_id: this.user_id
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
                        `https://momentum.ng/backend/api/users/updatepin`,
                        {
                          user_id: this.user_id,
                          pin: this.pin1
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
                        this.mssg = res.data.message;
                      })
                      .catch(err => {
                        console.log(err);
                      });
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
              this.msg = "Former Pin Incorrect";
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.pin1 != this.pin2) {
        this.msg = "Pins do not match";
      } else {
        this.msg = "Pin Should be 4 digit";
      }
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
  }
};
</script>