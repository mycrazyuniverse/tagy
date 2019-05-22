<template>
  <div class="topbar">
    <div class="container">
      <div class>
        <a href="/">
          <img
            src="https://media.tagcity.be/2019/05/tagcity-logo.svg?auto=compress"
            alt="TagCity"
            class="pull-left tagcitylogo loading"
          >
        </a>
        <a id="openmenu" class="float-right">☰</a>
        <div class="search">
          <form>
            <input
              type="search"
              maxlength="75"
              :placeholder="search.placeholder"
              spellcheck="false"
              autocomplete="off"
              id="searchfield"
              class="searchfield"
            >
          </form>
          <div class="searchresults hide">
            <div class="searchresults-title"></div>
            <ul class v-if="search">
              <li
                v-for="(target, index) in search.webshops.results"
                :key="index"
                class="searchresult"
              >
                <a class="searchresult_link" :href="target.link">
                  <img :src="target.logo" height="40" class="float-left searchresult_thumb">
                  <span class="searchresult_text">
                    <strong>{{ target.name }}</strong>
                    <br>
                    {{ target.count }} acties
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: Object,
      default: {
        slug: "actief"
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.topbar {
  color: #fff;
  position: relative;
  z-index: 9999;

  .tagcitylogo {
    padding-right: 5px;
    padding-left: 11px;
    padding-top: 3px;
    padding-bottom: 3px;
    width: 42px;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
    //height: 75px - 20px;
  }

  .search {
    //width: calc(100% - 55px);
    width: calc(100% - 80px);
    float: right;
  }

  .searchfield {
    border-radius: 30px;
    border: none;
    height: 50px;
    background-color: #fff;
  }

  .searchfield::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #043a6b;
  }
  .searchfield::-moz-placeholder {
    /* Firefox 19+ */
    color: #043a6b;
  }
  .searchfield:-ms-input-placeholder {
    /* IE 10+ */
    color: #043a6b;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #043a6b;
  }

  .searchfield:focus {
    background-color: #fff;
  }

  #openmenu {
    font-size: 20px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 14px;
    color: #fff;
  }
}

.active-result {
  background-color: #a0d8f5;
}

.searchresult a:hover {
  background-color: #a0d8f5;
}

.searchresult {
  border-top: 1px solid #e3e6e8;

  .searchresult_link {
    padding: 15px;
  }
}

.searchresults {
  position: absolute;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  left: 0px;
  margin-top: 15px;
  color: #043a6b;
  border-radius: 15px;
  overflow: hidden;

  .logo {
    display: inline;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .searchresults-title {
    background-color: #e7edf0;
    padding: 10px 15px;
  }

  .searchresult_thumb {
    padding-right: 15px;
  }

  .searchresult_text {
    line-height: 20px;
  }

  .searchresult_link {
    display: inline-block;
    width: 100%;
    color: #173a68;
    text-decoration: none;
  }
}

@media only screen and (max-width: 1180px) {
  .shop-bar {
    padding-top: 15px !important;
    padding-bottom: 0px !important;
  }

  .searchresults {
    border-radius: 0px;
  }

  .topbar {
    background-color: #1c73ba;
  }

  .topbar .search {
    width: calc(100% - 125px);
  }

  .hide-mobile {
    display: none;
  }
}
</style>
