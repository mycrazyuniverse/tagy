<template>
  <div class="minipost" v-bind:class="{ 'minipost-bg': bg}">
    <article>
      <a :href="slug" v-if="type == 'mini'">
        <img :src="thumbnail" class="float-right thumbnail" v-if="thumbnail">
      </a>
      <a :href="slug" class="article-content">
        <img :src="thumbnail" class="float-right thumbnail" v-if="thumbnail && type == 'nano'">
        <time :datetime="post_date">{{ friendly_date }}</time>
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "mini"
    },
    bg: {
      type: Boolean
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    slug: {
      type: String
    },
    thumbnail: {
      type: String
    },
    friendly_date: {
      type: String
    },
    post_date: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.minipost {
  height: 125px;
  overflow: hidden;

  .article-content {
    display: table-cell;
    vertical-align: middle;
    height: 125px;
    text-decoration: none;
    color: #173a68 !important;
    padding-right: 30px;
    padding-left: 10px;
  }

  h4 {
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    text-decoration: underline;
  }
}

.minipost-bg {
  background-color: #fff;
  border-radius: 10px;
  margin-right: 15px;

  article {
    padding-left: 5px;
  }
}

.mininamopost {
  margin-top: 10px;
  height: auto;

  .article-content {
    padding-top: 5px;
    padding-bottom: 10px;
    padding-left: 0px;
  }

  img {
    height: 70px;
    padding-left: 10px;
  }

  .article-content {
    height: auto;
    padding-right: 0px;
    width: 100%;
    display: inline-block;
  }
}
</style>
