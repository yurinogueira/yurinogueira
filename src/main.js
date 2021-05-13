import App from './App.vue'
import router from './router'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');