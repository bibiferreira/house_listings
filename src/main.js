import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import Houses from "./components/Houses.vue";
import About from "./components/About.vue";

import "./assets/main.css";

const app = createApp(App);

const routes = [
  { path: '/', component: Houses },
  { path: '/houses', component: Houses },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

app.use(router);
app.use(createPinia());

app.mount("#app");
