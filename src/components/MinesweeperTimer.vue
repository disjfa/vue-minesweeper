<template>
  <div>{{ theTime.toFixed(1) }}</div>
</template>

<script>
export default {
  name: 'minesweeper-timer',
  props: {
    finished: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      theTime: 0,
      timer: false,
      timerReq: false,
    };
  },
  mounted() {
    this.initTimer();
  },
  methods: {
    initTimer() {
      if (this.finished) {
        window.cancelAnimationFrame(this.timerReq);
        return;
      }
      this.timer = false;
      this.timerReq = window.requestAnimationFrame(this.setTimer);
    },
    setTimer(timestamp) {
      if (!this.timer) {
        this.timer = timestamp;
      }
      this.theTime = (timestamp - this.timer) / 1000;
      if (!this.finished) {
        window.requestAnimationFrame(this.setTimer);
      }
    },
  },
  watch: {
    finished() {
      this.initTimer();
    },
  },
};
</script>
