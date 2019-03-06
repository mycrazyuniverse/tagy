<template>
  <a :href="url">
    <img :src="logo" class="webshop-logo" width="40">
  </a>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 40
    }
  }
};
</script>

<style>
</style>
