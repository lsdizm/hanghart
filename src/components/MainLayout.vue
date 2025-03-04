<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>My App</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account" v-bind="props"></v-btn>
        </template>
        <v-list>
          <v-list-item :to="{ path: '/main/user-info' }" link @click="drawer = false">
            <v-list-item-title>유저 정보</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-cog" v-bind="props"></v-btn>
        </template>
        <v-list>
          <v-list-item :to="{ path: '/main/settings' }" link @click="drawer = false">
            <v-list-item-title>설정</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :rail="rail" permanent>
      <DrawerMenu @close="drawer = false" /> </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import DrawerMenu from './DrawerMenu.vue'; // Correct import path

export default {
  name: 'MainLayout',
  components: {
    DrawerMenu, // Correctly register DrawerMenu component
  },
  data() {
    return {
      drawer: true,
      rail: false,
    };
  },
};
</script>

<style scoped></style>
