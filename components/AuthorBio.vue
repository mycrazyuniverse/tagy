<template>
  <div class="author authorbio">
    <div class="text-center">
      <img :src="avatar" width="100" height="100" class="author-avatar circle">
      <div class="credit_for" v-if="credit_for">{{ credit_for }}</div>
      <div class="name">{{ name }}</div>
      <div class="title">{{ role }}</div>
    </div>
    <div class="description" v-if="bio">
      <p>{{ bio }}</p>
      <div class="visit-shop" v-if="url">
        <a
          :href="'https://dev-tagcity.pantheonsite.io' + url"
          rel="nofollow"
          target="_blank"
        >{{ calltoaction }} ></a>
      </div>
    </div>
  </div>
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
    },
    credit_for: {
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

<style lang="scss">
.authorbio {
  .name {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.8;
  }

  .webshop-img img {
    padding: 20px;
  }
}
</style>
