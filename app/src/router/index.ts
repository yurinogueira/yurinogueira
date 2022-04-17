import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/mic1",
        name: "Mic1",
        component: () => import("../views/MicSimulator.vue"),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes,
});
