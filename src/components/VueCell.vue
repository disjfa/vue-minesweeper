<template>
  <div class="minesweeper-cell" :class="getClass()">
    <div v-if="cell.isOpen && cell.bombCount">
      {{ cell.bombCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-cell',
  props: {
    cell: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getClass() {
      const { cell } = this;
      if (cell.isOpen && cell.hasBomb) {
        return 'bomb';
      }
      if (cell.isOpen) {
        return 'open';
      }
      if (cell.hasFlag) {
        return 'flag';
      }
    },
  },
};
</script>

<style lang="scss">
  .minesweeper-cell {
    background: rgba(0, 0, 0, 0.1);
    border: 1px white solid;
  }

  .bomb {
    background: red;
  }

  .open {
    background: rgba(0, 0, 0, 0.05);
  }

  .flag {
    background: green;
  }
</style>
