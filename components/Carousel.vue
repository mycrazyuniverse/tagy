<template>
  <div class="carousel-wrapper">
    <div class="rightButton carousel-button" data-action="slideLeft">
      <span class="arrow-right dib"></span>
    </div>
    <div class="leftButton carousel-button" data-action="slideRight">
      <a class="arrow text-center">
        <span class="arrow-left dib"></span>
      </a>
    </div>
    <ul class="carousel" data-target="carousel">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { setInterval } from "timers";
import WebshopLogo from "~/components/WebshopLogo.vue";

//TODO make dynamic

export default {
  mounted() {},
  components: {
    WebshopLogo
  }
};
</script>

<style lang="scss">
.button-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
}

.leftButton {
  left: 20px;
  padding: 10px;
  text-align: center;
}

.rightButton {
  right: 20px;
  padding: 10px;
  text-align: center;
}

.carousel-button {
  top: 50%;
  margin-top: -16px;
  z-index: 99;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}

.text-overlay {
  position: absolute;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0,
    rgba(0, 0, 0, 0) 100%
  );
  height: 40%;
  width: 100%;
  bottom: 0px;
}

.dealtitle {
  color: #fff;
  padding: 10px;
  padding-bottom: 20px;
  position: relative;
  bottom: 5px;
}

.carousel-wrapper {
  height: 300px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-image {
  width: 95%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.carousel {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  transition: all 1s ease;
}

.card {
  min-width: 283px;
  height: 283px;
  margin-right: 15px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
</style>
