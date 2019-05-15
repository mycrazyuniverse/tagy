<template>
  <div class="shop-bar bigbar">
    <div class="container">
      <div class="shop-logo webshop-logo float-left">
        <img :src="logo" id="webshop-logo" width="42" height="42">
      </div>
      <div class="inner">
        <h1>{{ title }}</h1>
        <h2 class="hide-mobile">{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Alle 12 Collishop kortingscodes geldig in augustus 2018"
    },
    subtitle: {
      type: String,
      default:
        "Gebruik onderstaande promoties geldig in België en bespaar op je aankopen"
    },
    logo: {
      type: String,
      default:
        "http://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png"
    }
  }
};
</script>

<style lang="scss">
.shop-bar {
  line-height: 21px;
  padding-left: 10px;
  padding-right: 10px;

  .inner {
    padding-left: 15px;
    display: inline-block;
    padding-top: 5px;
    width: calc(100% - 80px);
  }

  h1 {
    font-size: 19px;
    padding-bottom: 10px;
    color: #173a68;
  }

  h2 {
    font-weight: 100;
    font-size: 14px;
    color: #105971;
  }
}
</style>
