<template>
  <Structure>
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- 404 Error Text -->
      <div class="text-center">
        <div class="error mx-auto" data-text="404">404</div>
        <p class="lead text-gray-800 mb-5">Page Not Found</p>
        <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
        <router-link to="/userdashboard">&larr; Back to Dashboard</router-link>
      </div>

      <!-- /.container-fluid -->
    </div>
  </Structure>
</template>
<script>
import Structure from "../UserDashboard/GUserLayouts/Structure";
export default {
  name: "NotFound",
  components: {
    Structure
  }
};
</script>