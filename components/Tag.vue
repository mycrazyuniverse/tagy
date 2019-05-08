<template>
  <article
    :class="tagclass()"
    :id="'tag' + id"
    :data-tagno="id"
    :data-href="url"
    :data-starts-at="starts.timestamp"
    :data-ends-at="ends.timestamp"
    :data-dialog="JSON.stringify(dialog)"
  >
    <div class="tag-item">
      <div class="discount">
        <slot name="discount">
          <Discountbox class="vcenter" :value="discount.value" :label="discount.label"></Discountbox>
        </slot>
      </div>
      <div class="tag-info float-right">
        <div class="tag-content">
          <h3 class="tag-title">
            <a :href="url">{{ title }}</a>
          </h3>
          <slot name="properties">
            <ul class="tag-properties">
              <li v-for="(item, index) in properties" :key="index" :class="propertyclass(item)">
                <span v-if="item.slug == 'timed'">Limited offer</span>
                <span v-else-if="item.slug == 'status'">{{ status_data.name }}</span>
                <span v-else-if="item.slug == 'toegevoed-op'">{{ item.name }} {{ starts.readable }}</span>
                <span v-else-if="item.slug == 'verloopt'">{{ item.name }} {{ ends.readable }}</span>
                <span v-else-if="item.slug == 'eindigt-in'">
                  {{ item.name }}
                  <Timer :ends="ends.timestamp"></Timer>
                </span>
                <span v-else-if="item.slug == 'toon-type'">{{ type.name }}</span>
                <span v-else>{{ item.name }}</span>
              </li>
            </ul>
          </slot>
        </div>
      </div>
      <div class="tag-button float-right" v-if="btn.content">
        <button>
          <span class="buttontext">{{ btn.content }}</span>
          <span class="arrow arrow-right float-right"></span>
        </button>
      </div>
    </div>
    <div class="details" v-if="details">
      <a data-toggle="collapse" class="more more-bottom prevent" :data-target="'#details' + id">
        {{ dictionary.details }}
        <span class="arrow arrow-down float-right"></span>
      </a>
    </div>
    <div class="tag-desc" v-if="details">
      <div class="collapse details-container w100" :id="'details' + id">
        <slot name="details">
          <div class="padding">
            <div v-html="details"></div>
          </div>
        </slot>
      </div>
    </div>
  </article>
</template>

<script>
import Discountbox from "~/components/Discountbox.vue";
import LogoProp from "~/components/LogoProp.vue";
import Timer from "~/components/Timer.vue";
import HallOfFame from "~/components/HallOfFame.vue";

