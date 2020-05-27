<template>
  <Structure page="Reset Pin">
    <div class="container-fluid mb-4">
      <div class="row justify-content-center px-1 mb-2">
        <form v-on:submit.prevent="updatePin" class="col-md-11 col-lg-7 shadow bg-white py-2 px-3">
          <div class="text-center text-gray-900 h4 pt-2">Reset Pin</div>
          <div
            class="text-gray-900 text-center p my-4"
          >Your PIN is one of the most important part for your security. Your funds, Investments and Savings are all made secured with algorithms generated from your PIN. Ensure you do not share your PIN with anyone. If you notice malicious activities, reset your PIN immediately. You will need your password for PIN reset after which you will be required to enter a new PIN.</div>

          <label for="number">Enter Your Password</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              required
              placeholder="Password"
              class="form-control"
              v-model="userPassword"
            />
          </div>

          <Loader v-if="loading" class="my-4 text-center d-block" />
          <Successmsg v-on:closeMsg="closeMsg" :mssg="mssg" />
          <Failuremsg v-on:closeMsg="closeMsg" :msg="msg" />
          <button
            :disabled="loading"
            type="submit"
            class="btn mx-auto d-block px-4 btn-danger my-2"
          >I Understand, Reset PIN</button>
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
      userPassword: "",

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
      this.userPassword = "";
    },
    updatePin() {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/users/verifypassword`,
          {
            user_id: this.user_id,
            password: this.userPassword
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
                  this.loading = false;
                  this.mssg = res.data.message;
                  setTimeout(() => {
                    this.$router.push("userdashboard");
                  }, 1000);
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
            this.msg = "Incorrect Password";
          }
        })
        .catch(err => {
          console.log(err);
        });
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