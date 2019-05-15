<template>
  <a
    :href="url"
    :title="title"
    class="tooltip webshop-logo"
    v-bind:style="{ width: w + 'px',  height: h + 'px' }"
  >
    <img :src="logo" class width="100%">
    <span class="tooltiptext" v-if="title">{{ title }}</span>
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
    w: {
      type: Number,
      default: 42
    },
    h: {
      type: Number,
      default: 42
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
