<template>
  <Structure page="Target Savings">
    <div class="container-fluid">
      <div v-if="mode">
        <div class="row justify-content-center">
          <div class="col-md-9 p-3 pb-5 border">
            <p>With the Target Savings plan, you’ll be able to reach your financial goals faster, whether it’s for a car, phone, new clothes or holiday. Designed to help you save for any specific purpose, your Target Savings will help you get there quicker.</p>
            <div class="text-center">
              <i class="fa fa-arrow-down h2 text-primary d-inline-block text-center scroll"></i>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="container mt-3 d-flex justify-content-center">
            <div class="col-md-8">
              <div class="card shadow justify-content-center mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">- Create Savings Plan</h6>
                </div>

                <div class="card-body">
                  <form class="register bg-white" v-on:submit.prevent="CreateSavings">
                    <div class="form-group">
                      <label>Name Your Plan</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-pencil"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          v-model="createSavingss.plan"
                          class="form-control"
                          placeholder="Plan"
                          required
                        />
                      </div>
                    </div>
                    <h2
                      v-if="msg.length > 1"
                      class="text-danger p-2 bg-light font-weight-bold text-center h1"
                    >{{msg}}</h2>
                    <div class="form-group">
                      <label>Enter Target Amount</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-money"></i>
                          </span>
                        </div>
                        <input
                          type="number"
                          v-model="createSavingss.target_amount"
                          class="form-control"
                          placeholder="Target Amount"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label>Select A Target Date</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fa fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          v-model="createSavingss.maturity"
                          class="form-control"
                          placeholder="Target Amount"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary mt-3 btn-block text-center mb-3"
                    >Continue</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-if="loading">
      <Loader />
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "./Loader";
import axios from "axios";

export default {
  name: "TargetSavings",
  data() {
    return {
      createSavingss: {
        plan: "",
        target_amount: "",
        maturity: ""
      },
      msg: "",
      mode: false,
      loading: true
    };
  },
  components: {
    Structure,
    Loader
  },
  methods: {
    CreateSavings() {
      const token = this.$session.get("jwt");
      const trans_id = this.$session.get("user").trans_id;
      const user_id = this.$session.get("user")._id;
      axios
        .post(
          `https://momentum.ng/backend/api/savings/create`,
          {
            user_id: user_id,
            trans_id: trans_id,
            plan: this.createSavingss.plan,
            target_amount: this.createSavingss.target_amount,
            maturity: this.createSavingss.maturity
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          if (res.data.status == false) {
            this.msg = "You are currently on a Plan";
            setTimeout(() => {
              this.msg = "";
              this.$router.push("TargetSavingsAction");
            }, 3000);
          } else {
            this.msg = "Savings Wallet Set Successfully";
            setTimeout(() => {
              this.msg = "";
              this.$router.push("TargetSavingsAction");
            }, 3000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    const token = this.$session.get("jwt");
    const trans_id = this.$session.get("user").trans_id;
    axios
      .get(`https://momentum.ng/backend/api/fetchdata/savings/${trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if (res.data.status == true) {
          this.msg = "";
          this.$router.push("TargetSavingsAction");
        } else {
          this.loading = false;
          this.mode = true;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.scroll {
  width: 30px;
  animation: move 1s infinite alternate;
  font-size: 1.5rem;
}
@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>