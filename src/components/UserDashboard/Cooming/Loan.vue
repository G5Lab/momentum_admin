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
                  <span class="d-block mb-4">
                    <i class="fas fa-hand-holding-usd text-gray-900"></i>
                  </span>
                  <!-- <img src="images/logo1.png" /> -->
                  Loan
                </h1>
              </div>
            </div>
          </div>
          <h2>Loan will be out soon!!!</h2>
        </div>
      </section>

      <section class="features spacing">
        <div class="container">
          <h2 class="text-center">Features</h2>
          <div class="row no-gutters justify-content-around">
            <div class="col-md-6">
              <div class="featuresPro">
                <div class="col-md-11 col-sm-10 col-xs-10">
                  <h4>Business-Loan</h4>
                  <p>
                    Disbursement is subject to approval. Member must have been saving consistently for up
                    to 4monthsA sustainable guarantor is required – guarantor must be an active member of Momentum,
                    with asset on momentum in excess of applicant request amount.
                    <span
                      class="d-block my-2"
                    >
                      <span class="faintbold">Loan Tenure:</span>
                      10 Weeks max.
                    </span>
                    <span class="d-block mb-2">
                      <span class="faintbold">Maximum Amount Allowable:</span>
                      10 Weeks max.
                      Twice the balance on the applicant Savings.
                    </span>
                    <span class="d-block mb-2">
                      <span class="faintbold">Processing FEE:</span>
                      N2,000 or 10% amount requested whichever that is higher.
                    </span>
                    <span
                      class="d-block mb-3"
                    >Repayment shall be through direct credit/ deposit to the loan wallet</span>
                    System shall generate weekly Demand Note to help member pay back their loan easily in 10 installment.
                    <span>
                      Prompt payment of loan will raise the borrower’s credit score and impact on credit limit. Credit Score and
                      Loan Limit Cap – in the first instance the loan limit shall be 20k, 50k, 100k then twice Savings Balance; this
                      limit shall be adjusted based on prompt repayment history.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="featuresPro">
                <div class="col-md-11 col-sm-10 col-xs-10">
                  <h4>Quick-Loan</h4>
                  <p>
                    It is disbursed instantly (Loan Wallet debited and Main Wallet Credited).
                    <span
                      class="d-block my-2"
                    >
                      <span class="faintbold">Loan Tenure:</span>
                      30Days max.
                    </span>
                    <span class="d-block mb-2">
                      <span class="faintbold">Maximum Amount Allowable:</span>
                      50% of Savings Wallet Balance and/or Term Dep.
                    </span>
                    <span class="d-block mb-2">
                      <span class="faintbold">Processing FEE:</span>
                      N1,000 or 5% amount requested whichever that is higher.
                    </span>
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
  name: "Loan",
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