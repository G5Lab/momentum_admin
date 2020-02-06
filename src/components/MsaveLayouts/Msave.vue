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
import Body from "./Body";
import Sidebar from "../GLayouts/Sidebar";
import ScrollupModal from "../GLayouts/ScrollupModal";
export default {
  name: "Msave",
  components: {
    Sidebar,
    ScrollupModal,
    Body
  }
};
</script>

<style lang="stylus" scoped></style>