<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar>
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
import SidebarInner from "../GUserLayouts/SidebarInner";
import Body from "../../GLayouts/Body";
import ScrollUpModal from "../../GLayouts/ScrollupModal";

export default {
  name: "structure",
  components: {
    Sidebar,
    SidebarInner,
    Body,
    ScrollUpModal
  },
  props: {
    page: {
      type: String
    }
  }
};
</script>

<style  scoped>
</style>