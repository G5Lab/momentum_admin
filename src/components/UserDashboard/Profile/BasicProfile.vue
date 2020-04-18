<template>
  <Structure page="Basic Information">
    <div class="container-fluid">
      <Loader v-if="pageloading" class="d-block text-center my-5" />

      <div v-if="arrive" class="row justify-content-center">
        <div class="col-md-10 p-4 bg-white shadow col-lg-8 border">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img my-2 mb-3">
                <i style="font-size:" class="fa fa-user"></i>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-head text-center">
                <h5 class="h2 font-weight-normal text-capitalize">{{fullname}}</h5>
                <h6 class="font-weight-normal h4">{{membershipStatus}}</h6>
                <p class="proile-rating">
                  RATING :
                  <span>{{rating}}</span>
                </p>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >Basic</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >Others</a>
                  </li>
                </ul>
              </div>
            </div>
            <!--  <div class="col-md-2">
                <router-link
                  to="/updateprofile"
                  class="profile-edit-btn d-none d-md-block"
                  name="btnAddMore"
                >
                  Complete
                  <span class="d-none d-lg-inline">Profile</span>
                </router-link>
            </div>-->
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Full_Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{fullname}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{email}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{mobile}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Address</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{address || "Not Set"}}</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <label>Date Of Birth</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{dob || "Not Set"}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Transaction Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{trans_id}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Referer</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{referer || 'Not Referered'}}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>Level</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{level}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Rating</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{rating}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Next Of Kin</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{nok || "Not Set"}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Next Of Kin No.</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{nok_number || "Not Set"}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Employer Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{EmployerName || "Not Set"}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Membership Status</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{membershipStatus}}</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <label>Employer Address</label>
                    </div>
                    <div class="col-md-6">
                      <p>{{EmployerAddress|| "Not Set"}}</p>
                    </div>
                  </div>
                </div>
              </div>
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
import Calls from "../../../Service/Calls";
export default {
  name: "BasicProfile",
  components: {
    Structure,
    Loader
  },
  data() {
    return {
      fullname: "",
      rating: "",
      trans_id: "",
      email: "",
      mobile: "",
      level: "",
      referer: "",
      address: "",
      dob: "",
      nok: "",
      nok_number: "",
      EmployerName: "",
      EmployerAddress: "",
      membershipStatus: "",

      // others
      pageloading: true,
      arrive: false
    };
  },
  created() {
    Calls.getUsers().then(res => {
      this.pageloading = false;
      this.arrive = true;
      this.fullname = res.fullname;
      this.rating = res.rating;
      this.trans_id = res.trans_id;
      this.email = res.email;
      this.mobile = res.mobile;
      this.level = parseInt(res.level);
      this.referer = res.referer;
      this.address = res.address;
      this.nok = res.nok;
      this.nok_number = res.nok_number;
      this.EmployerName = res.employer;
      this.EmployerAddress = res.employer_address;
      this.dob = res.dob;

      if (this.dob) {
        this.dob = new Date(this.dob).toString().slice(0, 15);
      }

      if (this.trans_id == null) {
        Calls.reloadPage();
      }

      if (this.level == 1) {
        this.membershipStatus = "Basic Member";
      } else if (this.level == 4) {
        this.membershipStatus = "Premium Member";
      } else {
        this.membershipStatus = "Share-holder";
      }
    });
  }
};
</script>

<style scoped>
.profile-img {
  text-align: center;
}
.profile-img .fa {
  width: 70%;
  height: 100%;
  font-family: 100rem;
}
/* .profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
} */
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
/* .profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  background: rgb(22, 22, 22);
  padding: 4%;
  font-weight: 600;
  color: white;
  text-align: center;
  cursor: pointer;
} */
.fa {
  font-size: 9rem !important;
}
.proile-rating {
  font-size: 1rem;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 700;
  margin: 0 !important;
  color: rgb(59, 111, 172);
}
.profile-tab p {
  font-weight: 500;
}
/* .profile-tab .row {
  border-bottom: 0.02rem solid black;
  padding-top: 0.05rem;
} */
</style>