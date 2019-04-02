<template>
  <div class="minesweeper">
    <a href="@" @click.prevent="initGrid">aa</a>
    <div class="minesweeper-grid">
      <vue-cell v-for="(cell, i) in grid"
                :key="i"
                :cell="cell"
                @click.native="clickCell(cell, i)"
                @click.right.native="addFlag(cell)"
                @contextmenu.native.prevent
      >
      </vue-cell>
    </div>
  </div>
</template>

<script>
import VueCell from './VueCell.vue';

export default {
  name: 'vue-minesweeper',
  components: {
    VueCell,
  },
  data() {
    return {
      cols: 9,
      rows: 9,
      bombs: 10,
      finished: false,
      grid: [],
    };
  },
  mounted() {
    this.initGrid();
  },
  methods: {
    initGrid() {
      let { bombs } = this;
      const { cols, rows } = this;
      const size = rows * cols;
      const grid = [];
      for (let i = 0; i < size; i += 1) {
        grid.push({
          hasBomb: false,
          isOpen: false,
          hasFlag: false,
          bombCount: 0,
          neighborhood: null,
        });
      }
      while (bombs > 0) {
        const num = Math.floor(Math.random() * size);
        if (grid[num].hasBomb === false) {
          bombs -= 1;
          grid[num].hasBomb = true;
        }
      }
      this.grid = grid;
      this.finished = false;
    },
    addFlag(cell) {
      if (this.finished) {
        return;
      }
      if (cell.isOpen) {
        return;
      }
      cell.hasFlag = !cell.hasFlag;
    },
    clickCell(cell, i) {
      if (this.finished) {
        return;
      }
      if (cell.hasFlag) {
        return;
      }
      if (cell.isOpen) {
        return;
      }
      if (cell.hasBomb) {
        // todo bomb!
        cell.isOpen = true;
        this.finished = true;
        console.log('boom');
        return;
      }

      this.setNeighborhood(cell, i);
      cell.isOpen = true;
      this.checkNeighborhood(cell);
    },
    checkNeighborhood(cell) {
      if (cell.bombCount !== 0) {
        return;
      }

      const { grid } = this;
      cell.neighborhood.forEach(i => {
        this.clickCell(grid[i], i);
      });
    },
    setNeighborhood(cell, i) {
      if (cell.neighborhood !== null) {
        return cell.neighborhood;
      }
      const { grid } = this;
      const neighborhood = [];
      let bombCount = 0;
      for (let x = -1; x < 2; x += 1) {
        for (let y = -1; y < 2; y += 1) {
          const cellIndex = this.getIndex(i, x, y);
          if (false !== cellIndex) {
            neighborhood.push(cellIndex);
            if (grid[cellIndex].hasBomb) {
              bombCount += 1;
            }
          }
        }
      }
      cell.bombCount = bombCount;
      cell.neighborhood = neighborhood;
    },
    getIndex(i, x, y) {
      const { cols, rows } = this;
      if (x === 0 && y === 0) {
        return false;
      }
      if ((i % cols) + x < 0 || (i % cols) + x >= cols) {
        return false;
      }
      if (Math.floor(i / cols) + y < 0 || Math.floor(i / cols) + y >= rows) {
        return false;
      }
      return i + (y * cols + x);
    },
  },
};
</script>

<style lang="scss">
  .minesweeper {
    margin: 0 auto;
    max-width: 600px;

    &-grid {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-auto-rows: 1fr;

      &:before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }

      > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
      }
    }
  }
</style>
