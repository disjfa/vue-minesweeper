import Vue from 'vue';
import MinesweeperGame from './components/MinesweeperGame.vue';

function install(Vue, options = {}) {
  Vue.component('MinesweeperGame', MinesweeperGame);
}

if (typeof window !== 'undefined'
  && window.Vue
  && window.Vue === Vue
) {
  install(window.Vue);
}
export default install;
