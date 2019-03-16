<template>
  <div class="container">
    <div id="content">
      <section class="tags">
        <tag
          v-for="data in tags"
          :key="data.id"
          :id="data.id"
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
          :id="4593"
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
        <h3>Alles over Collishop promotiecode</h3>
        <h4>Welke kortingen zijn beschikbaar?</h4>
        <p>Vaak voorkomende ColliShop promotiecodes zijn:</p>
        <ul>
          <li>10%, 15% of 20% korting op geselecteerde artikelen of een specifiek assortiment</li>
          <li>25% korting op speelgoed, zoals LEGO DUPLO of buitenspeelgoed</li>
          <li>Korting op kinderkamers, tuinmeubelen en koffers</li>
          <li>promotiecodes voor korting op het slaapassortiment</li>
          <li>
            Enkele keren per jaar geeft ColliShop 5% of €7,50 korting
            op het hele assortiment en af en toe krijgt u met een code een geschenkje bij uw bestelling.
          </li>
        </ul>
      </aside>
      <aside class="widget related_shop_logo shop-logo">
        <h3>Webshops zoals Collishop</h3>
        <WebshopLogo
          v-for="index in 10"
          :key="index"
          logo="https://tagcity.be/app/uploads/2015/08/albert-heijn-logo.png"
          url="/shop/albert-heijn"
        ></WebshopLogo>
      </aside>
      <aside class="widget">
        <h3>Dit moet je weten over Collishop</h3>
        <ol>
          <li>Op de salepagina van Bonprix.be vind je altijd artikelen die scherp zijn afgeprijsd.</li>
          <li>Door middel van het aanmelden voor de nieuwsbrief mis je geen enkele aanbieding of kortingscode meer.</li>
          <li>Er zijn regelmatig acties op Bonprix.be waarbij je iets kunt winnen of korting ontvangt.</li>
          <li>Door gebruik te maken van het gratis maatadvies van Bonprix, voorkom je miskopen. Bestel je voor 22:00 uur, dan ontvang je de artikelen de volgende dag in huis</li>
          <li>Door fan te worden van Bonprix op Facebook, weet je als eerste alle acties, aanbiedingen en nieuwtjes.</li>
          <li>Je kunt met de handige & gratis app heel gemakkelijk woonaccessoires en kleding aanschaffen via je mobiel.</li>
        </ol>
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
import WebshopLogo from "~/components/WebshopLogo.vue";

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
          id: 100,
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
          id: 110,
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
    ShopBar,
    WebshopLogo
  },
  mounted() {}
};
</script>

