<template>
  <div :class="classes">
    <slot name="image">
    <div :class="iconclasses">
      <div :class="icontypeclasses" v-if="type == 'image'">
        <Logo :content="logo" class="icon"></Logo>
      </div>
      <div :class="icontypeclasses" v-else>
        <span class="badge" v-if="type == 'numbered'">{{ index }}</span>
      </div>
    </div>
    </slot>
    <div :class="boxcontentclasses">
      <h3>{{ title }}</h3>
      <slot>
        <p>{{ content }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    index: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: "left"
    },
    textalign: {
      type: String,
      default: "left"
    },
    type: {
      type: String,
      default: "image"
    },
    layout: {
      type: String,
      default: "default"
    },
    bg: {
      type: String,
      default: "white"
    }
  },
  computed: {
    classes() {
      var classes = [];

      classes.push("box");
      classes.push("bg-" + this.bg);
      classes.push("box-" + this.position + "-" + this.layout);
      classes.push(
        "box-" + this.position + "-" + this.type + "-" + this.layout
      );

      if (this.position != "top") {
        classes.push("aligner-center");
      }

      return classes.join(" ");

      return classes;
    },
    boxcontentclasses() {
      var classes = [];

      classes.push("box-content");
      classes.push("padding");
      classes.push("lh");

      classes.push("text-" + this.textalign);

      classes.push("w100");

      return classes.join(" ");

      return classes;
    },
    icontypeclasses() {
      var classes = [];

      classes.push("box-icon-content");

      if (this.position == "left") {
        classes.push("vcenter");
      }

      if (this.position == "right") {
        classes.push("vcenter");
      }

      return classes.join(" ");

      return classes;
    },
    iconclasses() {
      var classes = [];

      classes.push("box-icon");
      classes.push("box-icon-" + this.type);
      classes.push("bg-darkblue");

      if (this.position == "left") {
        classes.push("box-icon-landscape");
      }

      if (this.position == "right") {
        classes.push("box-icon-landscape");
      }

      if (this.position == "top") {
        classes.push("box-icon-portrait");
      }

      if (this.position == "top") {
        classes.push("box-icon-botton");
      }

      return classes.join(" ");

      return classes;
    }
  },
  components: {
    Logo
  }
};
</script>


<style lang="scss">
.box {
  position: relative;
  overflow: hidden;
  display: flex;
  flex: 1;

  .box-top-container {
    width: 100%;
  }

  .box-icon {
    margin-left: auto;
    margin-right: auto;
    display: block;

    svg {
      height: 70px;
      fill: #09abe0 !important;

      path {
        fill: #09abe0 !important;
      }
    }
  }

  h3 {
    line-height: 1.4 !important;
  }

  .box-content {
    line-height: 1.8;
  }

  .box-icon-effect {
    position: relative;
    top: 10px;
    margin-bottom: 5px;
  }
}

.box-icon-landscape {
  position: absolute;
  height: 100%;
  width: 60px;

  img {
    position: relative;
    width: 100%;
    left: 10px;
  }
}

.box-right-special {
  right: 0px;

  .box-content {
    margin-right: 80px;
  }

  .box-icon {
    right: 0px;

    .icon {
      left: -10px;
    }
  }
}

.box-left-image-special {
  .box-content {
    margin-left: 75px;
  }
}

.box-left-special {
  .box-icon-numbered {
    width: 5%;
    height: 100%;
  }

  .badge {
    position: relative;
    left: 10px;
  }

  .box-content {
    text-align: left;
  }
}

.box-left-numbered-special {
  .box-content {
    padding-left: 10%;
  }
}

.box-top-image-default {
  .box-icon-image {
    height: 70px;
    position: absolute;
    width: 100%;
    top: 0px;
    text-align: center;

    .icon {
      position: relative;
      height: 70px;
      top: 10px;
    }
  }

  .box-content {
    padding-top: 85px;
  }
}
</style>