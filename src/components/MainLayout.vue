<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" temporary>
        <DrawerMenu @close="drawer = false" />
      </v-navigation-drawer>
  
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Hanghart</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="showUserInfo">사용자 정보</v-btn>
        <v-btn @click="showSettings">설정</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import DrawerMenu from './DrawerMenu.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      DrawerMenu,
    },
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      showUserInfo() {
        this.$router.push('/userInfo');
      },
      showSettings() {
        this.$router.push('/settings');
      },
    },
  };
  </script>
  
  <style>
  </style>
  