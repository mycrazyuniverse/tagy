<template>
  <div id="gids">
    <div class="bar">
      <TopBar :search="search"></TopBar>
      <Nav :items="nav"></Nav>
      <div class="container">
        <div class="blog-title bigbar">
          <h1>{{ post.post_title }}</h1>
          <ul>
            <li>Geschreven door Benjamin</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-html="post.post_content" class="content"></div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/api/tagcity/v3/gids/" + route.params.gids;

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
      search: data.search,
      blog: data.blog,
      post: data.post
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
  },
  components: {
    Nav,
    TopBar
  },
  mounted() {}
};
</script>

<style lang="scss">
#gids {
  .content {
    line-height: 1.8;
  }

  .content img {
    text-align: center;
    width: 100%;
    height: auto;
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
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
