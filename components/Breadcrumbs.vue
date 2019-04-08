<template>
  <ul class="breadcrumbs">
    <li v-for="(item, index) in list" class="breadcrumb float-left">
      <span class="crust">></span>
      <a :href="item.url">{{ item.title }}</a>
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

.crust {
  padding: 10px;
}
</style>
