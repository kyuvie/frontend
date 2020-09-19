<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/random">Random</router-link> |
    <router-link to="/tweet">Tweet</router-link> |
    <router-link to="/test">Test</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>