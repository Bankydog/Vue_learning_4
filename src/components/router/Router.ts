import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Page1 from "../pages/Page1.vue";
import Page2 from "../pages/Page2.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/page1", name: "page1", component: Page1 },
  { path: "/page2", name: "page2", component: Page2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
