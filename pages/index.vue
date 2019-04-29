<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>

    <div class="container">
      <div class="intro padding text-center text ptb2x">
        <h1>De beste kortingscodes en kortingen van België</h1>
        <p>
          Gebruik één van onze kortingscodes en bespaar op je online aankopen.
          Omdat wij Belgen graag wat centen uitsparen, helpen we je hier een handje. Wij verzamelen namelijk alle kortingscodes en promoties
          van je favoriete Belgische en internationale webshops.
          Winkel je graag online en mét korting bij winkels, zoals Zalando, bol.com en ColliShop? Dan gaat het Metro kortingsplatform je zeker bevallen.
        </p>
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
      <div id="best" class="best text-center padding dib w100 lh ptb2x">
        <div class="center-title">
          <h2>Beste kortingen</h2>
          <p>We lichten hier een aantal van onze strafste deals uit. Wat is je favoriete korting?</p>
        </div>
      </div>
      <div class="blogposts ptb2x dib">
        <div class="center-title">
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
      <div class="lh ptb2x">
        <div class="center-title"></div>
      </div>
      <div class="ptb2x dib-w100">
        <Optin></Optin>
      </div>
    </div>
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
      common: data.common,
      blog: data.blog,
      ads: data.ads
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
  mounted() {},
  props: {},
  components: {
    Nav,
    TopBar,
    Carousel,
    Optin,
    MiniPost,
    AdCard
  },
  mounted() {}
};
</script>

<style lang="scss">
.blogposts li {
  width: 50%;
  float: left;
  height: 125px;
  margin-bottom: 15px;
}
</style>
