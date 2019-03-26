<template>
  <a :href="url" :title="title" class="tooltip">
    <img :src="logo" class="webshop-logo" width="40">
    <span class="tooltiptext">{{ title }}</span>
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
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
