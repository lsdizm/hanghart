<template>
    <v-list>
      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        link
        @click="$emit('close')"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </template>
  
  <script>
  export default {
    name: 'DrawerMenu',
    emits: ['close'],
    data() {
      return {
        menuItems: [
          { title: '대시보드', to: '/main/dashboard' },
          { title: '재고 현황', to: '/main/inventory' },
          { title: '입고', to: '/main/incoming' },
          { title: '출고', to: '/main/outgoing' },
          { title: '물품 관리', to: '/main/item-management' },
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>
  