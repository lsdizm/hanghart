// src/router/routes.js
import Dashboard from '../components/Dashboard.vue';
import Inventory from '../components/Inventory.vue';
import Incoming from '../components/Incoming.vue';
import Outgoing from '../components/Outgoing.vue';
import ItemManagement from '../components/ItemManagement.vue';
import UserInfo from '../components/UserInfo.vue';
import Settings from '../components/Settings.vue';

const routeData = [
  {
    path: '/main/dashboard',
    name: '대시보드', // 한글로 메뉴명 수정
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/inventory',
    name: '재고 현황', // 한글로 메뉴명 수정
    component: Inventory,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/incoming',
    name: '입고', // 한글로 메뉴명 수정
    component: Incoming,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/outgoing',
    name: '출고', // 한글로 메뉴명 수정
    component: Outgoing,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/item-management',
    name: '물품 관리', // 한글로 메뉴명 수정
    component: ItemManagement,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/user-info',
    name: '유저 정보',
    component: UserInfo,
    meta: { requiresAuth: true },
  },
  {
    path: '/main/settings',
    name: '설정',
    component: Settings,
    meta: { requiresAuth: true },
  },
  // ... 추가 라우트
];

export default routeData;
