<template>
  <div>
    <div class="bg-light">
      <div class="container py-3">
        <router-link :to="{name: 'home'}" class="btn btn-outline-secondary" aria-label="Back">
          <i class="fa fa-arrow-left"></i>
        </router-link>
        <h3 class="d-inline btn">Vue minesweeper</h3>
      </div>
    </div>
    <div class="container pb-3">
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
