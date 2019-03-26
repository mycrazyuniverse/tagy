<template>
  <div id="gids">
    <div class="bar">
      <TopBar :search="search"></TopBar>
      <Nav :items="nav"></Nav>
    </div>
    <div class="container">gids</div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import axios from "axios";

//http://dev-tagcity.pantheonsite.io/api/tagcity/v3/gids

export default {
  async asyncData({ app, route }) {
    console.log(route.params.shop);

    var requestRoute = "/api/tagcity/v3/webshop/" + route.params.shop;

    if (app.i18n.locale != "nl") {
      var url = process.env.apiUrl + "/" + app.i18n.locale + requestRoute;
    } else {
      var url = process.env.apiUrl + requestRoute;
    }

    let { data } = await axios.get(url, {
      params: {}
    });

    return {
      nav: data.nav,
      search: data.search
    };
  },
  head() {
    return {
      title: "this.meta.title",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>

<style>
</style>
