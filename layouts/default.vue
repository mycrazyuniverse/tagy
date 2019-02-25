<template>
  <div>
    <div class="app">
      <TopBar></TopBar>
      <Nav></Nav>
      <nuxt/>
      <div class="mobile-menu-overlay overlay hide"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";

export default {
  components: {
    Nav,
    TopBar
  },
  props: {
    propName: {
      type: String,
      default: ""
    }
  }
};
</script>


<style lang="scss">
@import "assets/styles/common";
</style>
