<template>
<body class="bg-gradient-primary">
  <Nav />
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 py-3 text-gray-900 mb-1">Enter Security Code</h1>
                    <p
                      class="mb-4 mt-0"
                    >Please check your email for a message with your code. Your code is 6 digits long.</p>
                  </div>
                  <form class="user" v-on:submit.prevent="resetPassword">
                    <div class="form-group">
                      <input
                        class="form-control form-control-user"
                        type="text"
                        required
                        placeholder="Enter Code"
                      />
                    </div>
                    <button type="submit" class="btn btn-danger btn-user btn-block my-4">Continue</button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link to="/ForgotPassword" class="text-primary">Didn't get a code?</router-link>
                    <span class="mx-2">||</span>
                    <router-link to="/login" class="text-primary">Cancel</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</template>
<script>
import Nav from "./Nav";
export default {
  name: "Recover",
  components: {
    Nav
  },
  data() {
    return {};
  },
  methods: {
    resetPassword() {
      setTimeout(() => {
        this.$router.push("initial");
      }, 2000);
    }
  }
};
</script>


<style scoped>
body {
  min-height: 100vh;
}
</style>
