import { createRouter, createWebHistory } from 'vue-router';
import MainView from './MainView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainView },
    { path: '/zh', component: MainView },
    { path: '/:pathMatch(.*)*', component: MainView },
  ],
});
