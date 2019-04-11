<template>
  <li class="card m_w100p" data-target="card">
    <a class="carousel-image dib" :style="bgimage(image)" :href="link">
      <div class="text-overlay text-center">
        <div class="dib">
          <WebshopLogo :logo="logo"></WebshopLogo>
        </div>
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
