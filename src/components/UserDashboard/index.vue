<template>
<body id="page-top">
  <div id="wrapper">
    <Sidebar Utype="User">
      <SidebarInner />
    </Sidebar>
    <Body page="Dashboard"></Body>
  </div>
</body>
</template>

<script>
import Sidebar from "../GLayouts/Sidebar";
import SidebarInner from "./GUserLayouts/SidebarInner";
import Body from "../GLayouts/Body";

export default {
  name: "index",
  components: {
    Sidebar,
    SidebarInner,
    Body
  }
};
</script>

<style lang="stylus" scoped></style>