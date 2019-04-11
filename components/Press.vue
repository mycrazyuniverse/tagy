<template>
  <div class="press padding tag-normal">
    <div class="text-center">
      <div class="dib">
        <a class="press_logo dib" v-for="(item, index) in logos" :key="index">
          <img :src="item.logo.mini" class="press_logo_img float-left">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: {
      type: Object,
      default: []
    }
  }
};
</script>

<style>
.press {
  background-color: #fff;
}

.press_logo {
  margin-left: 10px;
  overflow: hidden;
  padding: 10px;
}
</style>
