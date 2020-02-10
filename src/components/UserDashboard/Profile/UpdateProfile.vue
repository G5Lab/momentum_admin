<template>
  <Structure page="Update Profile">
    <div class="container">
      <div class="row justify-content-center">
        <form class="register bg-white p-4">
          <div class="text-center text-gray-900 h3 py-4">Update your Profile</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstname">First Name</label>
              <input
                type="text"
                class="form-control"
                required
                placeholder="First Name"
                id="firstname"
                name="firstname"
                value="FirstName"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                class="form-control"
                required
                id="lastname"
                placeholder="Last Name"
                name="lastname"
                value="LastName"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              class="form-control"
              id="email"
              name="email"
              value="example@mail.com"
            />
          </div>
          <div class="form-group">
            <label for="tel">Phone</label>
            <input
              type="tel"
              class="form-control"
              id="tel"
              placeholder="Telephone Number"
              name="phone"
              value="0009999002222"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Abia</option>
                <option>Lagos</option>
                <option>Ogun</option>
                <option>Ibadan</option>
                <option>Delta</option>
                <option>Edo</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-4 mb-3">Update</button>
        </form>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "UpdateProfile",
  components: {
    Structure
  }
};
</script>

<style  scoped>
.register {
  min-height: 25rem;
  padding-top: 5%;
}
.container {
  margin-bottom: 50px;
}
</style>