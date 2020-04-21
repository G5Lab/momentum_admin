<template>
  <Structure page="Announcement">
    <div class="container-fluid px-3 mb-4">
      <div v-if="loading" class="my-2 text-center">
        <Loader />
      </div>
      <div v-if="noAnnouncement">
        <p class="text-center my-5 h1 display-4 text-danger">Announcement is Currently Empty</p>
      </div>
      <div class="row px-2">
        <div v-for="(announcement, index) in announcements" :key="index" class="first">
          <div class="card-body">
            <p class="text-dark m-1">
              <span>Title:</span>
              {{announcement.title}}
            </p>
            <p class="text-dark m-1">
              <span>Overview:</span>
              {{announcement.overview}}
            </p>
            <router-link
              v-bind:to="'/announcementDetails/'+ index"
              class="btn btn-primary"
            >View Message</router-link>
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
  data() {
    return {
      token: "",
      trans_id: "",
      user_id: "",

      announcements: [],
      loading: true,
      noAnnouncement: ""
    };
  },
  filters: {
    formatDate: function(value) {
      var day = new Date(value);
      return day.toString().slice(0, 15);
    }
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.trans_id == "") {
      Calls.reloadPage();
    }

    axios
      .get(`https://momentum.ng/backend/api/fetchdata/announcements`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`
        }
      })
      .then(res => {
        this.loading = false;
        if (res.data.data.length == 0) {
          this.noAnnouncement = "You Do Not Have Any Inbox Yet";
        } else {
          this.announcements = res.data.data.slice().reverse();
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