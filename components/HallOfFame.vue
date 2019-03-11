<template>
  <article class="tag tag-normal wall_of_fame">
    <div class="masterpiece float-left">
      <Discountbox :value="discountvalue" :label="discountlabel"></Discountbox>
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
      <div class="collapse" :id="'details' + id">
        <p>{{ details }}</p>
      </div>
      <a
        data-toggle="collapse"
        class="moreinfo"
        :data-target="'#details' + id"
        data-text="Collapse"
      >details ></a>
    </div>
    <div class="vip"></div>
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
    discountlabel: {
      type: String,
      default: ""
    },
    discountvalue: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.wall_of_fame {
  background-image: url("../assets/images/hall_of_fame_paper.png");
  padding-top: 25px;
  padding-bottom: 25px;
  display: inline-block;
  width: 100%;

  .discount-box {
    padding-left: 10px !important;
    padding-top: 5px;
  }

  .stars {
    display: inline-block;
  }

  .claim_to_fame {
    color: #fff;
    width: 50%;
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
    left: 22px;

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
    margin-left: 5%;
    position: relative;
  }
}
</style>
