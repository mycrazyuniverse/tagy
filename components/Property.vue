<template>
  <span class="property">
    <icon :content="logo" class="property-icon"></icon>
    <a v-if="link" :href="link" class="property-text prevent">
      <slot>{{ name }}</slot>
    </a>
    <em class="property-text" v-else>
      <slot>{{ name }}</slot>
    </em>
  </span>
</template>

<script>
import icon from "~/components/icon.vue";

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
  },
  components: {
    icon
  }
};
</script>

<style>
</style>
