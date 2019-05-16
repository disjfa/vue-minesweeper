<template>
  <div id="app">
    <div class="container py-3">
      <h1>Vue minesweeper</h1>
    </div>
    <div class="bg-light">
      <div class="container py-3">
        <div class="btn-group">
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 9,
            cols: 9,
            bombs: 10,
          }}">
            Beginner
          </router-link>
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 16,
            cols: 16,
            bombs: 40,
          }}">
            Intermediate
          </router-link>
          <router-link href="#" class="btn btn-outline-success" :to="{name: 'game', params: {
            rows: 16,
            cols: 30,
            bombs: 99,
          }}">
            Expert
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
};
</script>
