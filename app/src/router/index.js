import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/pages/Home';
import About from '../views/pages/About';
import IEEE754 from '../views/features/IEEE754';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: About
  },
  {
    path: '/ieee754',
    name: 'IEEE754',
    component: IEEE754
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
