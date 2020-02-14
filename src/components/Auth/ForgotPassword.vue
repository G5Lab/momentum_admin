<template>
<body>
  <div class="container">
    <div class="row justify-content-center">
      <div class="forgot bg-white col-md-5 py-auto">
        <div class="text-center text-gray-900 h3 py-3">Reset Password</div>
        <form action>
          <div
            class="card form-group p-2"
          >Input your email address below and we'll send you a link to reset your password.</div>

          <div class="form-group">
            <label for="email" class="text-white">Enter Your Email</label>
            <input
              class="form-control block"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <button type="submit" class="btn btn-block btn-danger my-4">Reset password</button>
          <div class="text-center">
            Password Remembered? Kindly
            <router-link to="/login" class="text-primary">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: "ForgotPassword"
};
</script>

<style scoped>
body {
  background: rgb(75, 75, 224);
  min-height: 100vh;
  color: black;
}

.forgot {
  min-height: 25rem;
  margin: 20vh 0;
}
.btn {
  display: block;
  text-align: center;
  margin: 0.5rem auto;
  padding: 5px 30px;
  color: whitesmoke;
}

.card {
  background: rgb(15, 15, 15);
  color: rgb(151, 144, 144);
}
</style>