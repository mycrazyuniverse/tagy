<template>
  <div class="index">
    <div class="bar">
      <TopBar></TopBar>
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
      "http://dev-tagcity.pantheonsite.io/wp-json/tagcity/v1/nav"
    );

    return { nav: data };
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
    console.log(this.nav);
  }
};
</script>

<style lang="scss">
.bar {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#05abe0+0,53cbf1+60,87e0fd+100 */
  background-image: url("../assets/images/cloud.svg");

  background-color: #05abe0; /* Old browsers */
  background-color: -moz-linear-gradient(
    top,
    #05abe0 0%,
    #53cbf1 60%,
    #87e0fd 100%
  ); /* FF3.6-15 */
  background-color: -webkit-linear-gradient(
    top,
    #05abe0 0%,
    #53cbf1 60%,
    #87e0fd 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background-color: linear-gradient(
    to bottom,
    #05abe0 0%,
    #53cbf1 60%,
    #87e0fd 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#87e0fd',GradientType=0 ); /* IE6-9 */
  margin-bottom: 20px;
}
</style>
