<template>
  <aside :class="containerclass" v-if="display">
    <h3 :class="toggleTitle()">{{ title }}</h3>
    <div class="m-toggle-container">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    titleclass: {
      type: String,
      default: "padding"
    },
    containerclass: {
      type: String,
      default: "widget m-toggle"
    }
  },
  methods: {
    toggleTitle: function() {
      return "m-toggle-switch m-toggle-title " + this.titleclass;
    }
  }
};
</script>

<style>
</style>
