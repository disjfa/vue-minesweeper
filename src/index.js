import Vue from 'vue';
import VueMinesweeper from './components/VueMinesweeper.vue';

function install(Vue, options = {}) {
  Vue.component('VueMinesweeper', VueMinesweeper);
}

if (typeof window !== 'undefined'
  && window.Vue
  && window.Vue === Vue
) {
  install(window.Vue);
}
export default install;
