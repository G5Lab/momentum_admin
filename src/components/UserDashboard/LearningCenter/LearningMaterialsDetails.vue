<template>
  <Structure page="College of Money Details">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div v-if="arrive" class="m-0 p-0 col-md">
            <div class="row no-gutters">
              <div class="col-md-6 m-0">
                <div class="card-header">
                  <p>
                    <span
                      class="text-center d-block font-weight-bold text-primary mb-3"
                    >{{materials.title}}</span>
                  </p>
                  <div class="text-gray-900 hh font-weight-bold">
                    <span>Category:</span>
                    {{materials.category}}
                  </div>
                  <div class="mt-2 h4 lead">{{materials.overview}}</div>
                  <div class="text-right text-primary">
                    <small class="font-weight-bold">Date: {{materials.date | formatDate}}</small>
                  </div>
                </div>
              </div>
              <div class="d-none d-md-block col-md-6 m-0">
                <div class="m-0 p-0">
                  <img class="widd" :src="materials.attachment" alt />
                </div>
              </div>
            </div>
            <div class="border py-4 p-3">
              <p>{{materials.body}}</p>
              <div class="d-flex justify-content-center mt-5">
                <router-link class="btn btn-outline-primary px-5" to="/learningmaterials">
                  <i class="fa fa-arrow-left"></i>
                  Go Back
                </router-link>
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

    <div class="container">
      <div v-if="onMaterials" class="row justify-content-center m-5">
        <div class="text-center">
          <div class="card-body bg-danger text-white border h3 font-weight-bolder">{{onMaterials}}</div>
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
      onMaterials: "",
      arrive: false
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
        this.arrive = true;
        if (res.data.data.length == 0) {
          this.onMaterials = "You Do Not Have Any History Yet";
        } else {
          this.materials = res.data.data.slice().reverse()[
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

<style scoped>
.card-header {
  color: black;
  background: #42618a42;
  height: 20.5rem;
}
.card-header p {
  font-size: 2rem;
  line-height: 1.1;
}
.widd {
  max-height: 20.5rem;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .card-header {
    font-size: 1.3rem;
    line-height: 1;
    padding: 3px;
  }
}
</style>