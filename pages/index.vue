<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>

    <div class="container">
      <div class="intro padding text-center text ptb2x">
        <h1>{{intro.title}}</h1>
        <p>{{intro.content}}</p>
      </div>
      <div id="carousel" class="ptb2x">
        <Carousel>
          <AdCard
            v-for="(item, index) in ads.content"
            :key="index"
            :title="item.post_title"
            :logo="item.logo"
            :image="item.og_img"
            :link="item.link"
          ></AdCard>
        </Carousel>
      </div>
      <div id="best" class="best text-center dib w100 lh ptb2x">
        <div class="title">
          <h2>{{tags.title}}</h2>
          <p>{{tags.subtitle}}</p>
        </div>
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
      </div>
      <div class="ptb2x dib w100">
        <div class="title text-center">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.subtitle }}</p>
        </div>
        <ul class="list-style-none blogposts">
          <li v-for="(item, index) in blog.content" :key="index">
            <MiniPost
              :slug="item.slug"
              :title="item.post_title"
              :content="item.short_desc"
              :thumbnail="item.mini"
              :friendly_date="item.friendly_date"
              :post_date="item.post_date"
              bg="true"
            ></MiniPost>
          </li>
        </ul>
      </div>
      <div class="ptb2x dib-w100">
        <Optin
          :title="optin.title"
          :subtitle="optin.subtitle"
          :placeholder="optin.placeholder"
          :btn="optin.btn"
          class="rounded overflow-hidden"
        ></Optin>
      </div>
    </div>
    <Dialog></Dialog>
    <Footer :items="common.footer"></Footer>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";
import Carousel from "~/components/Carousel.vue";
import MiniPost from "~/components/MiniPost.vue";
import AdCard from "~/components/AdCard.vue";
import Dialog from "~/components/Dialog.vue";
import Footer from "~/components/Footer.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/" + process.env.apiSlug + "/tagcity/v3/home";

    if (app.i18n.locale != "nl") {
      var url = process.env.apiUrl + "/" + app.i18n.locale + requestRoute;
    } else {
      var url = process.env.apiUrl + requestRoute;
    }

    let { data } = await axios
      .get(url, {
        params: {}
      })
      .catch(function(error) {
        process.exit(1);
      });

    return {
      common: data.common,
      intro: data.intro,
      blog: data.blog,
      ads: data.ads,
      optin: data.optin,
      tags: data.tags,
      meta: data.meta
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
  mounted() {},
  props: {},
  components: {
    Nav,
    TopBar,
    Carousel,
    Optin,
    MiniPost,
    AdCard,
    Tag,
    Dialog,
    Footer
  },
  mounted() {}
};
</script>

<style lang="scss">
</style>
