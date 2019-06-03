<template>
  <div class="minesweeper">
    <div class="minesweeper-status">
      <div class="minesweeper-bombcount">
        {{bombCount}}
      </div>
      <a href="#" @click.prevent="initGrid">
        &#9786;
      </a>
      <minesweeper-timer class="minesweeper-timer" :finished="finished"></minesweeper-timer>
    </div>

    <div class="minesweeper-grid" :style="getGridStyle()">
      <minesweeper-cell
        v-for="(cell, i) in grid"
        :key="i"
        :cell="cell"
        @click.native="clickCell(cell, i)"
        @click.right.native="addFlag(cell)"
        @dblclick.native.prevent="doubleClick(cell, i)"
        @contextmenu.native.prevent
      >
      </minesweeper-cell>
    </div>
  </div>
</template>

<script>
import MinesweeperCell from './MinesweeperCell.vue';
import MinesweeperTimer from './MinesweeperTimer.vue';

export default {
  name: 'minesweeper-game',
  components: {
    MinesweeperCell,
    MinesweeperTimer,
  },
  props: {
    cols: {
      type: Number,
      default: 9,
    },
    rows: {
      type: Number,
      default: 9,
    },
    bombs: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      bombCount: 0,
      finished: false,
      won: false,
      grid: [],
    };
  },
  mounted() {
    this.initGrid();
  },
  methods: {
    getGridStyle() {
      const { cols } = this;
      return `grid-template-columns: repeat(${cols}, 1fr);`;
    },
    initGrid() {
      let { bombs } = this;
      const { cols, rows } = this;
      const size = rows * cols;
      const grid = [];
      if (bombs > size) {
        console.log('more bombs than space on the grid!');
        return;
      }
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
      this.finished = true;
      this.$nextTick(() => {
        this.finished = false;
      });
      this.won = false;
      this.bombCount = this.bombs;
    },
    haveWeWon() {
      if (this.finished) {
        return;
      }
      if (this.bombCount !== 0) {
        return;
      }
      const remainingGrid = this.grid.find(g => !g.isOpen && !g.hasFlag);
      if (!remainingGrid) {
        this.finished = true;
        this.won = true;
      }
    },
    addFlag(cell) {
      if (this.finished) {
        return;
      }
      if (cell.isOpen) {
        return;
      }
      cell.hasFlag = !cell.hasFlag;
      const { grid } = this;
      const flagCount = grid.reduce((accumulator, currentValue) => {
        if (currentValue.hasFlag) {
          return accumulator + 1;
        }
        return accumulator;
      }, 0);
      this.bombCount = this.bombs - flagCount;
      this.haveWeWon();
    },
    doubleClick(cell, i) {
      if (this.finished) {
        return;
      }
      if (cell.isOpen === false) {
        return;
      }
      this.setNeighborhood(cell, i);
      if (!cell.bombCount) {
        return;
      }

      const { grid } = this;
      let flagCount = 0;
      cell.neighborhood.forEach((j) => {
        if (grid[j].hasFlag) {
          flagCount += 1;
        }
      });
      if (flagCount === cell.bombCount) {
        this.checkNeighborhood(cell, true);
      }
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
        const { grid } = this;
        grid.forEach((checkCell) => {
          if (checkCell.hasBomb) {
            checkCell.isOpen = true;
          }
        });
        this.finished = true;
        return;
      }

      this.setNeighborhood(cell, i);
      cell.isOpen = true;
      this.checkNeighborhood(cell);
      this.haveWeWon();
    },
    checkNeighborhood(cell, force) {
      if (cell.bombCount !== 0 && force !== true) {
        return;
      }

      const { grid } = this;
      cell.neighborhood.forEach((i) => {
        this.clickCell(grid[i], i);
      });
    },
    setNeighborhood(cell, i) {
      if (cell.neighborhood !== null) {
        return;
      }
      const { grid } = this;
      const neighborhood = [];
      let bombCount = 0;
      for (let x = -1; x < 2; x += 1) {
        for (let y = -1; y < 2; y += 1) {
          const cellIndex = this.getIndex(i, x, y);
          if (cellIndex !== false) {
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
  watch: {
    rows() {
      this.initGrid();
    },
    cols() {
      this.initGrid();
    },
    bombs() {
      this.initGrid();
    },
  },
};
</script>

<style lang="scss">
  .minesweeper {
    &-status {
      display: flex;
      justify-content: space-between;
      padding: 1rem;

      > * {
        flex: 1;
        text-align: center;
      }
    }

    &-grid {
      user-select: none;
      position: relative;
      overflow: auto;
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
