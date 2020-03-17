<template>
  <MomentumAbout pageName="Terms & Condition">
    <div class="container-fluid">
      <div class="container mt-4">
        <div class="row justify-content-between">
          <div class="text-center mt-3 d-none d-md-block col-md-3 py-auto">
            <div class="lead position-fixed bg p-3">
              <div class>
                <a
                  href="#termsCondition"
                  v-smooth-scroll="{ duration: 2000, offset: -50 }"
                >Terms &#38; Condtion</a>
                <a
                  href="#aboutMomentum"
                  v-smooth-scroll="{ duration: 2000, offset: -50 }"
                >About Momentum</a>

                <a
                  href="#privacyPolicy"
                  v-smooth-scroll="{ duration: 2000, offset: -50 }"
                >Privacy Policy</a>
                <div class>
                  <router-link to="/login" class="py-3 bklogin">
                    <i class="fa bklogin fa-arrow-left mr-2"></i>
                    <span>Go to Login</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow col-md-8 mb-4">
            <div class="card-body p-1">
              <div id="termsCondition" class="my-4">
                <div
                  class="font-weight-bold text-uppercase text-gray-900 h4 pt-3 mb-2"
                >Terms & Conditions</div>
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
              </div>
              <div
                id="aboutMomentum"
                class="font-weight-bold text-gray-900 h4 pt-2 mb-2"
              >ABOUT MOMENTUM</div>Momentum is Africa #1 Digital Cooperative built to facilitate financial inclusion as well as boost SMEs growth and acceleration across Africa. Momentum is built to help Individuals, Entrepreneurs and SMEs realize their financial goals, the app will enable members save easily and meet their goals.
              Momentum seeks to leverage technology to achieve SDGs Goal 1, 2 and 8; thus accelerating socio-economic development. We are on a mission to create an innovative digital driven economy.
              <div id="privacyPolicy" class="my-4">
                <div
                  class="font-weight-bold text-uppercase text-gray-900 h4 pt-3 mb-2"
                >Privacy Policy</div>Momentum is Africa #1 Digital Cooperative built to facilitate financial inclusion as well as boost SMEs growth and acceleration across Africa. Momentum is built to help Individuals, Entrepreneurs and SMEs realize their financial goals, the app will enable members save easily and meet their goals.
                Momentum seeks to leverage technology to achieve SDGs Goal 1, 2 and 8; thus accelerating socio-economic development. We are on a mission to create an innovative digital driven economy.
              </div>
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
a:hover {
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 600;
}
a {
  font-weight: 600;
  color: rgb(20, 19, 19);
  display: block;
}
.fa {
  color: black;
}
</style>