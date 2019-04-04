<template>
  <div id="app">
    <div class="container py-3">
      <h1>Vue minesweeper</h1>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <div class="btn-group">
          <a href="#" class="btn btn-outline-success" @click.prevent="setGame(9,9,10)">
            Beginner
          </a>
          <a href="#" class="btn btn-outline-success" @click.prevent="setGame(16,16,40)">
            Intermediate
          </a>
          <a href="#" class="btn btn-outline-success" @click.prevent="setGame(16,30,99)">
            Expert
          </a>
        </div>
        <hr>
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
             v-if="rows && rows <= 50 && cols && cols <= 50 && bombs && bombs <= 99"
             :class="{'col-md-9 col-lg-7': cols < 14}"
        >
          <minesweeper-game :rows="rows" :cols="cols" :bombs="bombs"></minesweeper-game>
        </div>
        <div v-else>
          <h3 class="text-center">416: Out of range</h3>
          <p>Cols and rows are max 50. But you may have 99 bombs!</p>
          <br>
          <img src="https://http.cat/416" alt="Out of range">
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <h3>Instalation</h3>
        <code>npm i vue-minesweeper</code>
      </div>
    </div>
    <br><br><br><br><br><br>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      rows: 9,
      cols: 9,
      bombs: 10,
    };
  },
  methods: {
    setGame(rows, cols, bombs) {
      this.rows = rows;
      this.cols = cols;
      this.bombs = bombs;
    },
  },
};
</script>
