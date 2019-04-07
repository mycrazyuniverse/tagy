<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
      <ShopBar :title="shopbar.title" :subtitle="shopbar.subtitle" :logo="shopbar.thumb"></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <p>dit word de categoriepagina</p>
      </div>
      <div class="sidebar sidebar-fusion">
        <aside class="widget">
          <AuthorBio
            :name="authorbio.name"
            :role="authorbio.role"
            :avatar="authorbio.avatar"
            :bio="authorbio.bio"
          ></AuthorBio>
        </aside>
        <aside class="widget" v-if="description.content">
          <div class="description">
            <h3>{{ description.title }}</h3>
            <div v-html="description.content" class="text"></div>
          </div>
        </aside>
        <aside class="widget">
          <ul class="list-style-none">
            <MiniPost
              v-for="(item, index) in blog"
              class="mininamopost"
              type="nano"
              :key="index"
              :slug="item.post_name"
              :title="item.post_title"
              :content="item.short_desc"
              :thumbnail="item.nano"
              :friendly_date="item.friendly_date"
            ></MiniPost>
          </ul>
        </aside>
        <aside class="widget related_shop_logo shop-logo" v-if="related.content != ''">
          <h3>{{ related.title }}</h3>
          <WebshopLogo
            v-for="(item, index) in related.content"
            :key="index"
            :logo="item.logo"
            :url="item.link"
            :title="item.name"
          ></WebshopLogo>
        </aside>
      </div>
      <div id="popup" class="popup hide">
        <div class="popup-content rounded">
          <div class="close pop-close"></div>
          <img class="pop-logo" width="58">
          <h1 class="pop-title"></h1>
          <input class="pop-code" type="text" value="geen code nodig" readonly>
          <a class="btn uppercase">Ga naar de website</a>
        </div>
        <div class="overlay pop-close"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";
import AuthorBio from "~/components/AuthorBio.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";
import TopBar from "~/components/TopBar.vue";
import ShopBar from "~/components/ShopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/api/tagcity/v3/category/" + route.params.categorie;

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
      term: data.term,
      tags: data.tags,
      shopbar: data.shopbar,
      authorbio: data.authorbio,
      optin: data.optin,
      meta: data.meta,
      description: data.description,
      related: data.related,
      must_know: data.must_know,
      useful_link: data.useful_link,
      blog: data.blog
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
    ShopBar,
    TopBar,
    Tag,
    Optin,
    AuthorBio,
    WebshopLogo,
    MiniPost
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>
