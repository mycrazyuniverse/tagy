<template>
  <span class="property">
    <Logo :content="logo" class="property-icon"></Logo>
    <a v-if="link" :href="link" :title="name" class="property-text prevent">
      <slot>{{ name }}</slot>
    </a>
    <em class="property-text" v-else>
      <slot>{{ name }}</slot>
    </em>
  </span>
</template>

<script>
import Logo from "~/components/Logo.vue";

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
    Logo
  }
};
</script>

<style>
</style>
