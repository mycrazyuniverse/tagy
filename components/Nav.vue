<template>
  <div id="nav-container" class="nav-container">
    <div id="navigation">
      <div class="container">
        <nav>
          <div class="close pop-close"></div>
          <ul class="menu-items">
            <li>
              <a class="menu-item">Homepagina</a>
            </li>
            <li>
              <a
                class="menu-item"
                data-toggle="collapse"
                data-target="#menu_dropdown_category_1"
                data-text="Collapse"
              >
                Categorieën
                <svg class="icon icon-arrow_drop_down float-right">
                  <use xlink:href="#icon-arrow_drop_down"></use>
                </svg>
              </a>
              <ul id="menu_dropdown_category_1" class="collapse dropdown_menu">
                <li>
                  <a class="menu-item">Mode</a>
                </li>
                <li>
                  <a class="menu-item">Overige</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                data-toggle="collapse"
                data-target="#menu_dropdown_webhops_1"
                data-text="Collapse"
                class="menu-item"
              >
                Webshops
                <svg class="icon icon-arrow_drop_down float-right">
                  <use xlink:href="#icon-arrow_drop_down"></use>
                </svg>
              </a>
              <ul id="menu_dropdown_webhops_1" class="collapse dropdown_menu">
                <li>
                  <a class="menu-item">123D.nl</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menuopen {
  -webkit-transform: translateX(75%);
  -moz-transform: translateX(75%);
  -ms-transform: translateX(75%);
  -o-transform: translateX(75%);
  transform: translateX(75%);
  position: fixed;
}

.mobile-menu-overlay {
  width: 100%;
  position: absolute;
  height: 100%;
  background-color: #3f51b594;
  z-index: 9999;
  top: 0px;
}

#nav-container {
  left: -75%;
}

.menu-items {
  padding-left: 15px;
  padding-right: 15px;
}

.app,
.nav-container {
  -webkit-transition: all 300ms 0ms;
  -moz-transition: all 300ms 0ms;
  -ms-transition: all 300ms 0ms;
  -o-transition: all 300ms 0ms;
  transition: all 300ms 0ms;
}

.dropdown_menu {
  a {
    width: 100%;
    color: #cfcfcf;
  }
}

.dropdown {
  .down_arrow {
    margin-left: -2px;
    top: 10px;
    right: 10px;
    margin-top: -2px;
    position: absolute;
    border-color: #fff transparent;
  }

  ul {
    padding-left: 0px;
    padding-top: 20px;
    padding-right: 0px;
  }

  li {
    padding-left: 0px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
}

nav {
  color: #fff;

  .close {
    z-index: 99;
    position: relative;
  }

  li {
    display: inline-block;
    width: 100%;
  }

  .menu-item {
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: relative;
    display: block;
  }
}

.open_collapse .icon {
  transform: rotate(180deg);
}

#nav-container {
  background-color: #034e89;
  display: inline-block;
  top: 0px !important;
  width: 75%;
  height: 100%;
  position: absolute;
  overflow: scroll;
}

@media only screen and (min-width: 1180px) {
  #openmenu {
    display: none !important;
  }

  #nav-container {
    left: 0% !important;
    background-color: #034e89;
    display: inline-block;
    width: 100% !important;
    position: relative;
    overflow: visible !important;

    nav li {
      width: auto;
      padding-right: 15px;
    }

    .close {
      display: none;
    }

    .dropdown_menu {
      //display: none;
      position: absolute;
      background-color: #fff;
      z-index: 999;
      width: 100%;
      left: 0px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>
