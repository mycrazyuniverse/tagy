<template>
  <aside class="widget user">
    <p class="verfied text-center">
      <strong>Alle {{ webshop }} kortingen zijn geverifieerd door</strong>
    </p>
    <div class="user text-center">
      <br>
      <img
        src="https://tagcity.be/app/themes/tagcity/assets/img/Benjamin.jpg"
        width="100"
        class="author-avatar circle"
      >
      <div class="name">{{ author }}</div>
      <div class="title">Hoofdredacteur</div>
    </div>
    <div class="description">
      <p>{{ bio }}</p>
    </div>
    <div class="visit-shop">
      <a href rel="nofollow" target="_blank" onclick>Ga naar www.mediamarkt.be ></a>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: "Benjamin"
    },
    webshop: {
      type: String,
      default: ""
    },
    last_updated: {
      type: String,
      default: ""
    }
  },
  computed: {
    bio() {
      var bio = this.description;

      bio = bio.replace(/%%author%%/g, this.author);
      bio = bio.replace(/%%webshop%%/g, this.webshop);
      bio = bio.replace(/%%last_updated%%/g, this.last_updated);

      return bio;
    }
  }
};
</script>

<style>
.webshop-img img {
  padding: 20px;
}
</style>
