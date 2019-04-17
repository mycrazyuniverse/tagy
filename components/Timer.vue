<template>
  <span class="timer" :data-ends="ends">
    <i class="timer-hours">00:</i>
    <i class="timer-mins">00:</i>
    <i class="timer-secs">00</i>
  </span>
</template>

<script>
export default {
  methods: {
    minutesUntilMidnight() {
      var midnight = new Date();
      midnight.setHours(24);
      midnight.setMinutes(0);
      midnight.setSeconds(0);
      midnight.setMilliseconds(0);
      return midnight.getTime() - new Date().getTime();
    }
  },
  props: {
    ends: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>