export default {
  components: {
    Discountbox,
    LogoProp,
    Timer,
    HallOfFame
  },
  methods: {
    tagclass() {
      var classes = [];

      classes.push("tag");
      classes.push("tag-normal");

      if (this.type) {
        classes.push("tag-dialog");
      }

      if (this.id) {
        classes.push("tag-" + this.id);
      }

      if (this.status) {
        classes.push("tag-" + this.status);
      }

      if (this.ends) {
        var time = this.ends.timestamp / 86400;
        classes.push("t-" + time);
      }

      if (this.properties) {
        this.properties.forEach(element => {
          classes.push("tag-" + element.slug);
        });
      }

      return classes.join(" ");
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: Object,
      default: ""
    },
    dialog: {
      type: Object,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    status_data: {
      type: Object,
      default: function() {
        return [];
      }
    },
    properties: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    code: {
      type: String,
      default: "No Code Required"
    },
    details: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    },
    views: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    btn: {
      type: Object,
      default: {}
    },
    starts: {
      type: Object,
      default: function() {
        return [];
      }
    },
    ends: {
      type: Object,
      default: function() {
        return [];
      }
    },
    discount: {
      type: Object,
      default: function() {
        return [];
      }
    },
    dictionary: {
      type: Object,
      default: {}
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.tag {
  position: relative;
  cursor: pointer;
  display: block;
  overflow: hidden;

  .tag-button {
    transform: translate(0%, -50%);
    position: absolute;
    top: 50%;
    right: 20px;

    .arrow-right {
      position: relative;
      top: 5px;
      border-left: 5px solid #ffffff;
      margin-left: 10px;
    }

    button {
      -webkit-appearance: none;
      background-color: #173a68;
      color: #fff;
      font-size: 15px;
      padding-right: 20px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border: none;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 20px;
      width: 215px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    padding-right: 70px;
    text-decoration: underline;
    letter-spacing: -0.5px;

    a {
      color: #173a68;
      text-decoration: underline;
    }
  }

  .tag-item {
    position: relative;
    display: inline-block;
    width: 100%;
    top: 3px;
  }

  .tag-info {
    display: inline-block;
    width: calc(100% - 120px);
    padding-left: 10px;
    border-left: 1px dashed #85b5c5;
    padding-bottom: 25px;
    padding-top: 35px;

    p {
      padding-top: 10px;
    }
  }

  .tag-properties {
    font-size: 14px;
    color: #acacac;
    width: 100%;
    display: inline-block;
    max-width: 440px;
    line-height: 1.4;

    li {
      float: left;
    }

    li + li::before {
      content: "-";
      padding-right: 5px;
      padding-left: 7px;
    }
  }

  .tag-desc {
    font-size: 12px;
    margin-top: 5px;

    .details-container {
      background-color: #cfd6e0;
      line-height: 1.4;
    }

    .detail-content {
      padding: 10px;
    }

    .show {
      position: relative;
    }
  }
}

.expired {
  .discount-box .label {
    background-color: gray;
  }
}

.tag-normal {
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 15px;
}

.tag-search .tag-info :after {
  content: "▶";
  display: block;
  position: absolute;
  color: #fff;
  background-color: #00ace8;
  width: 19px;
  right: 14px;
  text-align: center;
  font-size: 9px;
  padding-top: 5px;
  padding-bottom: 5px;
  top: 48px;
  top: calc(50% - 11px);
  border-radius: 50%;
}

.tag-search {
  background-color: #f9fafb;
  border-top: 1px solid #ebebf5;
}

.tag-free-delivery {
  background-image: url("../assets/images/delivery.svg");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: #00ace8;

  .tag-properties {
    color: #4d698f;
  }

  .more-bottom {
    color: #fdfdfd;
  }
}

.tag-exclusive {
  //background-image: url("../assets/images/exlcusieve_coupon.png");
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-color: #1c1465;
  h3 a {
    color: #fff !important;
  }

  .discount-box .discount {
    color: #fff !important;
  }
}

#voucher {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 500;
  overflow: hidden;
}

.more-bottom {
  color: gray;
  font-size: 12px;
  float: right;
  padding-right: 20px;
  height: 0px;
  top: -20px;
  position: relative;

  .arrow-down {
    border-width: 3px;
    border-top-color: gray;
  }
}

@media only screen and (max-width: 1180px) {
  .tag {
    border-radius: 0px;
  }

  .buttontext {
    display: none;
  }

  .more-bottom {
    padding-right: 10px;
  }

  .tag-button {
    button {
      width: 21px !important;
      padding-right: 7px !important;
      padding-left: 10px !important;
      padding-bottom: 10px !important;
      padding-top: 0px !important;
    }
  }
}

@media only screen and (min-width: 1180px) {
  .tag-normal .tag-info {
    width: 320px;
    width: calc(100% - 140px) !important;
    padding-left: 15px !important;
  }

  .tag-padding {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .tag-content {
    h3 {
      font-size: 20px;
      padding-right: 400px;
      line-height: 1.4;
    }
  }

  .tag-normal .tag-item {
    //width: 75% !important;
  }

  .wall_of_fame .claim_to_fame {
    left: 45px;
    width: 68% !important;
    line-height: 1.4;

    .collapse {
      overflow: visible;
      height: auto;
      display: inline-block;
    }

    .moreinfo {
      display: none;
    }
  }
}
</style>
