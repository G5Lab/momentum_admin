<template>
  <Structure page="Update Profile">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center px-1">
          <div v-if="loading" class="my-2 text-center">
            <Loader />
          </div>
          <form
            v-on:submit.prevent="completeProfile"
            class="border col-lg-10 col-md-11 mb-3 bg-white p-3"
          >
            <div class="text-center text-primary font-weight-bold h5 mx-0 p-0 py-2">Update Profile</div>
            <div
              class="p-2 mb-2 text-center h5"
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
            <button
              type="submit"
              :disabled="loading"
              class="btn btn-primary d-block mx-auto px-4 mt-4"
            >Complete Profile</button>
          </form>
        </div>
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
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
import axios from "axios";
export default {
  name: "UpdateProfile",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      nextOfKinNumber: "",
      nextOfKin: "",
      dataOfBirth: "",
      address: "",
      password: "",

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
      this.nextOfKinNumber = "";
      this.nextOfKin = "";
      this.dataOfBirth = "";
      this.address = "";
      this.password = "";
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
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
  }
};
</script>


