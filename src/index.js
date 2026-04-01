import MinesweeperGame from './components/MinesweeperGame.vue';

const VueMinesweeper = {
  install(app) {
    app.component('MinesweeperGame', MinesweeperGame);
  },
};

export { MinesweeperGame };
export default VueMinesweeper;
