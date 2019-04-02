import Vue from 'vue';
import App from './App.vue';
import VueMinesweeper from '../src';

Vue.config.productionTip = false;
Vue.use(VueMinesweeper);

new Vue({
  render: h => h(App),
}).$mount('#app');
