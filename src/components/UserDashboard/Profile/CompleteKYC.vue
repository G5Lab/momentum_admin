<template>
  <Structure page="KYC Request Form">
    <div class="container-fluid">
      <div v-if="loading" class="my-2 text-center">
        <Loader />
      </div>
      <div class="row justify-content-center px-1">
        <form v-on:submit.prevent="submitKyc" class="px-4 shadow col-md-11 col-lg-9 bg-white p-3">
          <div class="text-center text-primary font-weight-bold h5 py-2">Kyc Request</div>
          <p
            class="p-2 mb-3 text-center"
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
                v-model="guarantorId"
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
            <input
              type="number"
              v-model="bvn"
              required
              placeholder="BVN Number"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="number">Upload Utility Bill</label>
            <input type="file" required class="form-control" />
          </div>
          <div class="form-group">
            <label for="number">Upload National Identification</label>
            <input type="file" required class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary mx-auto d-block mt-2 mb-3">Submit Kyc</button>
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
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
import Loader from "../Msave/Loader";
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
      guarantorId: "",
      employer: "",
      employer_address: "",
      bvn: "",

      token: "",
      trans_id: "",
      user_id: "",

      loading: false,
      mssg: "",
      msg: ""
    };
  },
  methods: {
    resestSession() {
      axios
        .get(`https://momentum.ng/backend/api/users/${this.user_id}`)
        .then(res => {
          console.log(res.data);
          this.$session.remove("user");
          this.$session.start();
          this.$session.set("user", res.data);
          // Reset Values
          this.trans_id = this.$session.get("user").trans_id;
          this.user_id = this.$session.get("user")._id;
          this.verifyBasic = false;
        })
        .catch(err => {
          console.log(err);
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
          this.resestSession();
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
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
  }
};
</script>



