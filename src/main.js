import Vue from 'vue';
import VueRouter from 'vue-router';

// Register validators
import './validators/index.js';

// Plugins
import App from './App.vue';

// router setup
import routes from './router/';


// plugin setup
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkExactActiveClass: 'nav-item active',

    scrollBehavior(to, savedPosition) {
        if (to.hash) {
            return {selector: to.hash};
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0};
        }
    }
});

router.beforeEach((to, next) => {
    let params = to.query;
    for (let key in params) {
        if(key.startsWith('utm_')){
            localStorage.setItem(key, params[key]);
        }
    }
    next();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    data: {
        Chartist: Chartist
    }
});