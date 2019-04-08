<template>
  <div class="shop">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
      <ShopBar :title="shopbar.title" :subtitle="shopbar.subtitle" :logo="shopbar.thumb"></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <section class="tags"></section>
        <section class="hall_of_fame"></section>
        <Optin :logo="shopbar.thumb" :title="optin.title" :subtitle="optin.subtitle"></Optin>
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
            :url="authorbio.url"
            :calltoaction="authorbio.calltoaction"
            class="m-padding"
          ></AuthorBio>
        </SidebarItem>

        <SidebarItem
          id="about"
          :display="description.content"
          :title="description.title"
          titleclass="padding"
        >
          <div v-html="description.content" class="text description"></div>
        </SidebarItem>

        <SidebarItem
          id="posts"
          :display="blog.content"
          :title="blog.title"
          titleclass="m-only-toggle m-padding"
        >
          <ul class="list-style-none m-toggle padding">
            <MiniPost
              v-for="(item, index) in blog.content"
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
        </SidebarItem>

        <SidebarItem
          id="related_shops"
          class="related_shop_logo"
          :display="related.content"
          :title="related.title"
        >
          <div class="padding">
            <WebshopLogo
              v-for="(item, index) in related.content"
              :key="index"
              :logo="item.logo"
              :url="item.link"
              :title="item.name"
            ></WebshopLogo>
          </div>
        </SidebarItem>

        <SidebarItem
          id="must_know"
          class="related_shop_logo"
          :display="must_know.content"
          :title="must_know.title"
        >
          <div v-html="must_know.content"></div>
        </SidebarItem>

        <SidebarItem
          id="useful_links"
          class="related_shop_logo"
          :display="useful_link.content"
          :title="useful_link.title"
        >
          <ul class="list-style-none">
            <li v-for="item in useful_link.content">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </SidebarItem>
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
import Discountbox from "~/components/Discountbox.vue";
import HallOfFame from "~/components/HallOfFame.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";
import TopBar from "~/components/TopBar.vue";
import ShopBar from "~/components/ShopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";
import SidebarItem from "~/components/SidebarItem.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
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
    ShopBar,
    TopBar,
    Tag,
    Optin,
    AuthorBio,
    Discountbox,
    HallOfFame,
    WebshopLogo,
    MiniPost,
    SidebarItem
  },
  mounted() {}
};
</script>

<style lang="scss">
#popup {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1002;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;

  .popup-content {
    max-height: 95vh;
    overflow-y: auto;
    z-index: 9999;
    position: relative;
    background: #e8edf1;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    transform: translateY(-50%);
    padding: 30px 0px;
  }

  .pop-logo {
    border-radius: 50px;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .pop-title {
    padding-bottom: 15px;
    font-size: 20px;
    font-weight: normal;
  }

  .pop-code {
    font-size: 29px;
    text-align: center;
    border-top: 2px dashed #e8edf0;
    border-bottom: 2px dashed #e8edf0;
    padding-top: 20px;
    padding-bottom: 20px;
    border-left: 0px;
    border-right: 0px;
    font-weight: bolder;
  }
}

.visit-shop {
  /* background-color: #fff; */
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  /* border-radius: 20px; */
}

.popup-hidden {
  height: 0px;
}
</style>