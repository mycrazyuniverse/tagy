<template>
  <div class="carousel-wrapper">
    <div class="rightButton carousel-button" data-action="slideLeft">
      <a class="arrow text-center">
        <span class="arrow-right dib"></span>
      </a>
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
export default {
  mounted() {},
  components: {}
};
</script>
