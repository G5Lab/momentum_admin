<template>
  <Structure page="Sent Messages">
    <div class="container-fluid px-3">
      <Loader v-if="loading" class="my-2 text-center d-block" />
      <div v-if="noMessage">
        <p class="text-center my-5 h1 display-4 text-danger">There Is No Sent Messages.</p>
      </div>
      <div class="row">
        <div v-for="message of sentMessage" :key="message._id" class="col-md-4 col-xl-4 mb-3">
          <div class="card border">
            <div class="card-header p-0 m-0 bg-primary text-white p-1">
              <p class="card-title p-0 m-0">Sent Date : {{message.date | formatDate}}</p>
              <p class="card-title p-0 m-0">Subject : {{message.subject}}</p>
              <p class="card-title p-0 m-0">Priority : {{message.priority}}</p>
            </div>
            <div class="card-body overflow-auto">
              <p class="lead m-0">Message Body :</p>
              <p>{{message.body}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import axios from "axios";

import Calls from "../../../Service/Calls";
export default {
  name: "SentMessages",
  components: {
    Structure,
    Loader
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  },
  data() {
    return {
      token: "",
      trans_id: "",
      user_id: "",

      sentMessage: [],
      loading: true,
      noMessage: ""
    };
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == "") {
      Calls.reloadPage();
    }

    axios
      .get(
        `https://momentum.ng/backend/api/tickets/sentmessages/${this.trans_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then(res => {
        this.loading = false;
        if (res.data.data.length == 0) {
          this.noMessage = "You Do Not Have Any History Yet";
        } else {
          this.sentMessage = res.data.data.slice().reverse();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.card-body {
  height: 224px;
}
/* width */
::-webkit-scrollbar {
  width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #395ecf !important;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #011655;
}
</style>