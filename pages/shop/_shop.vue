<template>
  <div class="shop">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
      <ShopBar :title="shopbar.title" :subtitle="shopbar.subtitle" :logo="shopbar.thumb"></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <Breadcrumbs :list="breadcrumbs"></Breadcrumbs>
        <div class="updatedetected hide">
          <p>Zeer recente wijziging gevonden. Updating Codes</p>
        </div>
        <section class="tags">
          <tag
            v-for="item in tags"
            :key="item.id"
            :id="item.id"
            :type="item.type"
            :status="item.status"
            :status_data="item.status_data"
            :title="item.title"
            :properties="item.properties"
            :details="item.details"
            :views="item.views"
            :btn="item.btn"
            :discount="item.discount"
            :logo="item.logo"
            :code="item.code"
            :url="item.url"
            :dictionary="item.dictionary"
            :starts="item.timeline.startdate"
            :ends="item.timeline.enddate"
            :dialog="item.dialog"
          ></tag>
        </section>

        <section class="hall_of_fame"></section>

        <Optin
          class="tag tag-normal tag-newsletter"
          :logo="shopbar.thumb"
          :title="optin.title"
          :subtitle="optin.subtitle"
        ></Optin>
        <section class="tags">
          <tag
            v-for="item in expired"
            :key="item.id"
            :id="item.id"
            :type="item.type"
            :title="item.title"
            :properties="item.properties"
            :details="item.details"
            :views="item.views"
            :btn="item.btn"
            :discount="item.discount"
            :logo="item.logo"
            :code="item.code"
            :url="item.url"
            :dictionary="item.dictionary"
            :starts="item.timeline.startdate"
            :ends="item.timeline.enddate"
            :dialog="item.dialog"
          ></tag>
        </section>
        <section class="additionalcontent">
          <article>
            <div class="title lh">
              <h2>{{ how.title }}</h2>
              <p>{{ how.subtitle }}</p>
            </div>
            <Boxes :items="how.content">
              <box slot-scope="{ row }" :item="row" position="top" type="image" textalign="center"></box>
            </Boxes>
          </article>
          <article>
            <div class="title lh">
              <h2>{{ tips.title }}</h2>
              <p>{{ tips.subtitle }}</p>
            </div>
            <Boxes :items="tips.content">
              <box slot-scope="{ row }" :item="row" position="top" type="image" textalign="center"></box>
            </Boxes>
          </article>
          <article>
            <div class="title lh">
              <h2>{{ list.title }}</h2>
              <p>{{ list.subtitle }}</p>
            </div>
            <Boxes :items="list.content">
              <box slot-scope="{ row }" :item="row" layout="special" type="numbered"></box>
            </Boxes>
          </article>
          <article class="post_content extra-maincontent lh" v-html="must_know.content"></article>
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
              :slug="item.slug"
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
      <Dialog></Dialog>
    </div>
  </div>
</template>

<script>
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";
import AuthorBio from "~/components/AuthorBio.vue";
import Discountbox from "~/components/Discountbox.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";
import TopBar from "~/components/TopBar.vue";
import ShopBar from "~/components/ShopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";
import SidebarItem from "~/components/SidebarItem.vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import Dialog from "~/components/Dialog.vue";
import Boxes from "~/components/Boxes.vue";
import Box from "~/components/Box.vue";

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
      expired: data.expired,
      shopbar: data.shopbar,
      authorbio: data.authorbio,
      optin: data.optin,
      meta: data.meta,
      description: data.description,
      related: data.related,
      must_know: data.must_know,
      useful_link: data.useful_link,
      blog: data.blog,
      breadcrumbs: data.breadcrumbs,
      tips: data.tips,
      list: data.list,
      how: data.how
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
    WebshopLogo,
    MiniPost,
    SidebarItem,
    Breadcrumbs,
    Dialog,
    Boxes,
    Box
  },
  mounted() {}
};
</script>

<style lang="scss">
.visit-shop {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
}
</style>