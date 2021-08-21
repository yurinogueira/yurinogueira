import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue';
import { locale } from 'element-plus';

import ElementPlus from 'element-plus';
import router from './router';
import lang from 'element-plus/lib/locale/lang/pt-br';
import App from './App.vue';

import 'dayjs/locale/pt-br';
import './element-variables.scss';


locale(lang);

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
