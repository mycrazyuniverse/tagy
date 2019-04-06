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
  mounted: function() {}
};
</script>

<style lang="scss">
</style>
