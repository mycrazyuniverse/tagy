<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>
    <div class="container">
      <p>dit is de homepage</p>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/" + process.env.apiSlug + "/tagcity/v3/home";

    if (app.i18n.locale != "nl") {
      var url = process.env.apiUrl + "/" + app.i18n.locale + requestRoute;
    } else {
      var url = process.env.apiUrl + requestRoute;
    }

    let { data } = await axios.get(url, {
      params: {}
    });

    return {
      common: data.common
    };
  },
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
    Nav,
    TopBar
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>
