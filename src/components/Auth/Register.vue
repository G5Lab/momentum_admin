<template>
<body class="bg-gradient-primary">
  <Nav name="Join Our Community" />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden py-3 border-0 shadow-lg my-5">
          <div class="card-body py-1">
            <div class="row bg-white">
              <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div class="load" v-if="loading">
                <Loader />
              </div>
              <div class="col-lg-7">
                <h2
                  class="text-white bg-danger text-center"
                  :class="{fixed: msg.length >1 }"
                >{{msg}}</h2>
                <form class="user" v-on:submit.prevent="onSubmit">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input
                      v-model="register.fullname"
                      required
                      type="text"
                      class="form-control form-control-user"
                      placeholder="Full Name"
                      id="fullname"
                      name="fullname"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      v-model="register.email"
                      required
                      type="email"
                      placeholder="example@gmail.com"
                      class="form-control form-control-user"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="tel">Mobile Number</label>
                    <input
                      v-model="register.mobile"
                      required
                      type="number"
                      class="form-control form-control-user"
                      id="tel"
                      placeholder="Telephone Number"
                      name="mobile"
                    />
                  </div>

                  <div class="form-group">
                    <label for="referer">Referer</label>
                    <input
                      v-model="register.referer"
                      type="text"
                      class="form-control form-control-user"
                      id="referer"
                      placeholder="Refere Id"
                      name="referer"
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      v-model="register.passwordd"
                      required
                      type="password"
                      class="form-control form-control-user"
                      id="password"
                      placeholder="Enter Password"
                      name="passwordd"
                    />
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confrim Password</label>
                    <input
                      v-model="confirmPassword"
                      required
                      type="password"
                      class="form-control form-control-user"
                      id="confirmPassword"
                      placeholder="Confirm Your Password"
                    />
                  </div>
                  <button
                    class="btn my-3 mx-auto w-50 btn-primary btn-user btn-block"
                    type="submit"
                  >Sign Up</button>
                  <hr />
                  <div class="text-center">
                    Already have an account?
                    <router-link to="/login" class="text-primary">Login</router-link>
                    <br />
                    <router-link to="/ForgotPassword" class="d-block mb-3 text-danger">
                      <i>Forgot Password?</i>
                    </router-link>
                  </div>
                </form>
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
import axios from "axios";
import Nav from "./Nav";
import Loader from "./Loader";
export default {
  name: "Register",
  components: {
    Nav,
    Loader
  },
  data() {
    return {
      register: {
        fullname: "",
        email: "",
        mobile: "",
        passwordd: "",
        referer: ""
      },
      confirmPassword: "",
      msg: "",
      loading: false
    };
  },
  // https://momentum.ng/backend/api/users/register online
  methods: {
    onSubmit() {
      this.loading = true;
      if (this.confirmPassword != this.register.passwordd) {
        this.loading = false;
        this.msg = "Passwords do not Match";
        setInterval(() => {
          this.msg = "";
        }, 2000);
      } else {
        axios
          .post("https://momentum.ng/backend/api/users/register", this.register)
          .then(res => {
            this.loading = false;
            const result = res.data;

            if (result.status == true) {
              this.loading = false;
              sessionStorage.setItem(
                "registrationSucces",
                JSON.stringify(result.status)
              );
              this.$router.push("welcomemessage");
            } else if (result.message == "user exists with same email") {
              this.loading = false;
              this.msg = "Email already exist";
              setTimeout(() => {
                this.msg = "";
              }, 4000);
            } else if (result.message == "user exists with same number") {
              this.msg = "Phone number already exist";
              setInterval(() => {
                this.msg = "";
              }, 4000);
            } else {
              this.msg = "Registration ins't successful";
              setTimeout(() => {
                this.msg = "";
              }, 4000);
            }
          })
          .catch(err => {
            console.error(err);
          });
        // console.log(res.data);
        this.register = {};
      }
    }
  }
};
</script>

<style scoped>
body {
  min-height: 100vh !important;
}

.fixed {
  position: absolute;
  top: 40%;
  left: 10.5%;
  font-size: 2.5rem;
  font-weight: 500;
  padding: 2rem;
  border-radius: 1.5rem;
  display: block;
}
.load {
  position: fixed;
  top: 27%;
  right: 39%;
  z-index: 2;
}
@media (max-width: 767px) {
  .fixed {
    position: absolute;
    top: 45%;
    left: auto;
    font-size: 1.9rem;
    padding: 1.5rem 0.8rem !important;
    border-radius: 0.8rem;
    font-weight: 400;
  }
  .load {
    top: 30%;
    right: 30%;
  }
}
</style>