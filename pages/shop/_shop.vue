<template>
  <div class="shop">
    <div class="bar">
      <TopBar :search="search"></TopBar>
      <Nav :items="nav"></Nav>
      <ShopBar
        :title="shopbar.title"
        subtitle="Gebruik onderstaande promoties geldig in België en bespaar op je aankopen"
        :logo="shopbar.thumb"
      ></ShopBar>
    </div>
    <div class="container">
      <div id="content">
        <section class="tags"></section>
        <section class="hall_of_fame"></section>
        <Optin
          :logo="shopbar.thumb"
          webshop="Collishop"
          :title="optin.title"
          :subtitle="optin.subtitle"
        ></Optin>
      </div>
      <div class="sidebar">
        <UserBio
          :name="authorbio.name"
          :role="authorbio.role"
          :avatar="authorbio.avatar"
          :bio="authorbio.bio"
          :url="authorbio.url"
          :calltoaction="authorbio.calltoaction"
        ></UserBio>
        <aside class="widget" v-if="description.content">
          <div class="description">
            <h3>{{ description.title }}</h3>
            <div v-html="description.content" class="text"></div>
          </div>
        </aside>
        <aside class="widget related_shop_logo shop-logo" v-if="related.content.length > 0">
          <h3>{{ related.title }}</h3>
          <WebshopLogo
            v-for="(item, index) in related.content"
            :key="index"
            :logo="item.logo"
            :url="item.link"
            :title="item.name"
          ></WebshopLogo>
        </aside>
        <aside class="widget" v-if="must_know.content">
          <div class="text">
            <h3>{{ must_know.title }}</h3>
            <div v-html="must_know.content"></div>
          </div>
        </aside>
        <aside class="widget" v-if="useful_link.content">
          <h3>{{useful_link.title}}</h3>
          <ul>
            <li v-for="item in useful_link.content">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </aside>
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
import UserBio from "~/components/UserBio.vue";
import Discountbox from "~/components/Discountbox.vue";
import HallOfFame from "~/components/HallOfFame.vue";
import WebshopLogo from "~/components/WebshopLogo.vue";
import TopBar from "~/components/TopBar.vue";
import ShopBar from "~/components/ShopBar.vue";
import Nav from "~/components/Nav.vue";
import axios from "axios";

export default {
  async asyncData({ app, route }) {
    console.log(route.params.shop);

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
      nav: data.nav,
      search: data.search,
      term: data.term,
      tags: data.tags,
      shopbar: data.shopbar,
      authorbio: data.authorbio,
      optin: data.optin,
      meta: data.meta,
      description: data.description,
      related: data.related,
      must_know: data.must_know,
      useful_link: data.useful_link
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
          content: "My custom description"
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
    UserBio,
    Discountbox,
    HallOfFame,
    WebshopLogo
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

.sidebar {
  position: relative;
  width: 100%;
  float: right;
  font-size: 12px;
  line-height: 1.5;

  .name {
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    padding-bottom: 15px;
    padding-top: 15px;
    padding-left: 15px;
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

.related_shop_logo {
  .webshop-logo {
    margin: 5px;
  }
}

@media only screen and (min-width: 1180px) {
  .sidebar {
    top: -100px;
  }
}

@media only screen and (max-width: 1180px) {
  .sidebar {
    .widget {
      padding-top: 0px;
      padding-bottom: 0px;
    }

    .description {
      padding-right: 10px;
      padding-left: 10px;

      .text {
        display: none;
      }
    }
  }
}
</style>