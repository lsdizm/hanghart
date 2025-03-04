<template>
  <v-list>
    <v-list-item
      v-for="item in menuItems"
      :key="item.name"
      :to="item.path"
      link
      @click="$emit('close')"
    >
      <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
import routeData from '../router/routes';

export default {
  name: 'DrawerMenu',
  emits: ['close'],
  data() {
    return {
      menuItems: routeData.filter((route) => route.meta?.requiresAuth), // 인증이 필요한 메뉴만 필터링
    };
  },
};
</script>

<style scoped></style>
