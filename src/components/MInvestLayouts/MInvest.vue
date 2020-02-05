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
import ScrollupModal from "../GLayouts/ScrollupModal";
import Sidebar from "../GLayouts/Sidebar";
import Body from "./Body";
export default {
  name: "MInvest",
  components: {
    Sidebar,
    Body,
    ScrollupModal
  }
};
</script>

<style lang="stylus" scoped></style>