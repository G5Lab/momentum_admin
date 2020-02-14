<template>
<body>
  <div class="container">
    <div class="row justify-content-center">
      <form class="register col-md-7 bg-white p-3">
        <div class="text-center text-gray-900 h3 py-2">Create an Account</div>

        <div class="form-group">
          <label for="firstname">Full Name</label>
          <input
            type="text"
            class="form-control"
            required
            placeholder="Full Name"
            id="firstname"
            name="firstname"
          />
        </div>
        <div class="form-group">
          <label for="tel">Mobile Number</label>
          <input
            type="tel"
            class="form-control"
            id="tel"
            placeholder="Telephone Number"
            name="phone"
          />
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
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label for="password">Referer</label>
          <input type="text" class="form-control" id="password" placeholder="Refere Id" />
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
  min-height: 100vh;
  color: black;
}

.btn {
  display: block;
  text-align: center;
  margin: 0.9rem auto;
  padding: 5px 30px;
}
.register {
  margin: 30px 0;
}
</style>