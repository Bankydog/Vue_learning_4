<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/page1">Page 1</RouterLink> |
      <RouterLink to="/page2">Page 2</RouterLink>|
      <RouterLink to="/page3">Page 3</RouterLink>|
      <RouterLink to="/page4">Page 4</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
<style scoped>
nav {
  text-align: center;
  padding: 10px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: blue;
}
nav a:hover {
  text-decoration: underline;
}
</style>

