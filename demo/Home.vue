<template>
  <div>
    <div class="container py-3">
      <h1>Vue minesweeper</h1>
      <p class="lead">
        A simple minesweeper game.
      </p>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <h3>Play a game</h3>
        <div class="row">
          <div class="col-12 col-md-4 py-3">
            <router-link href="#" class="btn btn-lg btn-block btn-success" :to="{
              name: 'game',
              params: {
                rows: 9,
                cols: 9,
                bombs: 10,
              }}">
              <i class="fa fa-baby"></i>
              Beginner
            </router-link>
            <p class="pt-3">A simple 9x9 beginner game</p>
          </div>
          <div class="col-12 col-md-4 py-3">
            <router-link href="#" class="btn btn-lg btn-block btn-success" :to="{
              name: 'game',
              params: {
                rows: 16,
                cols: 16,
                bombs: 40,
              }}">
              <i class="fa fa-user"></i>
              Intermediate
            </router-link>
            <p class="pt-3">Intermediate, a 16x16 board</p>
          </div>
          <div class="col-12 col-md-4 py-3">
            <router-link href="#" class="btn btn-lg btn-block btn-success" :to="{
              name: 'game',
              params: {
                rows: 16,
                cols: 30,
                bombs: 99,
              }}">
              <i class="fa fa-user-astronaut"></i>
              Expert
            </router-link>
            <p class="pt-3">For the die hards, 16x99 with 99 bombs</p>
          </div>
        </div>
      </div>
    </div>

    <form class="bg-primary py-3 text-light" @submit="updateRoute">
      <div class="container">
        <h3>Or start a custom game</h3>
        <div class="row">
          <div class="form-group col-12 col-md-4">
            <label for="input-rows">Rows</label>
            <input type="number" v-model.number="rows" class="form-control"
                   min="1" max="50" id="input-rows">
          </div>
          <div class="form-group col-12 col-md-4">
            <label for="input-cols">Cols</label>
            <input type="number" v-model.number="cols" class="form-control"
                   min="1" max="50" id="input-cols">
          </div>
          <div class="form-group col-12 col-md-4">
            <label for="input-bombs">Bombs</label>
            <input type="number" v-model.number="bombs" class="form-control"
                   min="1" max="99" id="input-bombs">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-secondary">
              <i class="fa fa-dice"></i>
              Play
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'home',
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
      console.log('a');
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
};
</script>
