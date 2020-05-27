<template>
  <Structure page="Security">
    <div class="container-fluid mb-3">
      <div class="row justify-content-center px-1 my-3">
        <form
          v-on:submit.prevent="ChangePassword"
          class="col-md-11 col-lg-8 shadow bg-white py-2 px-3"
        >
          <div class="text-center text-primary font-weight-bold h5 py-2">Change Password</div>
          <p class="p-2 mb-2">
            Your security is of utmost importance, for your Investments, Savings and other transactions. If you notice unusual activities, kindly change your password to something only you can remember.
            Do Not Share Your Password With Anyone Else
          </p>
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
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
          <Loader v-if="loading" class="my-4 d-block text-center" />
          <button
            :disabled="loading"
            type="submit"
            class="btn d-block mx-auto btn-primary my-2"
          >Change</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Successmsg from "../GUserLayouts/Successmsg";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Loader from "../MAjo/Loader";
import Calls from "../../../Service/Calls";
export default {
  name: "ChangePassword",
  components: {
    Structure,
    Loader,
    Failuremsg,
    Successmsg
  },
  data() {
    return {
      newpassword1: "",
      newpassword2: "",
      oldPassword: "",

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
    this.token = Calls.getJwt();
    this.user_id = Calls.getUser_id();

    if (this.user_id == null) {
      Calls.reloadPage();
    }
  }
};
</script>

