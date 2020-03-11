<template>
  <Structure page="Inbox">
    <div class="container-fluid mb-4">
      <div v-if="loading" class="my-2 text-center">
        <Loader />
      </div>
      <div v-if="noInbox">
        <p class="text-center my-5 h1 display-4 text-danger">Inbox is Currently Empty</p>
      </div>
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
import axios from "axios";
import Structure from "../GUserLayouts/Structure";
import Loader from "../Msave/Loader";
export default {
  name: "Inbox",
  components: {
    Structure,
    Loader
  },
  methods: {},
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
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;

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