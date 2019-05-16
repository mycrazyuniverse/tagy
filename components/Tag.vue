  <template>
  <article
    :id="'tag' + id"
    :class="tag_classes()"
    :data-tagno="id"
    :data-response="tag_response()"
    :data-href="url"
    :data-starts-at="starts()"
    :data-ends-at="ends()"
    :data-dialog="JSON.stringify(dialog)"
  >
    <slot name="tag" v-if="template == 'hall-of-fame'">
      <div :class="body_classes()">
        <slot name="discountbox">
          <div :class="discount_classes()">
            <Discount :value="discount.value" :label="discount.label" class="tag-center">
              <slot name="discount"></slot>
            </Discount>
          </div>
        </slot>
        <slot>
          <div :class="content_classes()">
            <div class="tagcontent-head">
              <p class="stars">
                <svg-icon name="star" class="star"/>
                <svg-icon name="star" class="star"/>
                <svg-icon name="star" class="star"/>
                <svg-icon name="star" class="star"/>
                <svg-icon name="star" class="star"/>
              </p>
            </div>
            <div class="tagcontent-body">
              <p class="important-prop tag-properties" v-if="primary_property.content">
                <Property
                  :name="primary_property.content"
                  :link="primary_property.link"
                  v-if="primary_property.shared == 'ends-in'"
                >
                  {{ primary_property.name }}
                  <Timer :ends="timeline.enddate.timestamp"></Timer>
                </Property>
                <Property :name="primary_property.content" :link="primary_property.link" v-else></Property>
              </p>
              <h3 class="tag-title">
                <a :href="url">{{ title }}</a>
              </h3>
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
                <div class="more" v-if="content != ''">
                  <a
                    data-toggle="collapse"
                    class="more-btn prevent"
                    :data-target="'#t-details-' + id"
                  >
                    details
                    <span class="arrow arrow-down float-right"></span>
                  </a>
                </div>
              </slot>
            </div>
            <div class="tagcontent-foot">
              <slot name="button">
                <btn :content="btn"></btn>
              </slot>
            </div>
          </div>
          <div class="tag-center white-space">
            <img
              src="../assets/images/secondmasterpiece.svg"
              class="second-masterpiece"
              alt="painting of the queen of TagCity"
            >
          </div>
        </slot>
      </div>
      <div class="details" v-if="details">
        <div class="collapse details-container w100" :id="'t-details-' + id">
          <slot name="details">
            <div class="padding" v-html="details"></div>
          </slot>
        </div>
      </div>
    </slot>
    <slot name="tag" v-else>
      <slot name="head" class="tag-head"></slot>
      <div :class="body_classes()">
        <slot name="discountbox">
          <Discount :value="discount.value" :label="discount.label" :class="discount_classes()">
            <slot name="discount"></slot>
          </Discount>
        </slot>
        <slot>
          <div :class="content_classes()">
            <div class="tagcontent-head">
              <p class="important-prop tag-properties" v-if="primary_property.content">
                <Property
                  :name="primary_property.content"
                  :link="primary_property.link"
                  v-if="primary_property.shared == 'ends-in'"
                >
                  {{ primary_property.name }}
                  <Timer :ends="timeline.enddate.timestamp"></Timer>
                </Property>
                <Property :name="primary_property.content" :link="primary_property.link" v-else></Property>
              </p>
            </div>
            <div class="tagcontent-body">
              <h3 class="tag-title">
                <a :href="cloakurl()" :title="title">{{ title }}</a>
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
        <div class="tag-center white-space" v-if="layout.whitespace"></div>
        <slot name="button">
          <div :class="button_classes()">
            <btn :content="btn"></btn>
          </div>
        </slot>
      </div>
      <slot name="foot" class="tag-foot"></slot>
      <slot name="details">
        <MoreDetails :id="id" :content="details"></MoreDetails>
      </slot>
    </slot>
  </article>
</template>

<script>
import Timer from "~/components/Timer.vue";
import Property from "~/components/Property.vue";
import Discount from "~/components/Discount.vue";
import Btn from "~/components/Btn.vue";
import MoreDetails from "~/components/MoreDetails.vue";

