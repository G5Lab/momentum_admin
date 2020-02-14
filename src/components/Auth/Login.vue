<template>
<body class="p-auto">
  <div class="container">
    <div class="row justify-content-center">
      <div class="login bg-white col-md-5 py-auto">
        <div class="text-center text-gray-900 h3 py-4">Login Board</div>
        <form>
          <div class="form-group">
            <input required class="form-control" type="text" id="username" placeholder="Username" />
          </div>
          <div class="form-group">
            <input
              required
              class="form-control"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="flex">
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <div>
              <router-link to="/ForgotPassword" class="text-danger">
                <i>Forgot Password?</i>
              </router-link>
            </div>
          </div>
          <button class="btn btn-primary mx-auto">LOGIN</button>
          <div class="text-center my-2">
            Haven't registered. Register
            <router-link class="text-primary mb-3" to="/register">Here</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
</template>
<script>
export default {
  name: "Login"
};
</script>

<style scoped>
body {
  background: rgb(75, 75, 224);
  min-height: 100vh;
  color: black;
}

.login {
  min-height: 25rem;
  margin: 20vh 0;
}

.btn {
  display: block;
  text-align: center;
  margin: 0.9rem auto;
  padding: 5px 30px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>