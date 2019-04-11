<template>
  <div class="breadcrumbs dib-w100">
    <ul>
      <li v-for="(item, index) in list" class="float-left">
        <div class="arrow dib arrow-right"></div>
        <a :href="item.url" class="breadcrumb dib">
          <img :src="item.logo" width="29" height="29">
          <span class="crum">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.breadcrumbs {
  border-radius: 30px;

  a {
    text-decoration: none !important;
  }

  .arrow {
    margin-right: 7px;
    margin-left: 10px;
  }
}

.breadcrumb {
  background-color: #fff;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;

  img {
    top: 7px;
    position: relative;
  }
}

.crum {
  padding: 10px;
  padding-left: 0px;
  display: inline-block;
}

.crust {
  padding: 10px;
}
</style>
