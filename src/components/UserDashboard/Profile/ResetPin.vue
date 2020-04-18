<template>
  <Structure page="Reset Pin">
    <div class="container-fluid mb-4">
      <div class="row justify-content-center px-1 mb-2">
        <form v-on:submit.prevent="updatePin" class="col-md-11 col-lg-7 shadow bg-white py-2 px-3">
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

          <Loader v-if="loading" class="my-4 text-center d-block" />

          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
          <button
            :disabled="loading"
            type="submit"
            class="btn mx-auto d-block px-4 btn-primary my-2"
          >Reset</button>
        </form>
      </div>
    </div>
  </Structure>
</template>


<script>
import Loader from "../MAjo/Loader";
import Structure from "../GUserLayouts/Structure";

import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
import axios from "axios";
import Calls from "../../../Service/Calls";
export default {
  name: "ResetPin",
  components: {
    Structure,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      pin1: "",
      pin2: "",
      formerPin: "",

      token: "",
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
    this.token = Calls.getJwt();
    this.user_id = Calls.getUser_id();

    if (this.token == null) {
      Calls.reloadPage();
    }
  }
};
</script>