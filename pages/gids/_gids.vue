<template>
  <div id="gids">
    <div class="bar">
      <TopBar :search="search"></TopBar>
      <Nav :items="nav"></Nav>
      <div class="container">
        <div class="bigbar">
          <time class="date" :datetime="content.post_date">
            <p class="day">{{ postday(content.post_date) }}</p>
            <p>{{ content.post_month }}</p>
          </time>
          <div class="article-title">
            <h1>{{ content.post_title }}</h1>
            <p v-for="item in content.category" :key="item.id">#{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="blog-article" id="content">
        <div class="post_content">
          <p class="text-center featuredimg">
            <img :src="content.thumbnail">
          </p>
          <article v-html="content.post_content"></article>
        </div>
        <aside class="share"></aside>
      </section>
      <div class="sidebar sidebar-fusion">
        <SidebarItem
          id="authorbio"
          :display="true"
          :title="content.authorbio.title"
          titleclass="m-only-toggle m-padding"
        >
          <AuthorBio
            :name="content.authorbio.name"
            :role="content.authorbio.role"
            :avatar="content.authorbio.avatar"
            :credit_for="content.authorbio.credit_for_writing"
            class="m-padding"
          ></AuthorBio>
        </SidebarItem>

        <SidebarItem
          class="m-toggle m-toggle-on"
          title="Advertentie"
          :display="true"
          titleclass="m-padding m-only-toggle"
        ></SidebarItem>

        <SidebarItem id="posts" :display="blog.content" :title="blog.title" titleclass="m-padding">
          <ul class="list-style-none m-toggle">
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
          v-if="related.content.length != 0"
          id="related_shops"
          class="related_shop_logo"
          :display="related.content"
          :title="related.title"
        >
          <WebshopLogo
            v-for="(item, index) in related.content"
            :key="index"
            :logo="item.logo"
            :url="item.link"
            :title="item.name"
          ></WebshopLogo>
        </SidebarItem>
      </div>
    </div>
    <Footer :items="common.footer"></Footer>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";
import AuthorBio from "~/components/AuthorBio.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";
import SidebarItem from "~/components/SidebarItem.vue";
import Ad from "~/components/Ad.vue";
import Footer from "~/components/Footer.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/api/tagcity/v3/gids/" + route.params.gids;

    if (app.i18n.locale != "nl") {
      var url = process.env.apiUrl + "/" + app.i18n.locale + requestRoute;
    } else {
      var url = process.env.apiUrl + requestRoute;
    }

    let { data } = await axios
      .get(url, {
        params: {}
      })
      .then(response => {
        return response;
      })
      .catch(error => {});

    return {
      nav: data.nav,
      search: data.search,
      blog: data.blog,
      content: data.content,
      meta: data.meta,
      blog: data.blog,
      related: data.related,
      ad: data.ad,
      common: data.common
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
  methods: {
    postday: function(date) {
      var d = new Date(date);
      return d.getDate();
    },
    postmonth: function(date) {
      var d = new Date(date);
      return d.getMonth();
    }
  },
  components: {
    Nav,
    TopBar,
    MiniPost,
    AuthorBio,
    WebshopLogo,
    SidebarItem,
    Ad,
    Footer
  },
  mounted() {}
};
</script>

<style lang="scss">
#gids {
  .article-title {
    padding-right: 30px;
    line-height: 1;

    h1 {
      margin-bottom: 12px;
      font-size: 39px;
    }
  }

  .adverlink {
    text-align: center;
    img {
      max-width: 300px;
    }
  }

  .featuredimg {
    padding-right: 35px;
  }

  .bubbles {
    display: inline-block;
  }
}

@media only screen and (max-width: 1180px) {
  article {
    padding-left: 15px;
    padding-right: 15px;
  }

  .date .day {
    font-size: 58px;
    padding-bottom: 10px;
  }

  .bigbar {
    padding-left: 15px;
    padding-right: 15px;
  }

  .article-title {
    line-height: 1.2 !important;

    h1 {
      padding-bottom: 10px !important;
    }
  }
}
</style>
