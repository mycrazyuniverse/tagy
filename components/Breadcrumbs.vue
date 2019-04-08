<template>
  <ul class="breadcrumbs">
    <li v-for="(item, index) in list" class="breadcrumb float-left">
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
.breadcrumbs {
  width: 100%;
  display: inline-block;
}
</style>
