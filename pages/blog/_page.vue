<template>
  <div class="blog">
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>
    <div class="container">
      <ul class="list-style-none blogposts">
        <li v-for="(item, index) in posts" :key="index">
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

      <div class="pagination">
        <p class="text-center">
          <a :href="paginate.prev" v-if="paginate.prev" class="prev">&laquo;</a>
          <a
            :href="index"
            v-for="index in paginate.total"
            :key="index"
            :class="activePage(index)"
          >{{index}}</a>
          <a href="#" :href="paginate.next" v-if="paginate.next" class="next">&raquo;</a>
        </p>
      </div>
    </div>
    <Footer :items="common.footer"></Footer>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import MiniPost from "~/components/MiniPost.vue";
import Footer from "~/components/Footer.vue";

import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var page = route.params.page;

    var requestRoute = "/" + process.env.apiSlug + "/tagcity/v3/blog/" + page;

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
      posts: data.posts,
      paginate: data.paginate,
      meta: data.meta
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
    activePage(index) {
      if (this.paginate.current == index) {
        return "active";
      }
    }
  },
  components: {
    Nav,
    TopBar,
    MiniPost,
    Footer
  }
};
</script>