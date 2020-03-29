<template>
<Structure>
  <div class="mx-3">
    <body id="home" class="mb-3">
      <section class="main">
        <div id="Content" class="wrapper topSection">
          <div id="Header">
            <div class="wrapper">
              <div class="logo">
                <h1>
                  <span class="d-block mb-2">
                    <i class="fa fa-money text-gray-900"></i>
                  </span>
                  <!-- <img src="images/logo1.png" /> -->
                  Pay Bills
                </h1>
              </div>
            </div>
          </div>
          <h2>Bill payment will be out soon!!!</h2>
        </div>
      </section>

      <section class="features spacing">
        <div class="container">
          <h2 class="text-center">Features</h2>
          <div class="row no-gutters justify-content-around">
            <div class="col-md-6">
              <div class="featuresPro">
                <div class="col-md-11 col-sm-10 col-xs-10">
                  <p>
                    <span class="faintbold">Momentum</span>
                    will integrating a Bill Payment System into the application for the convenience of its members.
                    <span
                      class="d-block my-2"
                    >
                      This
                      is to enable member easily pay their various bill such as
                      <span
                        class="star"
                      >CableTV Bill,</span>
                      <span class="star ml-1">Internet Subscription Bill,</span>
                      <span class="star ml-1">GSM Airtime Top,</span>
                      <span class="star ml-1">Internet Data Bill,</span>
                      <span class="star ml-1">Power Bill,</span>
                      etc from the balance on their main wallet.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="featuresPro">
                <div class="col-md-11 col-sm-10 col-xs-10">
                  <p>
                    <span class="faintbold">Momentum</span>
                    shall be implementing the Cash-Back Model, thus, Members get cash credit every time they
                    make a bill payment (members can get up to 3% as cash back reward on their main wallet).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </div>
</Structure>
</template>
<script>
import Structure from "../GUserLayouts/Structure";
export default {
  name: "PayBills",
  components: {
    Structure
  }
};
</script>

<style scoped>
body {
  color: #fff;
  font-family: "Open Sans", sans-serif;
  min-width: 960px;
  height: 100%;
  width: 100%;
  margin: 0;
  color: #000;
  background-size: cover;
  /* background: url("../../../../public/img/lop.png") top left repeat; */
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  line-height: 40px;
  text-align: center;
}

h3 {
  font-size: 30px;
  margin: 0.2em 0;
  text-align: center;
  color: #888;
  padding: 0 0 29px;
}

h4 {
  margin-bottom: 5px;
}
p {
  margin: 0 0 10px 0;
}

a {
  color: gray;
  text-decoration: none;
}
a:hover {
  color: #bbb;
}

.spacing {
  padding: 40px 0;
}
#Header {
  position: relative;
  width: 100%;
  z-index: 1;
  padding-top: 3em;
}
.logo {
  width: auto;
  margin: 0 auto;
  padding: 7px;
  border-radius: 180px;
  padding-bottom: 20px;
}
.logo h1 {
  color: #1f619b;
  font-weight: 300;
}
.logo span {
  width: 80px;
  font-size: 4rem;
  text-align: center;
  margin: 0 auto;
  color: #000000;
}
.wrapper {
  margin: 0 auto;
  position: relative;
  width: 100%;
  z-index: 1;
}

#Content h2 {
  margin: 0px;
  padding: 0px;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  color: #676767;
  margin-bottom: 40px;
}

#Content h3 {
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  display: block;
  clear: both;
}

.faintbold {
  font-weight: 550;
}

.features {
  background: rgba(55, 55, 55, 0.15);
}
.features h2 {
  padding: 0 0 30px 0;
}
.features h4 {
  margin: 0px 0 10px 0;
  font-weight: 500;
}
.featuresPro {
  margin-bottom: 30px;
  float: left;
}
.featuresPro {
  font-size: 15px;
}
.star {
  font-weight: 500;
  color: blue;
}
@media (max-width: 768px) {
  body {
    min-width: initial !important;
  }
  .wrapper {
    width: 100%;
  }
}
@media (max-width: 420px) {
  h1 {
    float: initial;
    text-align: center;
    margin-left: 0px;
    margin-bottom: 0px;
  }

  #Content h2 {
    margin: 0px 0px 0px 0px;
    padding: 0px;
    text-align: center;
    font-size: 29px;
    font-weight: 300;
  }

  .featuresPro img {
    width: 100%;
  }
}
</style>