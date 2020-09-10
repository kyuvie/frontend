<template>
  <div id="container" :class="{ about: containerActive }">
    <div id="page0" :class="{area: containerActive}">
      <Menu />
    </div>
    <div id="page1" :class="{area: containerActive}">
      <button @click="scrollNext">sample</button>
    </div>
    <div id="page2" :class="{area: containerActive}"></div>
    <div id="page3" :class="{area: containerActive}"></div>
    <b-icon-arrow-down class="fixed-button" @click="scrollNext" />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  mounted() {
    // window.addEventListener('scroll', ()=>{alert('hello')})
  },
  components: {
    Menu,
  },
  data() {
    return {
      containerActive: true,
      page: 1,
    };
  },
  methods: {
    scrollNext() {
      this.$scrollTo("#page" + this.page, { container: '#container'})
      this.page++
      this.page %= 4
    }
  }
};
</script>

<style scoped>
.about {
  overflow: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
}

#page0 {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    to right,
    #8edae5,
    #8edae5 14.3%,
    white 14.3%,
    white 28.6%
  );
}

.area {
  scroll-snap-align: start;
}

#page1 {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    -45deg,
    #f99695,
    #f99695 14.3%,
    white 14.3%,
    white 28.6%
  );
}

#page2 {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: repeating-linear-gradient(
    to bottom,
    #f0e68c,
    #f0e68c 14.3%,
    white 14.3%,
    white 28.6%
  );
}
#page3 {
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

.fixed-button {
  position: fixed;
  bottom: 50px;
  right: 70px;
  width: 120px;
  height: 120px;
}
</style>