<template>
  <aside class="widget user">
    <div class="text-center">
      <br>
      <img :src="avatar" width="100" height="100" class="author-avatar circle">
      <div class="name">{{ name }}</div>
      <div class="title">{{ role }}</div>
    </div>
    <div class="description">
      <p>{{ bio }}</p>
      <div class="visit-shop">
        <a
          :href="'https://dev-tagcity.pantheonsite.io' + url"
          rel="nofollow"
          target="_blank"
        >{{ calltoaction }} ></a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    bio: {
      type: String,
      default: ""
    },
    calltoaction: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "Benjamin"
    },
    role: {
      type: String,
      default: "redacteur"
    },
    avatar: {
      type: String,
      default: ""
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
    dbio() {
      var bio = this.description;

      bio = bio.replace(/%%author%%/g, this.author);
      bio = bio.replace(/%%webshop%%/g, this.webshop);
      bio = bio.replace(/%%last_updated%%/g, this.last_updated);

      return bio;
    }
  },
  mounted() {}
};
</script>

<style>
.webshop-img img {
  padding: 20px;
}
</style>
