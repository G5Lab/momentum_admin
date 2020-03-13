<template>
  <Structure page="Enter Bank Details">
    <div class="container-fluid">
      <div class="row justify-content-center px-1">
        <div v-if="loading" class="my-2 text-center">
          <Loader />
        </div>
        <form v-on:submit.prevent="submitBkinfo" class="col-md-10 border bg-white p-3">
          <div class="text-center text-gray-900 h5 py-3">Bank Details</div>
          <div class="row justify-content-center">
            <div class="col-md-11">
              <div class="form-group col">
                <label>Select Bank</label>
                <select required v-model="sorttcode" name class="form-control" id>
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
              <div class="form-group col">
                <label for="number">Account Number</label>
                <input
                  v-model="accountNumber"
                  type="Number"
                  required
                  placeholder="XXXXXXXXXXXXX"
                  class="form-control"
                  id="email"
                  name="email"
                />
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
  </Structure>
</template>


<script>
import Structure from "../GUserLayouts/Structure";
import axios from "axios";
import Loader from "../Msave/Loader";
export default {
  name: "BankInfo",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      user_id: "",

      msg: "",
      mssg: "",
      loading: false,

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
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
    this.fullname = this.$session.get("user").fullname;

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
