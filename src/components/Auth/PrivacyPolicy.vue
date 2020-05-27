<template>
  <MomentumAbout pageName="Privacy Policy">
    <div class="container-fluid">
      <div class="container mt-4">
        <div class="row justify-content-between py-aut">
          <div class="text-center mt-3 d-none d-md-block col-md-3 py-auto">
            <div class="lead position-fixed bg-primary p-3">
              <div>
                <a class="link">
                  <router-link class="link" to="/privacyPolicy">Privacy Policy</router-link>
                </a>
                <a class="link">
                  <router-link class="link" to="/termsCondition">Terms &#38; Condtion</router-link>
                </a>
                <a class="link">
                  <router-link class="link" to="/aboutMomentum">About Momentum</router-link>
                </a>
                <div class>
                  <router-link to="/login" class="py-3 bklogin">
                    <i class="fa fa-arrow-left mr-2"></i>
                    <span>Login</span>
                  </router-link>
                </div>
                <a class="link">
                  <router-link class="py-3 bklogin" to="/register">
                    <i class="fa fa-arrow-left mr-2"></i>
                    <span>Register</span>
                  </router-link>
                </a>
              </div>
            </div>
          </div>
          <div class="shadow col-md-8 mb-4">
            <div class="card-body">
              <div id="privacyPolicy" class="my-2">
                <!-- <div
                  class="font-weight-bold text-uppercase text-gray-900 h4 pt-3 mb-2"
                >Privacy Policy</div>-->
                We are Momentum, a digital cooperative with head office in Lagos Nigeria.
                For any access request, questions, or inquiries about how we use your Personal Information, please contact us via
                <a
                  class="text-primary font-weight-bold"
                  href="mailto:momentumdigitalafrica@gmail.com"
                >momentumdigitalafrica@gmail.com</a>
                Momentum do not take your trusting us with your information for granted. The privacy of our Users is important to us and we are committed to safeguarding it. Hence, this Privacy Policy explains your Personal Information which we collect, why we collect it, and what we do with it..
              </div>
              <!-- <div
                id="aboutMomentum"
                class="font-weight-bold text-gray-900 h4 pt-2 mb-2"
              >ABOUT MOMENTUM</div>Momentum is Africa #1 Digital Cooperative built to facilitate financial inclusion as well as boost SMEs growth and acceleration across Africa. Momentum is built to help Individuals, Entrepreneurs and SMEs realize their financial goals, the app will enable members save easily and meet their goals.
              Momentum seeks to leverage technology to achieve SDGs Goal 1, 2 and 8; thus accelerating socio-economic development. We are on a mission to create an innovative digital driven economy.-->
              <!-- <div id="termsCondition" class="my-4">
                <div
                  class="font-weight-bold text-uppercase text-gray-900 h4 pt-3 mb-2"
                >Terms &#38; Conditions</div>
                <span class="d-block mb-2">
                  These Terms of Use govern your use of Momentum and provide information about the Momentum service, outlined below. When you create an account with Momentum or use Momentum, you agree to these terms.
                  Who Can Use Momentum?
                </span>
                <span
                  class="d-block mb-2"
                >We want our service to be as open and inclusive as possible but we also want to be safe, secure and in accordance with the law. So we need you to commit to a few restrictions in order to be art of the Momentum community.</span>
                <p>
                  <span>
                    <i class="fa fa-check-square mr-2"></i>
                  </span>
                  You must be at least 13 years old.
                </p>
                <p>
                  <span>
                    <i class="fa fa-check-square mr-2"></i>
                  </span>You must operate an active bank account in one of the banks.
                </p>
                <p>
                  <span>
                    <i class="fa fa-check-square mr-2"></i>
                  </span>You must not engage in fraudulent activities on this platform if not your account will be disabled.
                </p>
              </div>-->
            </div>
            <div class="card-footer d-md-none mb-2 text-center">
              <router-link to="/login" class="text-primary py-3">
                <i class="fa text-primary fa-arrow-left mr-1"></i>
                <span>Go to Login</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MomentumAbout>
</template>

<script>
import MomentumAbout from "./MomentumAbout";
export default {
  name: "Welcome",
  components: {
    MomentumAbout
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.nav-item {
  color: white !important;
}

.display-4 {
  color: rgb(29, 28, 28);
}
.bg {
  background: #0e3b777a;
}
.bklogin {
  color: whitesmoke !important;
  transition: 2s;
  transition: all;
}
.bklogin:hover,
.link:hover {
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 200;
}
.link {
  font-weight: 200;
  color: rgb(20, 19, 19);
  display: block;
}
.fa {
  color: black;
}
</style>