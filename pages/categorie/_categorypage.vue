<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
      <ShopBar :title="shopbar.title" :subtitle="shopbar.subtitle" :logo="shopbar.thumb"></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <div class="headcategories" v-if="hidetags">
          <div class="container">
            <div v-for="(item, index) in related.raw.content" :key="index" :id="index">
              <box
                position="top"
                :title="item.term.name"
                type="image"
                :logo="item.term.logo"
                textalign="center"
              >
                <ul class="collist">
                  <li v-for="sub in item.shops" :key="sub.id">
                    <a :href="sub.link">
                      <span class="shopname">{{sub.name}}</span>
                    </a>
                  </li>
                </ul>
                <a v-if="item.more" :href="item.term.link" class="padding dib w100 text-center">
                  <strong>{{ item.more }} »</strong>
                </a>
              </box>
            </div>
          </div>
        </div>
        <section class="subcategory" v-if="!hidetags">
          <div class="collist">
            <ul>
              <li v-for="sub in related.content" :key="sub.id">
                <a :href="sub.link" class="padding dib">{{sub.name}}</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="tags" v-if="!hidetags">
          <Tag
            v-for="item in tags.content"
            :key="item.id"
            :id="item.id"
            :details="item.post_content"
            :url="item.url"
            :author="item.author"
            :status="item.status_data"
            :title="item.title"
            :timeline="item.timeline"
            :dialog="item.dialog"
            :action="item.action"
            :discount="item.discount"
            :properties="item.properties"
            :primary_property="item.primary_property"
            :template="item.template"
            :btn="item.btn"
          ></Tag>
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
              class="mininamopost float-left"
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
      <Dialog></Dialog>
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
import Box from "~/components/Box.vue";
import Dialog from "~/components/Dialog.vue";

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
    SidebarItem,
    Box,
    Tag,
    Dialog
  },
  mounted() {}
};
</script>

<style>
.subcategory {
  padding-bottom: 30px;
}
</style>

