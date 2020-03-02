<template>
  <Structure page="Security">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center my-3">
          <form v-on:submit.prevent="ChangePassword" class="col-md-11 border bg-white py-2 px-3">
            <Mssg :msg="msg" />
            <div class="text-center text-gray-900 h5 py-2">Change Password</div>
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
            <button type="submit" class="btn btn-primary my-2">Save</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Mssg from "../GUserLayouts/Mssg";
export default {
  name: "ChangePassword",
  components: {
    Structure,
    Mssg
  },
  data() {
    return {
      newpassword1: "",
      newpassword2: "",
      oldPassword: "",
      msg: ""
    };
  },
  methods: {
    ChangePassword() {
      const token = this.$session.get("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };

      if (this.newpassword1 != this.newpassword2) {
        console.log("Passwords Do Not Match");
        this.msg = "Passwords Do Not Match";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      } else {
        axios
          .post(
            // TODO: momentum Change Password Api EndPoint
            ``,
            {
              headers
            },
            {
              newpassword: this.newpassword2,
              oldPassword: this.oldPassword
            }
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>