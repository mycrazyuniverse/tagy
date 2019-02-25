<template>
  <div class="container">
    <div id="content">
      <ShopBar :title="shop.title" :subtitle="shop.subtitle"></ShopBar>
      <section class="tags">
        <tag
          v-for="data in tags"
          :key="data.id"
          :title="data.title"
          :details="data.details"
          :url="data.url"
          :status="data.status"
          :views="data.views"
          :discountvalue="data.discount"
          :discountlabel="data.label"
          :code="data.code"
          :logo="data.logo"
        ></tag>
        <tag
          v-for="index in 12"
          :key="index"
          title="Exclusief: 7% korting op jouw bestelling bij BookSpot"
          status
          :id="index"
          url="?popup=4930"
          discountvalue="10%"
          discountlabel="Test"
          buttontext="pak deze korting"
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
      <section class="hall_of_fame">
        <HallOfFame
          id="4593"
          discountvalue="20%"
          discountlabel="Korting"
          title="Beste Farmaline kortingscode: 20% korting"
          details="Een van de meest populairste codes die wij voor u hadden was goed voor 20% korting. 
          Deze code was geldig op een specifieke producten (zoals Natural Energy). 
          Deze code kan vaker voorkomen en elke keer kan een ander product belicht worden."
        ></HallOfFame>
      </section>
    </div>
    <div class="sidebar">
      <UserBio
        description=" %%author%% verzamelt dag in dag uit de kortingscodes die %%webshop%% beschikbaar stelt.
        %%author%% checkt de huidige deals en zoekt het internet af op zoek naar nieuwe kortingscodes en aanbiedingen van %%webshop%%,
        hierdoor ontvang jij gegarandeerd korting op je bestelling via TagCity.be.
        De kortingen zijn bijgewerkt op %%last_updated%%."
        webshop="Collishop"
      ></UserBio>
      <aside class="widget">
        <h3 class="bold">Alles over Collishop promotiecode</h3>
        <h4>Welke kortingen zijn beschikbaar?</h4>
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
</template>

<script>
import Tag from "~/components/Tag.vue";
import Optin from "~/components/Optin.vue";
import UserBio from "~/components/UserBio.vue";
import Discountbox from "~/components/Discountbox.vue";
import HallOfFame from "~/components/HallOfFame.vue";
import ShopBar from "~/components/ShopBar.vue";

export default {
  async asyncData({ app, route }) {
    console.log(app.i18n.locale);

    var domain = process.env.apiUrl;

    if (app.i18n.locale != "nl") {
      domain = process.env.apiUrl + "/" + app.i18n.locale;
    }

    //var navigation = await axios.get(domain + "/wp-json/track/v1/nav");
  },
  data() {
    return {
      shop: {
        title: "Alle 12 Collishop kortingscodes geldig in augustus 2018",
        subtitle:
          "Gebruik onderstaande promoties geldig in België en bespaar op je aankopen",
        logo:
          "http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png"
      },
      tags: [
        {
          id: "100",
          title: "Exclusief: 7% korting op jouw bestelling bij BookSpot",
          label: "Korting",
          logo:
            "http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png",
          url: "?popup=100",
          discount: "-90%",
          status: "exclusive",
          views: "10",
          details: ""
        },
        {
          id: "110",
          title: "Exclusief: 10% korting op de volledige website",
          label: "Korting",
          logo:
            "http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png",
          url: "?popup=110",
          discount: "-20%",
          status: "",
          views: "",
          details: ""
        }
      ]
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
  props: {
    webshop: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: "Benjamin"
    }
  },
  components: {
    Tag,
    Optin,
    UserBio,
    Discountbox,
    HallOfFame,
    ShopBar
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
  width: 100%;
  float: right;
  font-size: 12px;
  color: #173a68;
  line-height: 1.5;

  .name {
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    padding-bottom: 15px;
    padding-top: 15px;
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
</style>