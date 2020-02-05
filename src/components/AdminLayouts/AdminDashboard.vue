<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <Main />
  </div>
  <Scroll />
</body>
</template>

<script>
import Sidebar from "../GLayouts/Sidebar";
import Main from "./Body";
import Scroll from "../GLayouts/ScrollupModal";
export default {
  name: "AdminDashboard",
  components: {
    Sidebar,
    Main,
    Scroll
  }
};
</script>

<style scoped>
</style>