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
            <ul class="bubbles">
              <li class="bubble">Solden</li>
              <li class="bubble">Koopjes</li>
            </ul>
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
        <aside class="widget">
          <AuthorBio
            :name="content.authorbio.name"
            :role="content.authorbio.role"
            :avatar="content.authorbio.avatar"
            :credit_for="content.authorbio.credit_for_writing"
          ></AuthorBio>
        </aside>
        <aside class="widget">
          <a
            href="https://www.plopsa.be/kabouter/?tt=3059_1517659_211001_&amp;r="
            target="_blank"
            rel="nofollow"
            class="adverlink"
          >
            <img
              data-src="https://tagcity.be/app/uploads/2018/12/7becf9777748067e6a0c82ad8eaf37c21d9214.jpg"
              width="100%"
              class="loaded"
              src="https://tagcity.be/app/uploads/2018/12/7becf9777748067e6a0c82ad8eaf37c21d9214.jpg"
            >
          </a>
        </aside>
        <aside class="widget">
          <div>
            <ul class="list-style-none" v-if="related">
              <MiniPost
                v-for="(item, index) in related"
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
          </div>
        </aside>
        <aside class="widget related_shop_logo shop-logo" v-if="related_shops.content != ''">
          <h3>{{ related_shops.title }}</h3>
          <WebshopLogo
            v-for="(item, index) in related_shops.content"
            :key="index"
            :logo="item.logo"
            :url="item.link"
            :title="item.name"
          ></WebshopLogo>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";
import axios from "axios";
import AuthorBio from "~/components/AuthorBio.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";

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
      related: data.related,
      related_shops: data.related_shops
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
    WebshopLogo
  },
  mounted() {}
};
</script>

<style lang="scss">
#gids {
  .article-title {
    padding-right: 30px;
    line-height: 1.8;
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

  .post_content {
    line-height: 1.8;

    article {
      padding-right: 30px;
    }

    img {
      text-align: center;
      max-width: 98%;
      height: auto;
      background-color: #fff;
      border: 1px solid rgb(212, 212, 212);
      padding: 10px;
    }

    .blog-title {
      line-height: 32px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
    }

    p {
      padding-bottom: 15px;
    }
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
