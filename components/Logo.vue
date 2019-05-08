<template>
  <img :src="content" v-if="isURL(content)">
  <i v-html="content" v-else></i>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    w: {
      type: Number,
      default: 35
    },
    h: {
      type: Number,
      default: 35
    },
    content: {}
  },
  methods: {
    isURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return pattern.test(str);
    }
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
