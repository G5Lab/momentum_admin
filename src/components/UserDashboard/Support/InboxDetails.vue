<template>
  <Structure page="Inbox Details">
    <div v-if="loading" class="row justify-content-center">
      <div class="text-center">
        <Loader />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-if="arrive" class="m-0 p-0 col-md">
          <div class="row no-gutters">
            <div class="col-md-6 m-0">
              <div class="card-header text-justify-start">
                <p>
                  <span class="d-block font-weight-bold text-primary">Subject: {{inbox.subject}}</span>
                  <span class="d-block mb-3 text-gray-900 h5">Priority: {{inbox.priority}}</span>
                  <span class="d-block mt-1 h6">Date: {{inbox.date | formatDate}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="border mt-0 p-3">
            <p>{{inbox.body}}</p>
            <div class="d-flex justify-content-center mt-5">
              <router-link class="btn btn-outline-primary px-5" to="/inbox">
                <i class="fa fa-arrow-left"></i>
                View more
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Loader from "../Msave/Loader";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";

import Calls from "../../../Service/Calls";
export default {
  name: "InboxDetails",
  data() {
    return {
      token: "",
      trans_id: "",
      inbox: [],
      loading: true,
      onMaterials: "",
      arrive: false
    };
  },
  components: {
    Loader,
    Structure
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();

    if (this.trans_id == "") {
      Calls.reloadPage();
    }

    axios
      .get(`https://momentum.ng/backend/api/tickets/inbox/${this.trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        this.loading = false;
        this.arrive = true;
        if (res.data.data.length == 0) {
          this.onMaterials = "You Do Not Have Any History Yet";
        } else {
          this.inbox = res.data.data.slice().reverse()[this.$route.params.id];
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  }
};
</script>