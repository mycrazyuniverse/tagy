<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
      <ShopBar :title="shopbar.title" :subtitle="shopbar.subtitle" :logo="shopbar.thumb"></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <div class="collist">
          <ul class="headcat">
            <li v-for="sub in related.raw.content" :key="sub.id">
              <a :href="sub.term.link" v-if="sub.title" class="padding dib termtitle">
                <h2 class="shopname" v-if="sub.term.name">
                  <WebshopLogo v-if="sub.term.logo" :logo="sub.term.logo"></WebshopLogo>
                  <span>{{sub.term.name}}</span>
                </h2>
              </a>
              <ul>
                <li v-for="sub in sub.shops" :key="sub.id">
                  <a :href="sub.link" class="padding dib">{{sub.name}}</a>
                </li>
              </ul>
              <a v-if="sub.more" :href="sub.term.link" class="padding dib">
                <strong>{{ sub.more }} »</strong>
              </a>
            </li>
          </ul>
        </div>
        <section class="tags" v-if="!hidetags">
          <tag title="test">
            <template #discount>
              <Discountbox value="value" label="label"></Discountbox>
            </template>
          </tag>
        </section>
      </div>
      <div class="sidebar sidebar-fusion">
        <SidebarItem
          id="authorbio"
          :display="true"
          :title="authorbio.title"
          titleclass="m-only-toggle m-padding"
        >
          <AuthorBio
            :name="authorbio.name"
            :role="authorbio.role"
            :avatar="authorbio.avatar"
            :bio="authorbio.bio"
            class="m-padding"
          ></AuthorBio>
        </SidebarItem>
        <SidebarItem
          id="about"
          v-if="description.content"
          :display="description.content"
          :title="description.title"
          titleclass="padding"
        >
          <div v-html="description.content" class="text description"></div>
        </SidebarItem>

        <SidebarItem
          id="posts"
          :display="blog.content"
          v-if="blog.content"
          :title="blog.title"
          titleclass="m-only-toggle m-padding"
        >
          <ul class="list-style-none m-toggle padding">
            <MiniPost
              v-for="(item, index) in blog.content"
              class="mininamopost"
              type="nano"
              :key="index"
              :slug="item.slug"
              :title="item.post_title"
              :content="item.short_desc"
              :thumbnail="item.nano"
              :friendly_date="item.friendly_date"
            ></MiniPost>
          </ul>
        </SidebarItem>
      </div>
      <div id="popup" class="popup hide">
        <div class="popup-content rounded">
          <div class="close pop-close"></div>
          <img class="pop-logo" width="58">
          <h1 class="pop-title"></h1>
          <input class="pop-code" type="text" value="geen code nodig" readonly>
          <a class="btn uppercase">Website</a>
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
import SidebarItem from "~/components/SidebarItem.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/api/tagcity/v3/category/" + route.params.categorypage;

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
      hidetags: data.hidetags,
      shopbar: data.shopbar,
      authorbio: data.authorbio,
      optin: data.optin,
      meta: data.meta,
      description: data.description,
      related: data.related,
      must_know: data.must_know,
      useful_link: data.useful_link,
      blog: data.blog,
      children: data.children
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
    MiniPost,
    SidebarItem
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>
