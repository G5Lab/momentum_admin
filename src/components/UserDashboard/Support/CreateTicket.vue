<template>
  <Structure page="Create Ticket">
    <div class="container-fluid">
      <div class="row justify-content-center px-2">
        <div class="card col-md-9 p-0 shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">- Write To Admin</h6>
          </div>
          <div class="card-body">
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
              <Loader v-if="loading" class="my-2 text-center d-block" />

              <button
                type="submit"
                :disabled="loading"
                class="btn btn-primary mt-3 btn-block text-center mb-3"
              >Create Ticket</button>
              <Successmsg :mssg="mssg" v-on:closeMsg="closeMsg" />
              <Failuremsg :msg="msg" v-on:closeMsg="closeMsg" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import Failuremsg from "../GUserLayouts/Failuremsg";
import Successmsg from "../GUserLayouts/Successmsg";

import Calls from "../../../Service/Calls";

import axios from "axios";
export default {
  name: "CreateTicket",
  components: {
    Structure,
    Failuremsg,
    Successmsg,
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
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == "") {
      Calls.reloadPage();
    }
  }
};
</script>
