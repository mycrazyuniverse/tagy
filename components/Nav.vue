<template>
  <div id="nav-container" class="nav-container">
    <div id="navigation">
      <div class="container">
        <nav>
          <div class="close pop-close"></div>
          <ul class="menu-items">
            <li v-for="(navitem, key) of items" :key="key">
              <a
                class="menu-item"
                data-toggle="collapse"
                :data-target="'#menu_dropdown_category_' + navitem.ID"
                :href="navitem.url"
                v-if="navitem.wpse_children == 0"
              >
                <i class="icon" v-html="navitem.icon"></i>
                <b
                  data-toggle="collapse"
                  :data-target="'#menu_dropdown_category_' + navitem.ID"
                >{{ navitem.title }}</b>
                <span
                  v-if="navitem.wpse_children != 0"
                  data-toggle="collapse"
                  :data-target="'#menu_dropdown_category_' + navitem.ID"
                  class="arrow arrow-down float-right"
                ></span>
              </a>
              <a
                class="menu-item"
                data-toggle="collapse"
                :data-target="'#menu_dropdown_category_' + navitem.ID"
                v-else
              >
                <i class="icon" v-html="navitem.icon"></i>
                <b
                  data-toggle="collapse"
                  :data-target="'#menu_dropdown_category_' + navitem.ID"
                >{{ navitem.title }}</b>
                <span
                  v-if="navitem.wpse_children != 0"
                  data-toggle="collapse"
                  :data-target="'#menu_dropdown_category_' + navitem.ID"
                  class="arrow arrow-down float-right"
                ></span>
              </a>
              <ul
                v-if="navitem.wpse_children != 0"
                :id="'menu_dropdown_category_' + navitem.ID"
                class="collapse dropdown_menu"
              >
                <li v-for="(item, key) of navitem.wpse_children" :class="dropdown(item.classes)">
                  <a class="dropmenu-item" :href="item.url">
                    <i class="icon" v-html="item.icon" v-if="item.icon"></i>
                    {{ item.title }}
                  </a>
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
export default {
  props: ["items", "search"],
  methods: {
    dropdown: function(classes) {
      var classesstring = classes.join(classes);

      return classesstring;
    }
  },
  mounted: function() {
    console.log("nav", this.items);
  }
};
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

.nav-icon {
  width: 30px;
  height: 20px;
  float: left;
  fill: yellow;
  padding-left: 10px;
}

.special-item {
  width: 100% !important;
  text-align: center;
  font-weight: bold;
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
  .show {
    padding-top: 15px;
    padding-bottom: 15px;
  }
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
    color: #043a6b;
  }
}

.dropdown {
  .arrow-down {
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

  .icon svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    padding-right: 10px;
    padding-left: 0px;
  }

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
    padding-bottom: 20px;
    padding-left: 10px;
    width: 100%;
    position: relative;
    display: block;
    border-bottom: 1px dashed #7b8aa1;
    color: #fff;
    text-decoration: none;

    b {
      height: 20px;
    }

    .icon {
      position: relative;
      left: 2px;
      top: 3px;
    }
  }

  .dropmenu-item {
    position: relative;
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

.open_collapse .icon {
  transform: rotate(180deg);
}

#nav-container {
  display: inline-block;
  top: 0px !important;
  bottom: 0px;
  width: 75%;
  //height: 100%;
  position: absolute;
}

@media only screen and (max-width: 1180px) {
  #nav-container {
    background-color: #01213e;
    height: 100vh;
    overflow: scroll;

    .menu-items {
      padding-left: 0px;
      padding-right: 0px;
    }

    .special-item {
      text-align: left !important;
    }

    .menu-item {
      .arrow-down {
        margin-top: 7px;
        margin-left: 7px;
        margin-right: 15px;
      }
    }

    .menu-item-text {
      padding-left: 10px;
    }

    .dropdown_menu a {
      color: #949db0;
      padding-left: 15px;
      padding-right: 15px;
    }

    #navigation {
      height: 100%;
    }
  }
}

@media only screen and (min-width: 1180px) {
  #openmenu {
    display: none !important;
  }

  #nav-container {
    left: 0% !important;
    background-color: rgba(3, 78, 137, 0.25);
    display: inline-block;
    width: 100% !important;
    position: relative;
    overflow: visible !important;

    nav li {
      width: auto;
      padding-right: 7px;
      padding-left: 7px;
    }

    .close {
      display: none;
    }

    .arrow-down {
      margin-top: 12px;
      margin-left: 9px;
      top: 10px;
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

      li {
        width: 220px;
      }
    }
  }

  .bar {
    background-image: url("../assets/images/cloud.svg");
    background-color: #05abe0; /* Old browsers */
    background-color: -moz-linear-gradient(
      top,
      #05abe0 0%,
      #53cbf1 60%,
      #87e0fd 100%
    ); /* FF3.6-15 */
    background-color: -webkit-linear-gradient(
      top,
      #05abe0 0%,
      #53cbf1 60%,
      #87e0fd 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background-color: linear-gradient(
      to bottom,
      #05abe0 0%,
      #53cbf1 60%,
      #87e0fd 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05abe0', endColorstr='#87e0fd',GradientType=0 ); /* IE6-9 */
    margin-bottom: 20px;
  }
}
</style>
