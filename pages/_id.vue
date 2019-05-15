<template>
  <div class="regular_page">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>
    <div class="container">
      <div class="post_content" v-html="content.post_content"></div>
    </div>
    <Footer :items="common.footer"></Footer>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var page = route.params.id;

    var requestRoute = "/" + process.env.apiSlug + "/tagcity/v3/page/" + page;

    if (app.i18n.locale != "nl") {
      var url = process.env.apiUrl + "/" + app.i18n.locale + requestRoute;
    } else {
      var url = process.env.apiUrl + requestRoute;
    }

    let { data } = await axios.get(url, {
      params: {}
    });

    return {
      common: data.common,
      content: data.content,
      meta: data.meta
    };
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.meta.desc
        }
      ]
    };
  },
  components: {
    Nav,
    TopBar,
    Footer
  }
};
</script>

<style>
</style>
