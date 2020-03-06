<template>
<body>
  <div class="container pt-4">
    <div class="text-center h2 pt-5 pb-4">
      <span>
        <i class="fab fa-accusoft mr-2"></i>
      </span>
      <span class="font-weight-light">Momen</span>
      <span class="font-weight-bold">tum</span>
    </div>
    <div v-if="loading" class="text-center pb-3">
      <Loader />
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-7 col-md-10">
        <div class="card o-hidden py-0 border-0 shadow-lg">
          <div class="card-body px-0 py-0">
            <div class="bg-white py-3 px-3">
              <div
                style="font-size: 1.1rem; font-weight: 600"
                class="text-center py-4"
              >Enter Security Code</div>
              <p
                class="mb-4 text-justify-center"
              >Please check your email for a message with your code. Your code is 6 digits long.</p>

              <form class="user" v-on:submit.prevent="resetPassword">
                <div class="form-group">
                  <input class="form-control p-4" type="text" required placeholder="Enter Code" />
                </div>
                <button type="submit" class="btn p-2 btn-danger btn-block my-4">Continue</button>
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
</body>
</template>
<script>
export default {
  name: "Recover",
  components: {},
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
  color: black;
  background: #0336798e;
}
</style>
