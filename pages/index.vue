<template>
  <div class="index">
    <div class="bar">
      <TopBar :search="search"></TopBar>
      <Nav :items="nav"></Nav>
      <ShopBar
        title="Alle 12 Collishop kortingscodes geldig in augustus 2018"
        subtitle="Gebruik onderstaande promoties geldig in België en bespaar op je aankopen"
      ></ShopBar>
    </div>
    <shop></shop>
  </div>
</template>

<script>
import TopBar from "~/components/TopBar.vue";
import ShopBar from "~/components/ShopBar.vue";
import Nav from "~/components/Nav.vue";
import shop from "~/layouts/shop.vue";
import axios from "axios";

export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      "http://dev-tagcity.pantheonsite.io/api/nav"
    );


    return { 
      nav: data.nav,
      search: data.search
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
  props: {},
  components: {
    shop,
    Nav,
    TopBar,
    ShopBar
  },
  mounted() {
  }
};
</script>

<style lang="scss">

</style>
