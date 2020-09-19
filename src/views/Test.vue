<template>
  <div>
    <b-button @click="HelloButtonClicked">Hello World</b-button>
    <span>{{ hello_world }}</span>
  </div>
</template>
<script>
export default {
  methods: {
    async HelloButtonClicked() {
      const res = await this.axios.get(
        "http://127.0.0.1:8000/api/hello_world/"
      );
      this.hello_world = res.data;
    },
  },
  data() {
    return {
      hello_world: "",
    };
  },
};
</script>