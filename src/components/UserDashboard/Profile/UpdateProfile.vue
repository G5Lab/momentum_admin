<template>
  <Structure page="Update Profile">
    <div class="container-fluid">
      <div class>
        <div class="row justify-content-center">
          <form
            v-on:submit.prevent="completeProfile"
            class="shadow col-lg-10 col-md-10 mb-3 bg-white p-3"
          >
            <div
              class="text-center text-primary font-weight-bold h4 mx-0 p-0 pt-md-2"
            >Update Profile</div>
            <div
              class="mb-2 text-center p-md-2"
            >Update your profile, fill out the Information below to unlock other features</div>
            <label>Residential Address</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-pencil"></i>
                </span>
              </div>
              <input
                v-model="address"
                type="text"
                class="form-control"
                id="text"
                placeholder="Address"
                name="address"
                required
              />
            </div>
            <label>Date Of Birth</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-calendar"></i>
                </span>
              </div>
              <input
                type="date"
                required
                v-model="dataOfBirth"
                class="form-control"
                placeholder="Date Of Birth"
              />
            </div>

            <label>Next Of Kin</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                required
                v-model="nextOfKin"
                class="form-control"
                placeholder="Enter the name of your Next Of Kin"
              />
            </div>
            <label>Next Of Kin Mobile</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <input
                type="number"
                required
                v-model="nextOfKinNumber"
                class="form-control"
                placeholder="Enter Next Of Kin mobile number"
              />
            </div>

            <label>Enter Password</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                required
                v-model="password"
                class="form-control"
                id="password"
                placeholder="Enter Password To Save"
                name="password"
              />
            </div>
            <Loader v-if="loading" class="my-4 d-block text-center" />
            <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
            <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
            <button
              type="submit"
              :disabled="loading"
              class="btn btn-primary d-block mx-auto px-4 mt-4"
            >Complete Profile</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";

import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
import axios from "axios";

import Calls from "../../../Service/Calls";

export default {
  name: "UpdateProfile",
  components: {
    Structure,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      nextOfKinNumber: "",
      nextOfKin: "",
      dataOfBirth: "",
      address: "",
      password: "",

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
      this.nextOfKinNumber = "";
      this.nextOfKin = "";
      this.dataOfBirth = "";
      this.address = "";
      this.password = "";

      Calls.reloadPage();
    },
    completeProfile() {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypassword`,
          {
            user_id: this.user_id,
            password: this.password
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
                `https://momentum.ng/backend/api/users/updateprofile`,
                {
                  user_id: this.user_id,
                  address: this.address,
                  dob: this.dataOfBirth,
                  nok: this.nextOfKin,
                  nok_number: this.nextOfKinNumber
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
                this.start();
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.loading = false;
            this.msg = "Wrong Password";
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    start() {
      Calls.getUsers().then(res => {
        this.address = res.address;
        this.nextOfKin = res.nok;
        this.nextOfKinNumber = res.nok_number;
      });
    }
  },
  created() {
    this.start();

    this.token = Calls.getJwt();
    this.user_id = Calls.getUser_id();

    if (this.token == null) {
      Calls.reloadPage();
    }
  }
};
</script>