var basisname = "tag";

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
      type: Object,
      default: {
        slug: "actief"
      }
    },
    details: {
      type: String,
      default: ""
    },
    timeline: {
      startdate: {
        type: Object,
        default: {
          timestamp: 100
        }
      },
      enddate: {
        type: Object,
        default: {
          timestamp: 100
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
        padding: {
          bottom: "15px"
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
    action: {
      type: Object,
      default: {
        slug: "dialog"
      }
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

      if (this.action) {
        if (this.action.slug) {
          classes.push("tag-" + this.action.slug);
        } else {
          classes.push("tag-dialog");
        }
      } else {
        classes.push("tag-dialog");
      }

      classes.push("rounded");

      if (this.layout.background.scale == "fixed") {
      }

      if (this.template) {
        if (this.template == "solden") {
          classes.push(basisname + "-solden");
        }

        if (this.template == "hall-of-fame") {
          classes.push(basisname + "-hall-of-fame");
        }
      }

      if (this.layout.padding.bottom == "15px") {
        classes.push("mb-15");
      }

      if (this.layout.padding.top == "15px") {
        classes.push("mt-15");
      }

      if (this.layout.padding.left == "15px") {
        classes.push("ml-15");
      }

      if (this.layout.padding.right == "15px") {
        classes.push("mr-15");
      }

      /*if (this.timeline.enddate.timestamp != "") {
        var time = this.timeline.enddate.timestamp / 86400;
        classes.push("t-" + time);
      }*/

      classes.push("tag-bg-" + this.layout.background.scale);

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
        //classes.push("tag-freedelivery");
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

      if (this.template) {
        classes.push("discount-box-" + this.template);

        if (this.template == "hall-of-fame") {
          classes.push("masterpiece");
        }
      }

      return classes.join(" ");
    },
    propertyclass(property) {
      var classes = [];

      classes.push("tag-property");
      classes.push("tag-property-" + property.slug);
      classes.push("property-" + property.slug);

      return classes.join(" ");
    },
    ends() {
      var data = 100;

      if (this.timeline) {
        if (this.timeline.enddate) {
          data = this.timeline.enddate.timestamp;
        }
      }
      return data;
    },
    starts() {
      var data = 100;

      if (this.timeline) {
        if (this.timeline.startdate) {
          data = this.timeline.startdate.timestamp;
        }
      }
      return data;
    },
    cloakurl() {
      return "https://dev-tagcity.pantheonsite.io" + this.url;
    }
  }
};
</script>

<style lang="scss">
.tag-flex {
  display: flex;
  align-items: center;

  .center {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }
}

.tag-bg-fixed {
  overflow: hidden;

  .tag-body {
    width: 100%;
  }
}

.tag-content-padding {
  padding-top: 30px;
  padding-bottom: 30px;
}

.tag-bg {
}

.tag-solden {
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

.tag-freedelivery {
  background-image: url("../assets/images/delivery.svg");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: #00ace8;
}

.tag-content {
  width: 50%;
  padding-left: 15px;
}

.tag-btncontainer {
  padding-right: 15px;
}

.tag-table {
  .tag-body {
    display: table;
    height: 100px;
    min-height: 100px;
  }

  .tag-center {
    vertical-align: middle;
    display: table-cell;
  }

  .tag-top {
    vertical-align: top;
    display: table-cell;
  }

  .tag-bottom {
    vertical-align: bottom;
    display: table-cell;
  }
}

.tag {
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
  color: #6f6f6f;
  width: 100%;
  display: inline-block;

  .property-icon {
    fill: #6f6f6f;
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

.stars {
  display: inline-block;

  .star {
    fill: #fbae17;
    float: left;
    width: 25px;
    height: 25px;
    padding-left: 2px;
    padding-right: 2px;
  }
}

.tag-search {
  .tag-content {
    width: 100%;
  }
}

.tag-halloffame {
  background-image: url("../assets/images/hall_of_fame_paper.jpg");
  background-color: #86231d;

  .secondmasterpiece {
    position: absolute;
    right: -120px;
    top: -110px;
  }

  .important-prop {
    color: #fbae16;
  }

  .details .details-container {
    background-color: #6e0b0b;
    color: #fbae17;
    text-align: center;
  }

  .tag-properties li {
    float: none;
    display: inline-block;
  }

  .arrow-down {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #ffffff;
    margin-top: 4px;
    margin-left: 4px;
  }

  .tag-properties {
    margin-bottom: 10px;
  }

  .more {
    font-size: 12px;
    display: inline-block;
  }

  .tag-body {
    background-repeat: repeat-x;
    background-position-y: 120%;
    background-position-x: 60%;
    display: table;
    height: 100px;
    min-height: 100px;
    background-image: url("../assets/images/entrance.svg");
    background-size: 50%;
  }

  .tagcontent-body {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    background-color: #fbae17;
  }

  .tag-content {
    width: 70%;
    text-align: center;
    padding-left: 0px !important;

    a {
      color: #fff;
    }
  }

  .discountbox {
    margin-left: 30px;
    margin-right: 30px;
  }

  .masterpiece {
    padding-left: 3%;

    .discount-box {
      width: 20%;
    }
  }

  .discount-box {
    background-image: url("../assets/images/masterpiece.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    height: 160px;
    margin-left: 20px;
    padding-left: 30px;
    padding-right: 30px;

    .label {
      width: 90px;
      background-color: #fbae17;
    }
  }
}

@media only screen and (max-width: 1180px) {
  .text-lg {
    font-size: 22px;
  }

  .text-md {
    font-size: 20px;
  }

  .text-sm {
    font-size: 16px;
  }

  .text-xs {
    font-size: 12px !important;
  }

  .important-prop {
    font-size: 12px;
  }

  .text-mini {
    font-size: 10px;
  }

  .text-nano {
    font-size: 6px;
  }

  .discount-box .label {
    font-size: 12px;
  }

  .discount-box {
    padding-right: 5px;
    padding-left: 5px;
    width: 90px;

    .label {
      width: 80px;
    }
  }

  .tag-default {
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

  .tag-content-padding {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .tag-content {
    width: 55%;
    padding-left: 10px;
  }

  .breadcrumb-icon {
    width: 20px;
    padding-top: 5px;
    height: 20px;
  }

  .tag-halloffame {
    .tag-content {
      padding-left: 5px;
      padding-right: 5px;
    }

    .white-space {
      display: none;
    }

    .discount-box {
      padding-left: 10px !important;
      padding-right: 10px !important;

      .label {
        width: 80px !important;
        margin-left: 7px;
        margin-right: 7px;
      }
    }

    .btn {
      display: none;
    }
  }
}
</style>
