<template>
  <div class="breadcrumbs dib-w100">
    <ul>
      <li v-for="(item, index) in list" class="float-left">
        <div v-if="index != Object.keys(list).length - 1">
          <div class="arrow dib arrow-right"></div>
          <a :href="item.url" class="breadcrumb dib">
            <div v-html="item.logo" class="breadcrumb-icon" v-if="item.logo != false"></div>
            <span class="crum">{{ item.title }}</span>
          </a>
        </div>
        <div v-else class="last-crum">
          <div class="arrow dib arrow-right"></div>
          <a :href="item.url" class="breadcrumb dib">
            <div v-html="item.logo" class="breadcrumb-icon" v-if="item.logo"></div>
            <span class="crum">{{ item.title }}</span>
          </a>
        </div>
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
  margin-bottom: 10px;

  .arrow {
    position: relative;
    margin-right: 2px;
    margin-left: 2px;
    border-left: 5px solid #c0c7cf;
  }
}

.last-crum .crum {
  text-decoration: none !important;
}

.breadcrumb-icon {
  width: 25px;
  padding-top: 5px;
  height: 25px;
  float: left;
  fill: #2aaae2;
  padding-right: 10px;

  svg {
    fill: #2aaae2;
    height: 25px;
    width: 25px;

    path {
      fill: #2aaae2;
    }
  }

  img {
    width: 30px;
    height: 30px;
  }
}

.crum {
  padding: 10px;
  padding-left: 0px;
  display: inline-block;
  text-decoration: underline;
}

.crust {
  padding: 10px;
}

@media only screen and (max-width: 1180px) {
  .crum {
    display: none;
  }

  .last-crum .crum {
    display: inline-block !important;
  }

  .breadcrumb {
    background-color: transparent !important;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 12px;
  }
}
</style>
