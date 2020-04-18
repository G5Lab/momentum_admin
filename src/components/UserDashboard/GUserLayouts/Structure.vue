<template>
<body id="page-top">
  <div id="wrapper" class="text-gray-800">
    <Sidebar :class="{Sidebar: hide == true}" class="none">
      <SidebarInner />
    </Sidebar>
    <Boddy v-on:hideSidebar="hideSidebar" :page="page">
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
  data() {
    return {
      hide: false
    };
  },
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
  },
  methods: {
    hideSidebar() {
      if (this.hide == false) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    }
  }
};
</script>

<style  scoped>
.Sidebar {
  display: block !important;
}
@media only screen and (max-width: 765px) {
  .none {
    display: none;
  }
}
</style>