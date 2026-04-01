import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Game from './Game.vue';
import Home from './Home.vue';
import VueMinesweeper from '../src';

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'home',
      },
    },
  ],
});

createApp(App)
  .use(router)
  .use(VueMinesweeper)
  .mount('#app');
