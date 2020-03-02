<template>
<body id="page-top">
  <div id="wrapper" class="text-gray-800">
    <Sidebar>
      <SidebarInner />
    </Sidebar>
    <Boddy :page="page">
      <slot></slot>
    </Boddy>
  </div>
  <ScrollUpModal />
</body>
</template>

<script>
import Sidebar from "../../GLayouts/Sidebar";
import SidebarInner from "../GUserLayouts/SidebarInner";
import Boddy from "../../GLayouts/Boddy";
import ScrollUpModal from "../../GLayouts/ScrollupModal";

export default {
  name: "structure",
  components: {
    Sidebar,
    SidebarInner,
    Boddy,
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