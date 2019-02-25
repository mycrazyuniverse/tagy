<template>
  <div class="shop-bar">
    <div class="container">
      <div class="shop-logo">
        <img :src="logo" id="webshop-logo" class="webshop-logo">
      </div>
      <div class="inner">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
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

<style>
</style>
