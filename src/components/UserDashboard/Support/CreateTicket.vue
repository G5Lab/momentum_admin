<template>
  <Structure page="Create Ticket">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <div v-if="loading" class="my-2 text-center">
            <Loader />
          </div>
          <div class="card col-md-11 p-0 shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">- Write To Admin</h6>
            </div>
            <div class="card-body px-5">
              <form class="bg-white" @submit.prevent="createTicket">
                <div class="form-group">
                  <label for="exampleTextarea">Subject</label>
                  <input
                    type="text"
                    v-model="subject"
                    class="form-control"
                    placeholder="Enter Ticket Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Priority</label>
                  <select name="Priority" required v-model="priority" class="form-control">
                    <option value disabled selected>Select Priority</option>
                    <option value="Normal">Normal</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Body</label>
                  <textarea
                    v-model="body"
                    required
                    class="form-control"
                    id="exampleTextarea"
                    rows="7"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn btn-primary mt-3 btn-block text-center mb-3"
                >Create Ticket</button>
              </form>
            </div>
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
import Loader from "../Msave/Loader";
import axios from "axios";
export default {
  name: "CreateTicket",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      user_id: "",

      subject: "",
      priority: "",
      body: "",

      msg: "",
      mssg: "",
      loading: false
    };
  },
  methods: {
    closeMsg() {
      this.msg = "";
      this.mssg = "";
      setTimeout(() => {
        this.subject = "";
        this.priority = "";
        this.body = "";
      }, 3000);
    },
    createTicket() {
      this.loading = true;
      axios
        .post(
          `https://momentum.ng/backend/api/tickets/create`,
          {
            trans_id: this.trans_id,
            subject: this.subject,
            priority: this.priority,
            body: this.body
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`
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
          console.log(err);
        });
    }
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;
  }
};
</script>
