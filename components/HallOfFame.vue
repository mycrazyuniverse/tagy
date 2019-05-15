<template>
  <div>
    <div class="masterpiece float-left">
      <slot name="discountbox">
        <Discountbox :value="discount.value" :label="discount.label"></Discountbox>
      </slot>
      <img src="../assets/images/masterpiece-8.png">
    </div>
    <div class="claim_to_fame float-left text-center">
      <div class="stars">
        <svg-icon name="star" class="star"/>
        <svg-icon name="star" class="star"/>
        <svg-icon name="star" class="star"/>
        <svg-icon name="star" class="star"/>
        <svg-icon name="star" class="star"/>
      </div>
      <h3>{{title}}</h3>
      <a
        data-toggle="collapse"
        class="moreinfo"
        :data-target="'#details' + id"
        data-text="Collapse"
      >details ></a>
    </div>
    <div class="vip"></div>
    <div class="details" v-if="details">
      <a data-toggle="collapse" class="more more-bottom prevent" :data-target="'#details' + id">
        details
        <span class="arrow arrow-down float-right"></span>
      </a>
    </div>
    <div class="tag-desc" v-if="details">
      <div class="collapse details-container w100" :id="'details' + id">
        <slot name="details">
          <div class="padding">
            <div>{{ details }}</div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Discountbox from "~/components/Discountbox.vue";

export default {
  components: {
    Discountbox
  },
  props: {
    id: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    discount: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.discount);
  }
};
</script>

<style lang="scss">
.tag-halloffame {
  background-image: url("../assets/images/hall_of_fame_paper.png");
  display: inline-block;
  width: 100%;

  .discount-box {
    padding-top: 5px;
  }

  .claim_to_fame {
    color: #fff;
    width: 46%;
    position: relative;
    z-index: 100;

    a {
      color: #fff;
    }

    .star {
      fill: #fbae17;
      float: left;
      width: 25px;
      height: 25px;
      padding-left: 2px;
      padding-right: 2px;
    }

    h3 {
      font-size: 21px;
      line-height: 1.2;
      padding-top: 10px;
      padding-bottom: 5px;
      padding-left: 5px;
      padding-right: 5px;
    }

    p {
      padding-left: 12%;
      padding-right: 12%;
      font-size: 14px;
    }
  }

  .discount-box {
    left: 14px;

    .label {
      background-color: #fbae17;
    }
  }

  .vip {
    background-image: url("../assets/images/vip-8.png");
    background-repeat: repeat-x;
    background-position-x: 79%;
    height: 70px;
    width: 100%;
    z-index: 99;
    bottom: 0px;
    position: absolute;
  }

  .masterpiece {
    position: relative;
  }
}
</style>
