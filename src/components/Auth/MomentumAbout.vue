<template>
<body>
  <div class="bg-primary m-0 py-1">
    <nav class="navbar navbar py-0 navbar-expand-lg">
      <div class="container">
        <div>
          <img src="img/momentum.png" width="300rem" alt />
        </div>
      </div>
    </nav>
    <div class="text-center m-0 p-0">
      <h1 class="mt-0 p-0 font-weight-bold display-4">{{pageName}}</h1>
    </div>
  </div>
  <slot></slot>
  <Footer class="bg-primary" />
</body>
</template>

<script>
import Footer from "../GLayouts/Footer";
export default {
  name: "MomentumAbout",
  components: {
    Footer
  },
  props: ["pageName"]
};
</script>

<style  scoped>
.display-4 {
  color: rgb(29, 28, 28);
  font-weight: 300;
  font-style: italic;
}
body {
  color: black;
}
</style>