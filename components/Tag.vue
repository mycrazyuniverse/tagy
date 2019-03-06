<template>
  <article
    :class="'tag tag-normal tag-link tag-' + status"
    :data-logo="logo"
    :data-code="code"
    :id="'tag' + id"
  >
    <div class="tag-item">
      <div class="float-left">
        <Discountbox :value="discountvalue" :label="discountlabel"></Discountbox>
      </div>
      <div class="tag-info float-right">
        <div class="tag-content">
          <h3 class="tag-title">
            <a :href="url">{{ title }}</a>
          </h3>
          <ul class="tag-properties" v-if="views || details">
            <li v-if="views">{{ views }}x bekeken</li>
            <li v-if="details">
              <a
                data-toggle="collapse"
                class="more"
                :data-target="'#details' + id"
                data-text="Collapse"
              >
                Details
                >
              </a>
            </li>
          </ul>
          <div class="tag-desc collapse" :id="'details' + id">
            <div v-html="details"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tag-button float-right" v-if="buttontext">
      <button>{{ buttontext }}</button>
    </div>
  </article>
</template>

<script>
import Discountbox from "~/components/Discountbox.vue";

export default {
  components: {
    Discountbox
  },
  props: {
    id: {
      type: Number
    },
    status: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    discountlabel: {
      type: String,
      default: ""
    },
    discountvalue: {
      type: String,
      default: ""
    },
    code: {
      type: String,
      default: ""
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
      default: 0
    },
    buttontext: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.tag {
  margin-bottom: 15px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: block;

  .tag-button {
    display: none;
    transform: translate(0%, -50%);
    position: absolute;
    top: 50%;
    right: 20px;

    button {
      -webkit-appearance: none;
      background-color: #173a68;
      color: #fff;
      font-size: 15px;
      padding-right: 30px;
      padding-left: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      border: none;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 20px;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    padding-right: 60px;
    text-decoration: underline;
    letter-spacing: -0.5px;

    a {
      color: #173a68;
      text-decoration: underline;
    }
  }

  .tag-item {
    display: inline-block;
    width: 100%;
  }

  .tag-info {
    display: inline-block;
    width: calc(100% - 120px);
    padding-left: 10px;
    border-left: 1px dashed #85b5c5;
    padding-top: 20px;
    padding-bottom: 20px;

    p {
      padding-top: 10px;
    }
  }

  .tag-properties {
    font-size: 14px;
    color: #acacac;
    width: 100%;
    display: inline-block;

    li {
      float: left;
      padding-right: 10px;
    }
  }

  .tag-desc {
    padding-right: 50px;
    font-size: 12px;
  }

  .tag-button {
    display: none;
  }
}

.tag-exclusive {
  background-image: url("../assets/images/exlcusieve_coupon.png");
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-color: #29abe2;

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

.tag-info {
  width: 320px;
  width: calc(100% - 140px);
}

@media only screen and (max-width: 1180px) {
  .tag-link::after {
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
}

@media only screen and (min-width: 1180px) {
  .tag-info {
    width: 320px;
    width: calc(100% - 140px) !important;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    padding-left: 15px !important;
  }

  .discount-box {
    padding-left: 20px;
  }

  .tag-content {
    h3 {
      font-size: 20px;
    }
  }

  .tag {
    border-radius: 10px;
    overflow: hidden;
  }

  .tag-item {
    width: 75% !important;
  }

  .tag-button {
    display: block !important;
  }

  .wall_of_fame .claim_to_fame {
    left: 45px;
    width: 60% !important;

    .collapse {
      overflow: visible;
      height: auto;
      display: inline-block;
    }

    .moreinfo {
      display: none;
    }
  }

  #content {
    width: 80%;
    float: left;
  }

  .sidebar {
    width: 20% !important;
  }
}
</style>
