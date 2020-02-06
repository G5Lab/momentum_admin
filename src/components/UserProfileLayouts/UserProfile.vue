<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <Body />
  </div>
  <ScrollupModal />
</body>
</template>
<script>
import Sidebar from "../GLayouts/Sidebar";
import ScrollupModal from "../GLayouts/ScrollupModal";
import Body from "./Body";
export default {
  name: "UserProfile",
  components: {
    Sidebar,
    Body,
    ScrollupModal
  }
};
</script>

<style lang="stylus" scoped></style>