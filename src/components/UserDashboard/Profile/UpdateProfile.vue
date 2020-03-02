<template>
  <Structure page="Update Profile">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <form v-on:submit.prevent="updateProfile" class="border col-md-11 bg-white p-3">
            <div class="text-center text-gray-900 h5 mx-0 p-0 py-2">Update your Profile</div>
            <div class="form-group">
              <label>Full Name</label>
              <input
                v-model="fullName"
                type="text"
                class="form-control"
                required
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="email"
                type="email"
                required
                placeholder="example@gmail.com"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input
                v-model="mobile"
                type="tel"
                required
                class="form-control"
                placeholder="Telephone Number"
              />
            </div>
            <div class="form-group">
              <label>Date Of Birth</label>
              <input
                type="date"
                required
                v-model="dataOfBirth"
                class="form-control"
                placeholder="Date Of Birth"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label>State</label>
                <input v-model="state" type="text" required placeholder class="form-control" />
              </div>
              <div class="form-group col-md-5">
                <label>Lga_residence</label>
                <input type="text" required class="form-control" v-model="lgaResidence" />
              </div>
              <div class="form-group col-md-2">
                <label>Zip</label>
                <input type="number" required class="form-control" v-model="zip" />
              </div>
            </div>
            <div class="form-group">
              <label>Address</label>
              <input
                v-model="address"
                type="text"
                class="form-control"
                id="text"
                placeholder="Address"
                name="address"
              />
            </div>
            <div class="form-group">
              <label>Enter Password</label>
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
            <button type="submit" class="btn btn-primary px-4 my-3">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
export default {
  name: "UpdateProfile",
  components: {
    Structure
  },
  data() {
    return {
      fullName: "",
      email: "",
      mobile: "",
      dataOfBirth: "",
      state: "",
      lgaResidence: "",
      zip: "",
      address: "",
      password: ""
    };
  },
  methods: {
    updateProfile() {
      const token = this.$session.get("jwt");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      };
      axios.post(
        // TODO: momentum Update Profile Api EndPoint
        ``,
        {
          headers
        },
        {}
      );
    }
  }
};
</script>


