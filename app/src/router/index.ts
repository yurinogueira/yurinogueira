import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
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
