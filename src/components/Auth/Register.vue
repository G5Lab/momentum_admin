<template>
<body class="py-3">
  <div class="container">
    <div class="row justify-content-center">
      <form class="register bg-white p-4">
        <div class="text-center text-gray-900 h3 py-4">Create an Account</div>
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
        <button type="submit" class="btn btn-primary mt-4 mb-3">Sign Up</button>
        <div class="text-center">
          Already have an account?
          <router-link to="/login" class="text-primary">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</body>
</template>
<script>
export default {
  name: "Register"
};
</script>

<style scoped>
body {
  background: rgb(75, 75, 224);
  padding-top: 10%;
  min-height: 100vh;
  color: black;
}

.register {
  min-height: 25rem;
  padding-top: 5%;
}

.btn {
  display: block;
  text-align: center;
  margin: 0.9rem auto;
  padding: 5px 30px;
}
</style>