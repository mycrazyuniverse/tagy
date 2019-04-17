<template>
  <div class="logoprop">
    <img :src="logo" id="webshop-logo" width="35" height="35">
    <span class="logoprop-content">
      <slot>
        <a :href="link">{{ content }}</a>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    content: {}
  }
};
</script>

<style lang="scss">
.logo-prop {
  margin-top: 15px;
}

.logoprop-content {
  font-size: 12px;
  position: relative;
  top: -14px;
  margin-right: 10px;
}
</style>
