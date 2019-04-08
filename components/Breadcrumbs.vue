<template>
  <ul class="breadcrumb">
    <li v-for="(item, index) in list">
      <a href="#">Home</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
