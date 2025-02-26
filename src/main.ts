import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import router from "./components/router/Router";
import "vue-toastification/dist/index.css";
import naive from "naive-ui";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.use(naive);
app.use(vuetify);

app.mount("#app");
