// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import MainLayout from './components/MainLayout.vue';
import Login from './components/Login.vue';
import routeData from './router/routes';
import '@mdi/font/css/materialdesignicons.css' // 추가

const mainRoutes = {
  path: '/main',
  name: 'Main',
  component: MainLayout,
  children: routeData
}
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  mainRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // 추가
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
