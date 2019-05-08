<template>
  <span class="property">
    <i v-html="logo" class="property-icon" v-if="logo != false"></i>
    <svg-icon name="info" class="property-icon" v-else></svg-icon>
    <a v-if="link" :href="link" class="property-text prevent">
      <slot>{{ name }}</slot>
    </a>
    <em class="property-text" v-else>
      <slot>{{ name }}</slot>
    </em>
  </span>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    }
  },
  methods: {
    tag_classes() {}
  }
};
</script>

<style>
</style>
