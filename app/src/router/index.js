import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../views/layouts/Default'
import Home from '../views/pages/Home';

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: DefaultLayout,
    name: "main",
    meta: { requiresAuth: true },
    children: [
      {
        path: '/home',
        name: 'Home',
        components: { default: Home }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
