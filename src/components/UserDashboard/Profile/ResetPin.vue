<template>
  <Structure page="Reset Transaction Pin">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <form v-on:submit.prevent="updatePin" class="col-md-11 border bg-white py-2 px-3">
            <Mssg :msg="msg" />
            <div class="text-center text-gray-900 h5 py-2">Reset Pin</div>
            <div class="form-group">
              <label for="number">Input Pin</label>
              <input
                type="password"
                required
                placeholder="Include Pin"
                class="form-control"
                v-model="pin1"
              />
            </div>
            <div class="form-group">
              <label for="number">Confirm Pin</label>
              <input
                type="password"
                required
                placeholder="Confirm Pin"
                class="form-control"
                v-model="pin2"
              />
            </div>
            <div class="form-group">
              <label for="number">Enter Former Pin</label>
              <input
                type="password"
                required
                placeholder="Former Pin"
                class="form-control"
                v-model="password"
              />
            </div>
            <button
              type="submit"
              v-bind:disabled="pin1.length > 4 || pin2.length > 4"
              class="btn btn-primary my-2"
            >Reset</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import Mssg from "../GUserLayouts/Mssg";
import axios from "axios";
export default {
  name: "ResetPin",
  components: {
    Structure,
    Mssg
  },
  data() {
    return {
      pin1: "",
      pin2: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    updatePin() {
      const token = this.$session.get("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      if (
        this.pin1 == this.pin2 &&
        this.pin1.length == 4 &&
        this.pin2.length == 4
      ) {
        axios
          .patch(
            // TODO Api endpoint
            ``,
            {
              user_id: this.$session.get("user")._id,
              pin: this.pin2
            },
            {
              headers
            }
          )
          .then(res => {
            console.log(res.data);
            console.log("Good");
            location.reload();
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.pin1 != this.pin2) {
        this.msg = "Pins do not match";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      } else {
        this.msg = "Pin Should be 4 digit";
        setTimeout(() => {
          this.msg = "";
        }, 2500);
      }
    }
  }
};
</script>