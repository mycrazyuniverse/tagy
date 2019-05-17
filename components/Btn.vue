<template>
  <button :class="classes()" :aria-label="content.content">
    <span class="buttontext">{{ content.content }}</span>
    <span v-if="arrow" class="arrow arrow-right float-right"></span>
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: {}
    },
    env: {
      type: String,
      default: "tag"
    },
    layout: {
      type: String,
      default: "default"
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    classes() {
      var classes = [];

      classes.push("btn");
      classes.push("btn-" + this.env);

      classes.push("btn-" + this.layout);

      if (this.arrow == true) {
      }

      return classes.join(" ");
    }
  }
};
</script>

<style lang="scss">
.btn {
  -webkit-appearance: none;
  border: none;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 40px;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;

  .arrow {
    position: relative;
    top: 5px;
    margin-left: 10px;
  }
}

.btn-primary {
  background-color: #1c73ba;
  color: #fff;

  .arrow-right {
    border-left: 5px solid #ffffff;
  }
}

.btn-default {
  background-color: #1c73ba;
  color: #fff;

  .arrow-right {
    border-left: 5px solid #ffffff;
  }
}

.btn-tag {
  text-transform: uppercase;
  font-weight: bold;
  width: 215px;
}

@media only screen and (max-width: 1180px) {
  .tag {
    border-radius: 0px;
  }

  .more-bottom {
    padding-right: 10px;
  }

  .btn-tag {
    width: 21px !important;
    padding-right: 7px !important;
    padding-left: 10px !important;
    padding-bottom: 10px !important;
    padding-top: 0px !important;

    .buttontext {
      display: none;
    }
  }
}
</style>
