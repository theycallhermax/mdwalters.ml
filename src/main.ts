import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./lib/index.css";
// import "./lib/index.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
