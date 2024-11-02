import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import FirstYear from '@/views/1Year.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/1year',
    name: '1Year',
    component: FirstYear,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
