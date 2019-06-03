import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import Game from './Game.vue';
import Home from './Home.vue';
import VueMinesweeper from '../src';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMinesweeper);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:rows/:cols/:bombs',
      name: 'game',
      component: Game,
    },
    {
      path: '*',
      redirect: {
        name: 'home',
      },
    },
  ],
});

Vue.use(VueAnalytics, {
  id: 'UA-140663214-1',
  router,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
