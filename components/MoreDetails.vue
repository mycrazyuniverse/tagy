<template>
  <div class="moredetails">
    <div class="more" v-if="content != ''">
      <a
        data-toggle="collapse"
        class="more-btn more-bottom prevent"
        :data-target="'#t-details-' + id"
      >
        details
        <span class="arrow arrow-down float-right"></span>
      </a>
    </div>
    <div class="details" v-if="content">
      <div class="collapse details-container w100" :id="'t-details-' + id">
        <slot name="details">
          <div class="padding" v-html="content"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.details {
  font-size: 12px;

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
</style>
