<template>
  <div>
    <p>Click on any of the links to view progress made</p>

    <router-link to="/register">Registration</router-link>
    <br />
    <router-link to="/userdashboard">User Dashboard</router-link>
    <br />
    <!-- <router-link to="/admin">Admin Dashboard</router-link> -->
    <br />
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>

<style scoped>
div {
  margin-top: 60px;
}
</style>