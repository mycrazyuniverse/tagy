<template>
  <div class="shop-bar bigbar">
    <div class="container">
      <div class="shop-logo webshop-logo float-left">
        <slot name="logo">
          <img :src="logo" :alt="title" id="webshop-logo" width="42" height="42">
        </slot>
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
      default: ""
    },
    subtitle: {
      type: String,
      default:
        "Gebruik onderstaande promoties geldig in België en bespaar op je aankopen"
    },
    logo: {
      type: String,
      default:
        "https://dev-tagcity.pantheonsite.io/wp-content/uploads/2019/02/webshop_logo.png"
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
