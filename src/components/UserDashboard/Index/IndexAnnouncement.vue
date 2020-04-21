<template>
  <div class="card">
    <div class="p-3 mb-0">
      <h6 class="m-0 font-weight-bold h4 text-primary">-Announcements</h6>
    </div>
    <div class="card-body py-0 m-0">
      <div class="row mt-0 pb-3">
        <div
          v-for="(announcement, index) in announcements"
          :key="index"
          class="col-md-5 col-lg-5 col-xl-3 col-sm-6 m-2 p-2 first border"
        >
          <p class="text-dark m-1">
            <span class="font-weight-bold">Title:</span>
            {{announcement.title}}
          </p>
          <p class="text-dark m-1">
            <span class="font-weight-bold">Overview:</span>
            {{announcement.overview}}
          </p>
          <router-link
            v-bind:to="'/announcementDetails/'+ index"
            class="btn btn-outline-dark mx-auto d-block"
          >View Message</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Calls from "../../../Service/Calls";
import axios from "axios";
export default {
  name: "IndexAnnouncement",
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

      announcements: [],
      loading: true,
      noAnnouncement: ""
    };
  },
  created() {
    this.token = Calls.getJwt();
    this.trans_id = Calls.getTrans_Id();
    this.user_id = Calls.getUser_id();

    if (this.token == "") {
      location.reload();
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
          var returns = res.data.data.slice(0, 4);
          this.announcements = returns.slice().reverse();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style scoped>
.first:hover {
  border: 2px dotted rgba(31, 30, 30, 0.63) !important;
}
</style>