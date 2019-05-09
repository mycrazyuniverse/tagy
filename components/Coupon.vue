<template>
  <article
    :id="'tag' + id"
    :class="tag_classes()"
    :data-tagno="id"
    :data-response="tag_response()"
    :data-href="url"
    :data-starts-at="timeline.startdate.timestamp"
    :data-ends-at="timeline.enddate.timestamp"
    :data-dialog="JSON.stringify(dialog)"
  >
    <slot name="head" class="coupon-head"></slot>
    <div :class="body_classes()">
      <slot name="discount">
        <Discount :value="discount.value" :label="discount.label" :class="discount_classes()"></Discount>
      </slot>
      <slot>
        <div :class="content_classes()">
          <div class="tagcontent-head">
            <p class="important-prop" v-if="primary_property">{{ primary_property.name }}</p>
          </div>
          <div class="tagcontent-body">
            <h3 class="tag-title">
              <a :href="url">{{ title }}</a>
            </h3>
          </div>
          <div class="tagcontent-foot">
            <slot name="properties">
              <ul class="tag-properties" v-if="properties">
                <li v-for="(item, index) in properties" :key="index" :class="propertyclass(item)">
                  <Property
                    :name="item.name"
                    :logo="item.logo"
                    :link="item.link"
                    v-if="item.shared == 'ends-in'"
                  >
                    {{ item.name }}
                    <Timer :ends="timeline.enddate.timestamp"></Timer>
                  </Property>
                  <Property :name="item.content" :logo="item.logo" :link="item.link" v-else></Property>
                </li>
              </ul>
            </slot>
          </div>
        </div>
      </slot>
      <div class="coupon-center white-space" v-if="layout.whitespace"></div>
      <slot name="button">
        <div :class="button_classes()">
          <btn :content="btn"></btn>
        </div>
      </slot>
    </div>
    <slot name="foot" class="coupon-foot"></slot>
    <slot name="details">
      <MoreDetails :id="id" :content="details"></MoreDetails>
    </slot>
  </article>
</template>

<script>
import Timer from "~/components/Timer.vue";
import Property from "~/components/Property.vue";
import Discount from "~/components/Discount.vue";
import Btn from "~/components/Btn.vue";
import MoreDetails from "~/components/MoreDetails.vue";

var basisname = "coupon";

export default {
  components: {
    Timer,
    Discount,
    Btn,
    MoreDetails,
    Property
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    status: {
      type: Object
    },
    details: {
      type: String,
      default: ""
    },
    timeline: {
      starts: {
        type: Object,
        default: function() {
          return {
            timestamp: ""
          };
        }
      },
      ends: {
        type: Object,
        default: function() {
          return {
            timestamp: ""
          };
        }
      }
    },
    template: {
      type: Object,
      default: {
        slug: "default"
      }
    },
    layout: {
      type: Object,
      default: {
        background: {
          scale: "fixed"
        },
        whitespace: true,
        position: {
          discount: {
            text: "center",
            vertical: "center"
          },
          content: {
            text: "left",
            vertical: "center"
          },
          btn: {
            text: "right",
            vertical: "center"
          }
        }
      }
    },
    dialog: {
      type: Object,
      default: ""
    },
    discount: {
      type: Object,
      default: function() {
        return [];
      }
    },
    properties: {
      type: Array,
      default: []
    },
    btn: {
      type: Object,
      default: {}
    },
    primary_property: {
      type: Object,
      default: {}
    }
  },
  methods: {
    tag_classes() {
      var classes = [];

      classes.push(basisname);
      classes.push(basisname + "-table");
      classes.push(basisname + "-default");
      classes.push(basisname + "-bg");

      classes.push("tag-dialog");

      classes.push("rounded");

      if (this.layout.background.scale == "fixed") {
      }

      if (this.template) {
        if (this.template.slug == "solden") {
          classes.push("coupon-solden");
        }
      }

      if (this.timeline.enddate) {
        var time = this.timeline.enddate.timestamp / 86400;
        classes.push("t-" + time);
      }

      classes.push("coupon-bg-" + this.layout.background.scale);

      if (this.status.slug) {
        classes.push(basisname + "-" + this.status.slug);
      }

      return classes.join(" ");
    },
    tag_response() {
      return "?open=" + this.id;
    },
    body_classes() {
      var classes = [];

      if (this.layout.background.scale == "fixed") {
        //classes.push("coupon-freedelivery");
      }

      classes.push(basisname + "-body");

      return classes.join(" ");
    },
    content_classes() {
      var classes = [];

      classes.push(basisname + "-content");
      classes.push(basisname + "-content-padding");

      classes.push(basisname + "-" + this.layout.position.content.vertical);
      classes.push("text-" + this.layout.position.content.text);

      return classes.join(" ");
    },
    button_classes() {
      var classes = [];

      classes.push(basisname + "-btncontainer");
      classes.push(basisname + "-" + this.layout.position.btn.vertical);
      classes.push("text-" + this.layout.position.btn.text);

      return classes.join(" ");
    },
    discount_classes() {
      var classes = [];

      classes.push(basisname + "-" + this.layout.position.discount.vertical);
      classes.push("text-" + this.layout.position.discount.text);

      return classes.join(" ");
    },
    propertyclass(property) {
      var classes = [];

      classes.push("tag-property");
      classes.push("tag-property-" + property.slug);
      classes.push("property-" + property.slug);

      if (property.slug == "verified-by") {
        classes.push("dib");
        classes.push("w100");
      }

      return classes.join(" ");
    }
  }
};
</script>

