<template>
  <li class="card" data-target="card">
    <a class="carousel-image dib" :href="link" :style="bgimage(image)">
      <span class="text-overlay text-center">
        <span class="dib">
          <WebshopLogo :logo="logo"></WebshopLogo>
        </span>
        <p class="dealtitle">{{ title }}</p>
      </span>
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
