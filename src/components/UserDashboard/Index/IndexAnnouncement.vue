<template>
  <div class="card">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Announcements</h6>
    </div>
    <div class="card-body">
      <div class="row">
        <div
          v-for="(announcement, index) in announcements"
          :key="index"
          class="col-md-5 col-lg-5 col-xl-3 col-sm-6 m-2 first border"
        >
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
              class="btn btn-info"
            >View Message</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    this.user_id = this.$session.get("user")._id;

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