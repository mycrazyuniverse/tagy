<template>
  <div class="text-center">
    <a :href="url" target="_blank" rel="nofollow" class="adverlink">
      <img width="100%" class="loaded" :src="image">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
