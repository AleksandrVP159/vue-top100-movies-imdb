<template>
    <header id="header" class=" bg-gray-700">
        <nav class="container mx-auto flex justify-start items-center py-5 px-4">
            <router-link @click="reload" class="text-white font-bold uppercase text-2xl mr-4" :to="{ name: 'home' }"
                exact-active-class="no-active">
                Movies IMDb
            </router-link>

            <div class="flex flex-grow items-center">
                <ul class="flex flex-row mt-1">
                    <li>
                        <router-link class="px-2 text-white" :to="{ name: 'about' }">About</router-link>
                    </li>
                    <li v-if="!userStore.userLoggedIn">
                        <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">Login / Register</a>
                    </li>
                    <template v-else>
                        <li>
                            <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>
  
<script setup>
import { useUserStore } from '../stores/user.js'
import { useModalStore } from '../stores/modal.js'

import { useRoute, useRouter } from 'vue-router';

const userStore = useUserStore()
const modalStore = useModalStore()
const route = useRoute()
const router = useRouter()

const toggleAuthModal = () => {
    modalStore.isOpen = !modalStore.isOpen
}

const signOut = () => {
    userStore.signout()

    if (route.meta.requiresAuth) {
        router.push({ name: 'home' })
    }
}

const reload = () => {
    if (route.name === 'home') {
        window.location.replace("?page=1")
    }
}

</script>
  
