<template>
<MomentumAbout>
  <body class="py-5 my-3">
    <div class="container-fluid">
      <div class="container">
        <div class="text-center">
          <div class="error mx-auto" data-text="404">404</div>
          <p class="lead text-gray-800 mb-2">Oops! PAGE NOT FOUND</p>
          <p
            class="text-gray-800 font-weight-bold mb-0 text-uppercase"
          >We Are Sorry, But The Page You Requested Was Not Found.</p>
          <router-link to="/userdashboard" class="mt-3 btn btn-primary font-weight-bold">
            <i class="fa fa-arrow-left text-white"></i>
            Go Back
          </router-link>
        </div>
      </div>
    </div>
  </body>
</MomentumAbout>
</template>
<script>
import MomentumAbout from "../Auth/MomentumAbout";
export default {
  name: "NotFound",
  components: {
    MomentumAbout
  }
};
</script>