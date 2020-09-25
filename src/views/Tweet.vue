<template>
  <twitter-app-home />
</template>

<script>
import TwitterAppHome from '../components/TwitterAppHome.vue'
export default {
  components: {
    TwitterAppHome,
  },
}
</script>

<style scoped>
.n-twitter-y {
  overflow: hidden;
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    45deg,
    #676f74,
    #676f74 14.3%,
    white 14.3%,
    white 28.6%
  );
}
</style>