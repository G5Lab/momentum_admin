<template>
  <Structure page="Enter Bank Details">
    <div class="container-fluid mt-4">
      <div>
        <Loader v-if="pageLoading" class="d-block my-5 text-center" />
        <div v-if="arrive" class="row justify-content-center">
          <div class="col-md-10 bg-white shadow col-lg-8">
            <div v-if="recepientPresent">
              <div class>
                <div class="card-body">
                  <div
                    class="text-primary text-center font-weight-bold mb-2 h5"
                  >Bank Details Already Entered</div>
                  <p>
                    You have already uploaded your Bank Details on Momentum.
                    You can continue using the platform. If you wish to change the existing details, contact Support.
                    <span
                      class="d-block"
                    >Below is your Bank Details.</span>
                  </p>
                  <div class="p">
                    <span class="d-block">
                      <span class="font-weight-bold">Account Number :</span>
                      {{accountNumber}}
                    </span>
                    <span class="d-block mb-3">
                      <span class="font-weight-bold">Bank Name :</span>
                      {{bank_name}}
                    </span>
                  </div>
                  <button class="btn mx-auto d-block btn-primary">
                    <router-link to="/userdashboard" class="btn-primary px-3">Return</router-link>
                  </button>
                </div>
              </div>
            </div>
            <div v-if="loading" class="my-2 text-center">
              <Loader />
            </div>
            <form v-if="NotRecepientPresent" v-on:submit.prevent="submitBkinfo" class="bg-white">
              <div class="text-center text-primary font-weight-bold h5 pt-3">Bank Details</div>
              <div
                class="p-2 mb-2 text-center p"
              >The bank details entered will be your default bank when you request for withdraw</div>
              <div class="row justify-content-center">
                <div class="col-md-11">
                  <label for="number">Account Number</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-pencil"></i>
                      </span>
                    </div>
                    <input
                      v-model="accountNumber"
                      type="Number"
                      required
                      placeholder="XXXXXXXXXXXXX"
                      class="form-control"
                    />
                  </div>
                  <label>Select Bank</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-bank"></i>
                      </span>
                    </div>
                    <select required v-model="sorttcode" class="form-control">
                      <option value disabled selected>Select</option>
                      <option value="044">Access Bank</option>
                      <option value="063">Access Bank (Diamond)</option>
                      <option value="035A">ALAT by WEMA</option>
                      <option value="401">ASO Savings and Loans</option>
                      <option value="023">Citibank Nigeria</option>
                      <option value="050">Ecobank Nigeria</option>
                      <option value="562">Ekondo Microfinance Bank</option>
                      <option value="070">Fidelity Bank</option>
                      <option value="011">First Bank of Nigeria</option>
                      <option value="214">First City Monument Bank</option>
                      <option value="058">Guaranty Trust Bank</option>
                      <option value="030">Heritage Bank</option>
                      <option value="301">Jaiz Bank</option>
                      <option value="082">Keystone Bank</option>
                      <option value="526">Parallex Bank</option>
                      <option value="076">Polaris Bank</option>
                      <option value="101">Providus Bank</option>
                      <option value="221">Stanbic IBTC Bank</option>
                      <option value="068">Standard Chartered Bank</option>
                      <option value="232">Sterling Bank</option>
                      <option value="100">Suntrust Bank</option>
                      <option value="032">Union Bank of Nigeria</option>
                      <option value="033">United Bank For Africa</option>
                      <option value="215">Unity Bank</option>
                      <option value="035">Wema Bank</option>
                      <option value="057">Zenith Bank</option>
                    </select>
                  </div>

                  <button
                    :disabled="loading"
                    type="submit"
                    class="btn btn-primary d-block px-3 mx-auto my-3"
                  >Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          v-if="mssg"
          class="alert text-center alert-primary alert-dismissible mt-2 fade show"
          role="alert"
        >
          <span class="text-center d-inline-block font-weight-bolder">{{mssg}}</span>
          <button
            type="button"
            @click="closeMsg"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          v-if="msg"
          class="alert text-center alert-danger alert-dismissible mt-2 fade show"
          role="alert"
        >
          <span class="text-center d-inline-block font-weight-bolder">{{msg}}</span>
          <button
            type="button"
            @click="closeMsg"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
import Loader from "../MAjo/Loader";
import Calls from "../../../Service/Calls";
export default {
  name: "BankInfo",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      recepientPresent: false,
      NotRecepientPresent: true,

      token: "",
      trans_id: "",
      user_id: "",

      msg: "",
      mssg: "",
      loading: false,
      pageLoading: true,
      arrive: false,

      paystackAuthPubKey: "",
      paystackAuthSecKey: "",

      fullname: "",
      accountName: "",
      accountNumber: "",
      sorttcode: "",
      recipient_code: "",
      bank_name: ""
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      setTimeout(() => {
        this.accountNumber = "";
        this.sorttcode = "";
      }, 3000);
    },
    submitBkinfo() {
      this.loading = true;
      var webAdd = `https://api.paystack.co/bank/resolve?account_number=${this.accountNumber}&bank_code=${this.sorttcode}`;
      axios
        .get(`${webAdd}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.paystackAuthSecKey
          }
        })
        .then(res => {
          if (res.data.status == true) {
            this.accountName = res.data.data.account_name;
            var webAddress = "https://api.paystack.co/transferrecipient";
            axios
              .post(
                `${webAddress}`,
                {
                  type: "nuban",
                  account_number: this.accountNumber,
                  bank_code: this.sorttcode
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.paystackAuthSecKey
                  }
                }
              )
              .then(res => {
                if (res.data.status == true) {
                  this.recipient_code = res.data.data.recipient_code;
                  this.bank_name = res.data.data.details.bank_name;
                  axios
                    .post(
                      `https://momentum.ng/backend/api/users/enterbankdetails`,
                      {
                        user_id: this.user_id,
                        recipient_code: this.recipient_code,
                        account_number: this.accountNumber,
                        bank_name: this.bank_name,
                        sort_code: this.sorttcode
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + this.token
                        }
                      }
                    )
                    .then(res => {
                      this.loading = false;
                      if (res.data.status == true) {
                        this.mssg = res.data.message;
                      } else {
                        this.msg = res.data.message;
                      }
                    })
                    .catch(err => {
                      this.loading = false;
                      console.log(err);
                    });
                }
              })
              .catch(err => {
                this.loading = false;
                console.log("An Error Occured");
                this.msg = "An Error Occured";
                console.log(err);
              });
          } else {
            this.loading = false;
            this.msg = res.data.message;
          }
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
          this.msg = "Error! Please Check Your Account Number";
        });
    }
  },
  created() {
    Calls.getUsers().then(res => {
      this.pageLoading = false;
      this.arrive = true;
      this.user_id = res.user_id;
      this.fullname = res.fullname;
      this.recipient_code = res.recipient_code;
      this.trans_id = res.trans_id;
      this.user_id = res._id;

      if (this.recipient_code == null) {
        this.NotRecepientPresent = true;
        this.recepientPresent = false;
      } else {
        this.NotRecepientPresent = false;
        this.recepientPresent = true;
        this.accountNumber = res.account_number;
        this.bank_name = res.bank_name;
      }
      if (this.trans_id == "") {
        Calls.reloadPage();
      }
    });
    this.token = Calls.getJwt();

    axios
      .post(
        `https://momentum.ng/backend/api/users/verifypaypinweb`,
        {
          trans_id: this.trans_id
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then(res => {
        this.paystackAuthPubKey = res.data.paystackAuthPubKey;
        this.paystackAuthSecKey = res.data.paystackAuthSecKey;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


