import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../views/layouts/Default';

import Home from '../views/pages/Home';
import EterniaServer from '../views/pages/EterniaServer';

const routes = [
  {
    path: "/",
    redirect: "/inicio",
    component: DefaultLayout,
    name: "main",
    children: [
      {
        path: '/inicio',
        name: 'inicio',
        components: { default: Home }
      }
    ]
  },
  {
    path: "/projetos",
    redirect: "/projetos/sobre",
    component: DefaultLayout,
    name: "projetos",
    children: [
      {
        path: '/projetos/sobre',
        name: 'sobre',
        components: { default: Home }
      },
      {
        path: '/projetos/eterniaserver',
        name: 'eterniaserver',
        components: { default: EterniaServer }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
