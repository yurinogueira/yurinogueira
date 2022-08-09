import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/fala-tu",
        name: "Contact",
        component: () => import("../views/ContactPage.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
});
