<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar Utype="Admin">
      <SidebarInner />
    </Sidebar>
    <Body :page="page">
      <slot></slot>
    </Body>
  </div>
  <ScrollUpModal />
</body>
</template>

<script>
import Sidebar from "../../GLayouts/Sidebar";
import Body from "../../GLayouts/Body";
import ScrollUpModal from "../../GLayouts/ScrollupModal";
import SidebarInner from "./ASidebarInner";

export default {
  name: "structure",
  components: {
    Sidebar,
    Body,
    SidebarInner,
    ScrollUpModal
  },
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style lang="stylus" scoped></style>