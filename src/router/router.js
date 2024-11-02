import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import YearPage from './pages/YearPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/year/:year', component: YearPage, name: 'year' }, // Optional name for the route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
