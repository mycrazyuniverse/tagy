<template>
  <li class="card" data-target="card">
    <a class="carousel-image dib" :href="link" :style="bgimage(image)">
      <div class="text-overlay text-center">
        <p class="dib">
          <img :src="logo" class="webshop-logo" width="40">
        </p>
        <p class="dealtitle">{{ title }}</p>
      </div>
    </a>
  </li>
</template>

<script>
import WebshopLogo from "~/components/WebshopLogo.vue";

export default {
  components: {
    WebshopLogo
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  methods: {
    bgimage(bg) {
      return "background-image: url(" + bg + ");";
    }
  }
};
</script>

<style>
</style>
