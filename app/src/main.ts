import { createApp } from "vue";
import Router from "./router/index"
import App from "./App.vue";

import "~/styles/index.scss";

import "element-plus/theme-chalk/src/message.scss"

const app = createApp(App);
app.use(Router)
app.mount("#app");
