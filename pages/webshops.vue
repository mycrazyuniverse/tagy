<template>
  <div>
    <div class="bar">
      <TopBar :search="common.search"></TopBar>
      <Nav :items="common.nav"></Nav>
    </div>
    <div class="container">
      <ul class="fasttraveltothaalphabet uppercase">
        <li v-for="(item, index) in az" :key="index">
          <a :href="makeHashUrl(index)">{{index}}</a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div v-for="(item, index) in az" :key="index" :id="index">
        <h3 class="firstletter uppercase text-center">{{index}}</h3>
        <ul class="letter">
          <li v-for="sub in item" :key="sub.id">
            <a :href="sub.link">
              <span class="shopname">{{sub.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import Nav from "~/components/Nav.vue";
import axios from "axios";

export default {
  async asyncData({ app, route }) {
    var requestRoute = "/" + process.env.apiSlug + "/tagcity/v3/azwebshops";

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
      az: data.az
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
  methods: {
    makeHashUrl(az) {
      return "#" + az;
    }
  },
  props: {},
  components: {
    Nav,
    TopBar
  },
  mounted() {}
};
</script>


<style lang="scss">
.fasttraveltothaalphabet {
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 20px;

  li {
    float: left;
    padding: 10px 6px;
    background-color: #ffffff;
    margin-right: 20px;
    border-radius: 20px;
    min-width: 25px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;

    a {
      text-decoration: none;
    }
  }
}
</style>
