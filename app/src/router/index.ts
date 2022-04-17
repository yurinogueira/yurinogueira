import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
});
