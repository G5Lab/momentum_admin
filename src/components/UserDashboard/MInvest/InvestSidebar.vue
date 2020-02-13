<template>
  <ul class="nav list-group">
    <li class="list-group-item">Categories</li>
    <li class="nav-item d-block">
      <router-link class="nav-link" to="#">Accessories</router-link>
    </li>
    <li class="nav-item d-block">
      <router-link class="nav-link" to="#">Agriculture</router-link>
    </li>
    <li class="nav-item d-block">
      <router-link class="nav-link" to="#">Transportation</router-link>
    </li>
    <li class="nav-item d-block">
      <router-link class="nav-link" to="#">Clothing</router-link>
    </li>
  </ul>
</template>

<style scoped>
.list-group-item {
  font-size: 1.17rem;
  color: black;
  background: rgba(61, 60, 60, 0.336);
}
.nav-item,
.nav-link {
  color: black;
  font-weight: blod;
  font-size: 0.9rem;
  cursor: pointer !important;
}

.nav-item:hover,
.nav-link:hover {
  background: rgba(61, 60, 60, 0.336);
  color: white !important;
}
ul {
  border: 1px solid rgb(59, 58, 58);
  border-radius: 3%;
  min-height: 100%;
}
</style>