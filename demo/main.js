import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Game from './Game.vue';
import VueMinesweeper from '../src';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMinesweeper);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:rows/:cols/:bombs',
      name: 'game',
      component: Game,
    },
    {
      path: '*',
      redirect: {
        name: 'game',
        params: {
          rows: 9,
          cols: 9,
          bombs: 10,
        },
      },
    },
  ],
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
