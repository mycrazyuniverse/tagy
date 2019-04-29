<template>
  <div class="boxes">
    <div class="flexbox" v-for="(item, index) in items" :key="index">
      <slot v-for="(subitem, subindex) in item" :row="subitem">
        <Box></Box>
      </slot>
    </div>
  </div>
</template>

<script>
import Box from "~/components/Box.vue";

export default {
  props: {
    items: {
      type: Object,
      default: {}
    }
  },
  components: {
    Box
  }
};
</script>
