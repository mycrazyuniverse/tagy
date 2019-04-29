<template>
  <div id="dialog" class="dialog hide">
    <div class="dialog-content rounded">
      <div class="close dia-close"></div>
      <div class="dialog-slot">
        <slot>
          <Codal></Codal>
        </slot>
      </div>
      <Optin :intro="false"></Optin>
    </div>
    <div class="overlay dia-close"></div>
  </div>
</template>

<script>
import Optin from "~/components/Optin.vue";
import Codal from "~/components/Codal.vue";

export default {
  components: {
    Optin,
    Codal
  },
  mounted() {}
};
</script>

<style lang="scss">
#dialog {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1002;
  text-align: center;

  .dialog-content {
    max-height: 95vh;
    overflow-y: auto;
    z-index: 9999;
    position: relative;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    top: 50%;
    transform: translateY(-50%);
  }

  .dialog-slot {
    padding: 30px 0px;
    background: #e8edf1;
  }
}

.dialog-hidden {
  height: 0px;
}
</style>
