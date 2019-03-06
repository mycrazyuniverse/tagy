<template>
  <div class="topbar">
    <div class="container">
      <div class>
        <img src="../assets/images/logo.svg" alt="TagCity" class="pull-left tagcitylogo loading">
        <a id="openmenu" class="float-right">☰</a>
        <div class="search">
          <form action="/zoek">
            <input
              name="q"
              type="text"
              maxlength="75"
              placeholder="Zoek op winkel"
              spellcheck="false"
              autocomplete="off"
              class="searchfield"
            >
          </form>
          <div class="searchresults hide">
            <ul>
              <li v-for="index in 10" :key="index">
                <a>webshop 1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topbar {
  color: #fff;
  position: relative;
  z-index: 9999;

  .tagcitylogo {
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 5px;
    width: 42px;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 75px - 20px;
  }

  .search {
    //width: calc(100% - 55px);
    width: calc(100% - 110px);
    float: right;
    margin-right: 20px;
    float: right;
  }

  .searchfield {
    border-radius: 30px;
    border: none;
    height: 50px;
    background-color: rgba($color: #fff, $alpha: 0.5);
  }

  #openmenu {
    font-size: 20px;
    padding-right: 20px;
    padding-top: 10px;
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

  a {
    display: inline-block;
    padding: 15px;
  }
}

@media only screen and (max-width: 1180px) {
  .shop-bar {
    padding-top: 0px !important;
    padding-bottom: 10px !important;
  }

  .hide-mobile {
    display: none;
  }
}
</style>
