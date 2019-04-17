<template>
  <div class="categorie_overzicht">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>
    <div class="container">
      <div id="content">
        <h2>Webshops in deze categorie</h2>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";

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
  components: {
    Nav,
    TopBar
  }
};
</script>

<style>
</style>
