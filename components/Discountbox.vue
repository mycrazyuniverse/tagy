<template>
  <div class="discount-box text-center">
    <slot>
      <span :class="sizeclass">{{ value }}</span>
      <span v-if="label" :class="context + ' label uppercase'" :style="labelcolorStyle">{{ label }}</span>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
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

.warning {
  background-color: #dd9b20 !important;
}

.discount-box {
  overflow: hidden;
  cursor: pointer;
  padding-right: 10px;
  padding-left: 10px;
  width: 100px;
  display: block;
  transform: translate(0%, -50%);
  position: absolute;
  top: 50%;
  margin-top: -2px;

  .discount-text {
    display: block;
    font-weight: bold;
    padding-bottom: 5px;
    color: #173a68;
  }

  .label {
    display: inline-block;
    padding: 5px 0px;
    border-radius: 80px;
    width: 85%;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    background-color: #29abe2;
  }
}
</style>
