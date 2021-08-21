import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import ptBRLocale from 'element-plus/lib/locale/lang/pt-br';
import router from './router';

import App from './App.vue';

import './element-variables.scss';


const app = createApp(App);

app.use(router);
app.use(ElementPlus, {ptBRLocale});

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
