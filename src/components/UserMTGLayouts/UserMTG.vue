<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <CreateUser />
  </div>
</body>
</template>

<script>
import CreateUser from "./CreateUser";
import Sidebar from "../GLayouts/Sidebar";
export default {
  name: "UserMTG",
  components: {
    Sidebar,
    CreateUser
  }
};
</script>

<style lang="stylus" scoped></style>