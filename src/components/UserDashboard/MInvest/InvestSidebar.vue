<template>
  <ul class="list-group">
    <li class="list-group-item border-none">Categories</li>
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
  color: whitesmoke;
  background: rgb(74, 71, 138);
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
  border: 1px solid rgb(17, 90, 33);
  border-radius: 0.5rem;
  min-height: 100%;
}
</style>