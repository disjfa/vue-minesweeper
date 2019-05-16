<template>
  <div>
    <div class="bg-light">
      <div class="container">
        <div class="row">
          <div class="form-group col">
            <label for="input-rows">Rows</label>
            <input type="number" v-model.number="rows" class="form-control"
                   min="1" max="50" id="input-rows">
          </div>
          <div class="form-group col">
            <label for="input-cols">Cols</label>
            <input type="number" v-model.number="cols" class="form-control"
                   min="1" max="50" id="input-cols">
          </div>
          <div class="form-group col">
            <label for="input-bombs">Bombs</label>
            <input type="number" v-model.number="bombs" class="form-control"
                   min="1" max="99" id="input-bombs">
          </div>
        </div>
      </div>
    </div>
    <div class="container py-3">
      <h3 class="text-center">The game</h3>
      <div class="row justify-content-md-center">
        <div class="col"
             v-if="doesItFit()"
             :class="{'col-md-9 col-lg-7': cols < 14}"
        >
          <minesweeper-game :rows="rows" :cols="cols" :bombs="bombs"></minesweeper-game>
        </div>
        <div v-else>
          <h3 class="text-center">416: Out of range</h3>
          <p>Cols and rows are max 50. But you may have 99 bombs!</p>
          <br>
          <img src="https://http.cat/416" alt="Out of range" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data() {
    return {
      rows: 9,
      cols: 9,
      bombs: 10,
    };
  },
  mounted() {
    this.initParams(this.$route.params);
  },
  methods: {
    doesItFit() {
      const { rows, cols, bombs } = this;
      if ((rows * cols) < bombs) {
        return false;
      }
      if (rows > 50) {
        return false;
      }
      if (cols > 50) {
        return false;
      }
      if (bombs > 99) {
        return false;
      }
      return true;
    },
    initParams(params) {
      const { rows, cols, bombs } = params;
      this.rows = parseInt(rows) || 9;
      this.cols = parseInt(cols) || 9;
      this.bombs = parseInt(bombs) || 10;
    },
    updateRoute(extraParams) {
      const { rows, cols, bombs } = this;
      const params = Object.assign({
        rows,
        cols,
        bombs,
      }, extraParams);

      this.$router.push({
        name: 'game',
        params,
      });
    },
  },
  watch: {
    rows(to) {
      this.updateRoute({
        rows: to,
      });
    },
    cols(to) {
      this.updateRoute({
        cols: to,
      });
    },
    bombs(to) {
      this.updateRoute({
        bombs: to,
      });
    },
    $route(to) {
      this.initParams(to.params);
    },
  },
};
</script>