<style lang="scss">
.coupon-flex {
  display: flex;
  align-items: center;

  .center {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }
}

.coupon-bg-fixed {
  overflow: hidden;

  .coupon-body {
    width: 100%;
  }
}

.coupon-content-padding {
  padding-top: 30px;
  padding-bottom: 30px;
}

.coupon-bg {
}

.coupon-solden {
  background-image: url("../assets/images/clouds.svg");
  background-size: cover;

  .more-btn {
    color: #163a68;
  }

  .arrow-down {
    border-top-color: #163a68;
  }

  .discount-border {
    border-right: 1px dashed #163a68;
  }

  .white-space {
    background-image: url("../assets/images/solden_space.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: 80%;
  }

  .discount-box .label-default {
    background-color: #5376a2;
    color: #ffffff;
  }

  .tag-properties .property-icon {
    fill: #406ba1;
  }

  .tag-properties {
    color: #406ba1;
  }

  background-color: #00ace8 !important;
}

.coupon-sky {
}

.coupon-freedelivery {
  background-image: url("../assets/images/delivery.svg");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: #00ace8;
}

.coupon-content {
  width: 50%;
  padding-left: 15px;
}

.coupon-btncontainer {
  padding-right: 15px;
}

.coupon-table {
  .coupon-body {
    display: table;
    height: 100px;
    min-height: 100px;
  }

  .coupon-center {
    vertical-align: middle;
    display: table-cell;
  }

  .coupon-top {
    vertical-align: top;
    display: table-cell;
  }

  .coupon-bottom {
    vertical-align: bottom;
    display: table-cell;
  }
}

.coupon {
  background-color: #fff;
  position: relative;
  width: 100%;
  cursor: pointer;

  .white-space {
    width: 15%;
  }

  .tag-title {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    line-height: 1;
    letter-spacing: -0.5px;
    padding-top: 5px;
    padding-bottom: 7px;

    a {
      color: #173a68;
      text-decoration: underline;
    }
  }
}

.tag-properties {
  font-size: 14px;
  color: #acacac;
  width: 100%;
  display: inline-block;

  .property-icon {
    fill: #acacac;
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .property-text {
    padding-right: 10px;
    padding-left: 2px;
  }

  li {
    float: left;
  }
}

.important-prop {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  color: #f13b3b;
}

@media only screen and (max-width: 1180px) {
  .coupon-default {
    border-radius: 0px;
  }

  .property-text {
    font-size: 10px;
  }

  .tag-title {
    font-size: 15px !important;
  }

  .tag-properties .property-icon svg {
    width: 15px;
    height: 15px;
  }

  .tag-properties .property-icon {
    width: 15px;
    height: 15px;
  }

  .coupon-content-padding {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .coupon-content {
    width: 55%;
    padding-left: 10px;
  }
}
</style>
