<template>
  <Structure page="Learning Center / Materials">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div
            class="card p-0 col-xl-3 first col-md-5 col-lg-6 mb-2"
            v-for="(material, index) in materials"
            :key="index"
          >
            <h4 class="card-header bg-primary text-white m-0 h5">
              <span class="h4">Title :</span>
              {{material.title}}
            </h4>
            <div class="card-body py-3 px-2">
              <p class="my-0 py-0">
                <span class="text-muted lead">Category :</span>
                {{material.category}}
              </p>
              <hr class="my-1" />
              <p>
                <span class="text-muted lead">Overview :</span>
                {{material.overview}}
              </p>
              <router-link
                class="btn btn-outline-primary"
                v-bind:to="'/learningmaterialsdetails/'+ index"
              >Start Learning</router-link>
            </div>
          </div>

          <div class="container">
            <div v-if="onMaterials" class="row justify-content-center m-5">
              <div class="text-center">
                <div
                  class="card-body bg-danger text-white border h3 font-weight-bolder"
                >{{onMaterials}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="row justify-content-center">
        <div class="text-center">
          <Loader />
        </div>
      </div>
    </div>
  </Structure>
</template>

<script>
import Structure from "../GUserLayouts/Structure";
import Loader from "../MAjo/Loader";
import axios from "axios";
export default {
  name: "LearningMaterials",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      token: "",
      trans_id: "",
      materials: [],
      loading: true,
      onMaterials: ""
    };
  },
  created() {
    this.token = this.$session.get("jwt");
    this.trans_id = this.$session.get("user").trans_id;
    axios
      .get(
        `https://momentum.ng/backend/api/learning/materials/${this.trans_id}`,
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
          this.onMaterials = "You Do Not Have Any History Yet";
        } else {
          this.materials = res.data.data.slice().reverse();
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

<style scoped>
.card {
  transition: all 0.4s;
  margin: 0.45rem;
  color: rgb(19, 17, 17);
}
.card:hover {
  transform: translateY(6px);
  box-shadow: 0px 1px 2px 2px rgba(76, 76, 124, 0.493);
}
</style>