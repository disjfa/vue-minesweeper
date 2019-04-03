<template>
  <div id="app">
    <div class="container py-3">
      <h1>Vue minesweeper</h1>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <h3>Beginner</h3>
        <div class="row justify-content-md-center">
          <div class="col col-md-9 col-lg-7">
            <minesweeper-game></minesweeper-game>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-3">
      <h3>Intermediate</h3>
      <minesweeper-game :rows="16" :cols="16" :bombs="40"></minesweeper-game>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <h3>Expert</h3>
        <minesweeper-game :rows="16" :cols="30" :bombs="99"></minesweeper-game>
      </div>
    </div>
    <div class="container py-3">
      <h3>Instalation</h3>
      <code>npm i vue-minesweeper</code>
    </div>
    <br><br><br><br><br><br>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
};
</script>
