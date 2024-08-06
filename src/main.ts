import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import './style.css'
import App from './App.vue'
import LogIn from './components/pages/LogIn.vue';
import LogPage from './components/pages/LogPage.vue';

const routes = [
  { path: "/login", component: LogIn },
  { path: "/me", component: LogPage }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
