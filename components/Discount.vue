<template>
  <div :class="discount_classes()">
    <p :class="sizeclass">{{ value }}</p>
    <p class="label label-default uppercase">multi</p>
  </div>
</template>

<script>
export default {
  methods: {
    discount_classes() {
      var classes = [];

      classes.push("discount-box");

      if (this.position == "center") {
        classes.push("center");
        classes.push("text-center");
      }

      if (this.border) {
        classes.push("discount-border");
      }

      return classes.join(" ");
    }
  },
  props: {
    position: {
      type: String,
      default: "center"
    },
    border: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    context: {
      type: String,
      default: ""
    },
    labelbg: {
      type: String,
      default: ""
    }
  },
  computed: {
    sizeclass: function() {
      var charcount = this.value.length;
      var sizeclass = "text";

      if (charcount <= 4) {
        sizeclass = "text-lg";
      } else if (charcount <= 6) {
        sizeclass = "text-md";
      } else if (charcount <= 8) {
        sizeclass = "text-sm";
      } else if (charcount <= 10) {
        sizeclass = "text-xs";
      } else if (charcount <= 12) {
        sizeclass = "text-mini";
      } else if (charcount <= 14) {
        sizeclass = "text-micro";
      } else if (charcount <= 16) {
        sizeclass = "text-nano";
      } else {
        sizeclass = "text-nano";
      }

      return "discount-text " + sizeclass;
    },
    labelcolorStyle: function() {
      if (this.labelbg) {
        return "background: " + this.labelbg + ";";
      }
    }
  }
};
</script>

<style lang="scss">
.text-lg {
  font-size: 32px;
}

.discount-text {
  font-weight: bold;
  padding-bottom: 5px;
}

.coupon-top {
  padding-top: 15px !important;
}

.coupon-bottom {
  padding-bottom: 15px !important;
}

.discount-box {
  padding-right: 15px;
  padding-left: 15px;
  width: 100px;
  line-height: 1;

  .label-default {
    color: #ffffff;
    background-color: #29abe2;
  }

  .label {
    display: inline-block;
    padding: 5px 0px;
    border-radius: 80px;
    width: 90px;
    font-size: 14px;
    font-weight: bold;
  }
}

.text-md {
  font-size: 28px;
}

.text-sm {
  font-size: 20px;
}

.text-xs {
  font-size: 16px;
}

.text-mini {
  font-size: 12px;
}

.text-micro {
  font-size: 10px;
}

.text-nano {
  font-size: 8px;
}

.discount-border {
  border-right: 1px dashed #85b5c5;
}

@media only screen and (max-width: 1180px) {
  .discount-box {
    padding-right: 5px;
    padding-left: 5px;
    width: 90px;

    .label {
      width: 80px;
    }
  }
}
</style>
