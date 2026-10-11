import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/experiencias/:id",
    name: "ExperienceDetail",
    component: () => import("../views/ExperienceDetail.vue"),
  },
  {
    path: "/fala-tu",
    name: "Contact",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export default createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
