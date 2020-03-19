<template>
  <Structure page="Security">
    <div class="container-fluid mb-3">
      <div class="row justify-content-center px-1 my-3">
        <div v-if="loading" class="my-2 text-center">
          <Loader />
        </div>
        <form
          v-on:submit.prevent="ChangePassword"
          class="col-md-11 col-lg-8 border bg-white py-2 px-3"
        >
          <div class="text-center text-primary font-weight-bold h5 py-2">Change Password</div>
          <p class="p-2 mb-2">
            Your security is of utmost importance, for your Investments, Savings and other transactions. If you notice unusual activities, kindly change your password to something only you can remember.
            Do Not Share Your Password With Anyone Else
          </p>
          <div class="form-group">
            <label for="number">New Password</label>
            <input
              type="password"
              v-model="newpassword1"
              required
              placeholder="New Password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="number">Confirm Password</label>
            <input
              v-model="newpassword2"
              type="password"
              required
              placeholder="Confirm Password"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label for="number">Enter Old Password</label>
            <input
              type="password"
              v-model="oldPassword"
              required
              placeholder="Former Password"
              class="form-control"
            />
          </div>
          <button
            :disabled="loading"
            type="submit"
            class="btn d-block mx-auto btn-primary my-2"
          >Change</button>
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
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
export default {
  name: "ChangePassword",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      newpassword1: "",
      newpassword2: "",
      oldPassword: "",

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
      this.newpassword1 = "";
      this.newpassword2 = "";
      this.oldPassword = "";
    },
    ChangePassword() {
      if (this.newpassword1 != this.newpassword2) {
        this.msg = "Passwords Do Not Match";
      } else {
        this.loading = true;
        axios
          .post(
            `https://momentum.ng/backend/api/users/updatepassword`,
            {
              user_id: this.user_id,
              oldpassword: this.oldPassword,
              newpassword: this.newpassword2
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

<style>
label {
  font-weight: 650;
}
</style>