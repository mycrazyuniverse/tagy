<template>
  <shop></shop>
</template>

<script>
import shop from "~/layouts/shop.vue";

export default {
  async asyncData({ app, route }) {},
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
    currentLocal() {
      return this.$i18n.locale;
    }
  },
  props: {},
  components: {
    shop
  },
  mounted() {}
};
</script>


