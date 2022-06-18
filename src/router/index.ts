import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
