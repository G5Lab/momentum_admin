<template>
  <Structure page="Inbox">
    <div class="container-fluid mb-4 px-3">
      <Loader v-if="loading" class="my-2 text-center d-block" />
      <p
        v-if="noInbox"
        class="text-center my-3 my-md-5 h1 display-4 text-danger"
      >Inbox is Currently Empty</p>

      <div class="row">
        <div v-for="(message, index) in inbox" :key="index" class="first">
          <div class="card-body">
            <p class="text-dark m-1">
              <span>From:</span>
              {{message.priority}}
            </p>
            <p class="text-dark m-1">
              <span>Date:</span>
              {{message.date | formatDate}}
            </p>
            <p class="text-dark m-1">
              <span>Desc:</span>
              {{message.subject}}
            </p>
            <router-link v-bind:to="'/inboxDetails/'+ index" class="btn btn-info">View Message</router-link>
          </div>
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import Calls from "../../../Service/Calls";
import axios from "axios";

export default {
  name: "Inbox",
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

      inbox: [],
      loading: true,
      noInbox: ""
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
      .get(`https://momentum.ng/backend/api/tickets/inbox/${this.trans_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        this.loading = false;
        if (res.data.data.length == 0) {
          this.noInbox = "You Do Not Have Any Inbox Yet";
        } else {
          this.inbox = res.data.data.slice().reverse();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.first {
  width: 20rem;
  margin: 0.4rem;
  border: 2px dotted rgba(31, 30, 30, 0.63);

  padding: 0.1rem;
  transition: all 0.5s;
}
.first:hover {
  border: 2px solid rgba(31, 30, 30, 0.63);
}
</style>