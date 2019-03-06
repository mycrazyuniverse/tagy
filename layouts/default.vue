<template>
  <div>
    <div class="app">
      <nuxt/>
      <div class="mobile-menu-overlay overlay hide"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";

export default {
  mounted() {},
  components: {
    Nav,
    TopBar
  },
  data: {}
};
</script>


<style lang="scss">
@import "assets/styles/common";
</style>
