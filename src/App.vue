<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.btn-primary:hover {
  background: rgba(27, 93, 131, 0.89) !important;
}
.btn-primary {
  background: rgba(37, 125, 175, 0.89) !important;
}
.text-primary {
  color: rgba(37, 125, 175, 0.89) !important;
}
.bg-primary {
  background: rgba(37, 125, 175, 0.89) !important;
}
router:hover {
  text-decoration: none !important;
}
</style>
