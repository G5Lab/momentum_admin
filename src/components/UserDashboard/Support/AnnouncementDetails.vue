<template>
  <Structure page="Announcement Details">
    <div v-if="loading" class="text-center">
      <Loader />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div v-if="arrive" class="m-0 p-0 col-md">
          <div class="row no-gutters">
            <div class="col-md-10 m-0">
              <div class="card-header text-justify-start">
                <p>
                  <span class="d-block text-gray-900 h5">
                    <span class="font-weight-bold">Title: {{announcement.title}}</span>
                  </span>
                  <span
                    class="d-block mb-3 font-weight-bold text-primary"
                  >Overview: {{announcement.overview}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="border mt-0 p-3">
            <p>{{announcement.body}}</p>
            <div class="d-flex justify-content-center mt-5">
              <router-link class="btn btn-outline-primary px-5" to @click.native="goBack">
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
import Loader from "../MAjo/Loader";
import Structure from "../GUserLayouts/Structure";
import axios from "axios";

import Calls from "../../../Service/Calls";
export default {
  name: "InboxDetails",
  data() {
    return {
      token: "",
      trans_id: "",
      announcement: [],
      loading: true,
      onMaterials: "",
      arrive: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
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
      .get(`https://momentum.ng/backend/api/fetchdata/announcements`, {
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
          this.announcement = res.data.data.slice().reverse()[
            this.$route.params.id
          ];
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