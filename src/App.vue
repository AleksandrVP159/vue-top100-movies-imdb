<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { auth } from "./includes/firebase";
import { useUserStore } from './stores/user';
import { useMovieStore } from './stores/movies';

import Header from './components/Header.vue';

const userStore = useUserStore()
const movieStore = useMovieStore()

onMounted(() => {
  if (auth.currentUser) {
    userStore.$patch((state) => {
      state.userLoggedIn = true
    })
  }
})
</script>

<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s linear;
  opacity: 0;
}
</style>
