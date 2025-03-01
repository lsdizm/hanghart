import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
// Vuetify 관련 import 수정
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify 스타일 가져오기 (필수)
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// 화면 컴포넌트 import
import MainLayout from './components/MainLayout.vue';
import Dashboard from './components/Dashboard.vue';
import Inventory from './components/Inventory.vue';
import Incoming from './components/Incoming.vue';
import Outgoing from './components/Outgoing.vue';
import ItemManagement from './components/ItemManagement.vue';
import Login from './components/Login.vue';
import UserInfo from './components/UserInfo.vue';
import Settings from './components/Settings.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'Main',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      // ... 나머지 라우트 설정
    ],
  },
  // ... 나머지 라우트 설정
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Vuetify 인스턴스 생성
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
// Vuetify 사용 설정
app.use(vuetify);

app.mount('#app');
