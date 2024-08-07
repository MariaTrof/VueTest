import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import LogIn from "./components/pages/LogIn.vue";
import LogPage from "./components/pages/LogPage.vue";
import MainPage from "./components/pages/MainPage.vue";
import store from "./server/store";

const routes = [
  { path: "/login", name: "login", component: LogIn },
  { path: "/me", name: "me", component: LogPage },
  { path: "/", name: "main", component: MainPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.provide("store", store);

app.use(router).mount("#app");
