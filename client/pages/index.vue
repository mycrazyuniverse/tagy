<template>
  <div class="container">
    <div class="shop-bar">
      <div class="container">
        <div class="shop-logo">
          <img src="images/webshop_logo.png" id="webshop-logo" class="webshop-logo">
        </div>
        <div class>
          <h1>Alle 12 Collishop kortingscodes geldig in augustus 2018</h1>
          <h2>
            Gebruik onderstaande promoties geldig in België en bespaar op je
            aankopen
          </h2>
        </div>
      </div>
    </div>
    <div id="content">
      <section class="tags">
        <tag
          title="Exclusief: 7% korting op jouw bestelling bij BookSpot"
          id="4930"
          details="<p>
              Een geweldige manier om geld te besparen is door gebruik te maken van een
              Nike kortingscode, voucher of coupon.
            </p>"
        ></tag>
      </section>
      <Optin
        logo="http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png"
        webshop="Collishop"
      ></Optin>
    </div>
    <div id="popup" class="hide">skldmskmdl</div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >{{ currentLocal }}</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";

export default {
  async asyncData({ app, route }) {
    console.log(app.i18n.locale);

    var domain = process.env.apiUrl;

    if (app.i18n.locale != "nl") {
      domain = process.env.apiUrl + "/" + app.i18n.locale;
    }

    var navigation = await axios.get(domain + "/wp-json/track/v1/nav");

    return {};
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
    currentLocal() {
      return this.$i18n.locale;
    }
  },
  components: {
    Tag,
    Optin
  }
};
</script>

<style>
</style>
