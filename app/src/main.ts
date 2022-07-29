import { createApp } from "vue";
import Router from "./router/index";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faLinkedinIn)

import "~/styles/index.scss";

const app = createApp(App);

app.use(Router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
