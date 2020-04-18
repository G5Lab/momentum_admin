<template>
  <Structure page="Complete KYC">
    <div class="container-fluid">
      <div class="row justify-content-center px-1">
        <form v-on:submit.prevent="submitKyc" class="px-4 shadow col-md-11 col-lg-9 bg-white p-3">
          <div class="text-center text-primary font-weight-bold h5 py-2">Kyc Request</div>
          <p
            class="p-md-2 mb-3 text-center"
          >Your KYC is necessary for you to have access to some part of the platform. Kindly fill out the information below appropraitely and submit.</p>
          <div class="input-group-row">
            <label>Guarantor (Must be a Premium Member)</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                type="number"
                v-model="guarantor_id"
                class="form-control"
                required
                placeholder="Guarantor Id"
              />
            </div>
            <label for="KycName">Employer Name</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                v-model="employer"
                class="form-control"
                required
                placeholder="Employer Name"
              />
            </div>
          </div>

          <label>Employer Address</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-address-card"></i>
              </span>
            </div>
            <input
              type="text"
              v-model="employer_address"
              required
              placeholder="Employer Address"
              class="form-control"
            />
          </div>
          <label>BVN Number</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-shield"></i>
              </span>
            </div>
            <input type="number" v-model="bvn" placeholder="BVN Number" class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">Upload Utility Bill</label>
            <input type="file" class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">Upload National Identification</label>
            <input type="file" class="form-control" />
          </div>
          <Loader v-if="loading" class="my-4 text-center d-block" />
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
          <button type="submit" class="btn btn-primary mx-auto d-block mt-2 mb-3">Submit Kyc</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
import axios from "axios";
import Loader from "../MAjo/Loader";

import Calls from "../../../Service/Calls";

export default {
  name: "CompleteKYC",
  components: {
    Structure,
    Loader,
    Successmsg,
    Failuremsg
  },
  data() {
    return {
      guarantor_id: "",
      employer: "",
      employer_address: "",
      bvn: "",

      token: "",
      user_id: "",

      loading: false,
      mssg: "",
      msg: ""
    };
  },
  methods: {
    start() {
      Calls.getUsers().then(res => {
        this.guarantor_id = res.guarantor_id;
        this.employer = res.employer;
        this.employer_address = res.employer_address;
      });
    },
    closeMsg() {
      this.msg = "";
      this.mssg = "";
    },
    submitKyc() {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/users/updatekyc`,
          {
            user_id: this.user_id,
            guarantor_id: this.guarantor_id,
            employer: this.employer,
            employer_address: this.employer_address,
            bvn: this.bvn
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.token
            }
          }
        )
        .then(res => {
          this.loading = false;
          this.start();
          if (res.data.status == true) {
            this.mssg = res.data.message;
          } else {
            this.msg = res.data.message;
          }
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          this.msg = "An Error Occured";
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



