<template>
<body>
  <div class="bg py-4">
    <nav class="navbar navbar navbar-expand-lg">
      <div class="container">
        <div class="text-center d-flex justify-content-center text-white h2 pb-2">
          <div>
            <img src="img/favi.png" width="80rem" alt />
          </div>
          <div class="mt-2">
            <p class="mt-3 d-inline-block">
              <span class="font-weight-light i">omen</span>
              <span class="font-weight-bold text-gray-900">tum</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="text-center">
      <h1 class="my-4 font-weight-bold display-4">{{pageName}}</h1>
    </div>
  </div>
  <slot></slot>
  <Footer class="bg" />
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
.bg {
  background: #0e3b777a;
}
body {
  color: black;
}
</style>